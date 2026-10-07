import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { academyPlaylistUrl, academyVideos } from "@/lib/academy";

export const metadata: Metadata = {
  title: "Academy",
  description: "Short videos that show you how to edit your Forge template, put your website online with cPanel and create a business email.",
};

export default function AcademyPage() {
  return (
    <main className="content-page academy-page">
      <SiteHeader />
      <header className="content-hero">
        <span>Forge Academy</span>
        <h1>Academy.</h1>
        <p>Bought a template? Watch these short videos to edit your website, put it on the internet and set up your business email. Start with the first one.</p>
      </header>

      <section className="academy-body" aria-label="Academy videos">
        <div className="academy-grid">
          {academyVideos.map((video, index) => (
            <article className="academy-card" key={video.id}>
              <div className="academy-player">
                <video controls playsInline preload="none" poster={`/academy/${video.file}.jpg`} aria-label={video.title}>
                  <source src={`/academy/${video.file}.mp4`} type="video/mp4" />
                  Your browser cannot play this video. <a href={`/academy/${video.file}.mp4`}>Download it instead</a>.
                </video>
              </div>
              <div className="academy-info">
                <span className="academy-tag">{String(index + 1).padStart(2, "0")} · {video.tag} · {video.duration}</span>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="academy-foot">
          <div>
            <h2>Want to learn more?</h2>
            <p>Our YouTube playlist has more videos on building and launching your website.</p>
          </div>
          <div className="academy-foot-actions">
            <Link className="button button-dark" href="/">Browse templates <ArrowRight /></Link>
            <a className="button button-outline" href={academyPlaylistUrl} target="_blank" rel="noopener noreferrer">More videos on YouTube <ArrowUpRight /></a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
