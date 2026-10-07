import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { academyVideos } from "@/lib/academy";

/** Shown to people who own a template: points them to the Academy videos. */
export function AcademyCallout({ highlight = false }: { highlight?: boolean }) {
  return (
    <aside className={`academy-callout${highlight ? " academy-callout-highlight" : ""}`} aria-label="Academy">
      <div>
        <strong>{highlight ? "Next step: watch the Academy videos" : "Learn how to edit your website"}</strong>
        <span>There are {academyVideos.length} short videos in the Academy that show you how to edit your template, put your website online and create your business email.</span>
      </div>
      <Link className="button button-dark" href="/academy">Watch the Academy <ArrowRight /></Link>
    </aside>
  );
}
