"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  video: string;
  poster: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Card mode links to the template and plays on hover or via the play button. Detail mode autoplays. */
  href?: string;
  linkLabel?: string;
  autoPlay?: boolean;
  className?: string;
  children?: ReactNode;
};

// Only one preview plays at a time.
let current: HTMLVideoElement | null = null;

export function PreviewMedia({ video, poster, alt, sizes, priority = false, href, linkLabel, autoPlay = false, className = "card-media", children }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (current && current !== el) current.pause();
    current = el;
    el.muted = true; // React can render `muted` late, which blocks autoplay
    el.preload = "auto";
    el.play().catch(() => setPlaying(false));
  }, []);

  const stop = useCallback((reset: boolean) => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    if (reset) el.currentTime = 0;
  }, []);

  // Detail page: play while on screen (and again whenever the tab becomes visible), pause when scrolled away.
  useEffect(() => {
    if (!autoPlay) return;
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const sync = () => { if (visible && !document.hidden && el.paused) play(); else if (!visible) el.pause(); };
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.25 });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => { io.disconnect(); document.removeEventListener("visibilitychange", sync); };
  }, [autoPlay, play]);

  const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={`${className} preview-media${playing ? " is-playing" : ""}`}
      onPointerEnter={(e) => { if (href && e.pointerType === "mouse" && !reduced()) play(); }}
      onPointerLeave={(e) => { if (href && e.pointerType === "mouse") stop(true); }}
    >
      <Image src={poster} alt={alt} fill sizes={sizes} priority={priority} />
      <video
        ref={ref}
        className="preview-video"
        src={video}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {href && <Link className="preview-link" href={href} aria-label={linkLabel} />}
      {children}
      <button
        type="button"
        className="preview-toggle"
        aria-label={playing ? "Pause preview video" : "Play preview video"}
        aria-pressed={playing}
        onClick={() => (playing ? stop(false) : play())}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1.5" width="3.5" height="11" rx="1" fill="currentColor" /><rect x="8.5" y="1.5" width="3.5" height="11" rx="1" fill="currentColor" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.8v10.4a.6.6 0 0 0 .9.5l8.3-5.2a.6.6 0 0 0 0-1L3.9 1.3a.6.6 0 0 0-.9.5Z" fill="currentColor" /></svg>
        )}
      </button>
    </div>
  );
}
