# Forge — Precision Commerce Design System

This document is the visual source of truth for the template marketplace described in
`ARCHITECTURE.md` and `UI-DESIGN.md`.

## 1. Chosen direction

**Name:** Forge / Precision Commerce

**Positioning:** a premium marketplace for developers and founders who want complete,
conversion-ready websites they can ship immediately.

**Creative idea:** combine the dramatic red-and-black atmosphere and editorial scale of
the Meer Mohsin reference with the Porsche reference's disciplined navigation, full-bleed
product presentation, high-contrast editorial pauses, and precise product controls.

The storefront should feel like a high-performance product showroom, not a portfolio and
not a generic SaaS landing page. The product screenshots remain the visual evidence; the
brand system frames them with confidence.

### Reference boundary

- Borrow from Meer Mohsin: oversized type, deep red/black fields, thin grid lines,
  edge-aligned labels, occasional expressive transitions, and dramatic section changes.
- Borrow from Porsche Motorsport: compact floating navigation, cinematic full-bleed media,
  white editorial interludes, dark translucent controls, precise captions, horizontal
  story/card rails, and product-first staging.
- Do not copy either site's logos, illustrations, handwriting, race-car imagery, copy, or
  exact layouts.
- Do not use continuous scroll-jacking, cursor gimmicks, illegible red-on-black body copy,
  or spectacle on checkout/auth/dashboard screens.

## 2. Color system

The selected palette is retained exactly and assigned clear jobs.

```css
:root {
  --ink: #230101;
  --surface-deep: #360102;
  --surface-raised: #5f0203;
  --brand-dark: #880305;
  --brand: #cd0407;
  --brand-hot: #d70507;
  --paper: #ffffff;

  /* Derived neutral roles; use opacity rather than introducing blue-gray hues. */
  --text-on-dark: rgba(255, 255, 255, 0.96);
  --text-on-dark-muted: rgba(255, 255, 255, 0.66);
  --line-on-dark: rgba(255, 255, 255, 0.14);
  --surface-glass: rgba(35, 1, 1, 0.78);
  --text-on-light: rgba(35, 1, 1, 0.94);
  --text-on-light-muted: rgba(35, 1, 1, 0.62);
  --line-on-light: rgba(35, 1, 1, 0.14);
}
```

### Usage rules

- `#230101` is the main dark canvas, not pure black. It gives the brand a warmer,
  more distinctive base.
- `#360102` is used for card wells, navigation glass, and recessed surfaces.
- `#5F0203` is used for hover/elevated dark states and secondary red panels.
- `#880305` is a supporting brand shade for selected states, gradients, and subtle depth.
- `#CD0407` is the primary CTA and active-state color.
- `#D70507` is the high-energy hover/focus/hero highlight, not a second competing accent.
- `#FFFFFF` is both the primary text color on dark and the background of editorial/product
  specification sections.
- Use approximately 70% deep neutral, 20% white/editorial breathing room, and no more than
  10% vivid red on a typical page.
- Never use the brighter reds for small body text on a dark red background. Use white text
  on red buttons and white or translucent white text on dark surfaces.
- Semantic success, warning, and error colors may be introduced only in form/system states;
  they must not become brand accents.

### Gradients

Use gradients only to create depth behind media:

```css
--hero-radial: radial-gradient(circle at 65% 42%, #d70507 0%, #880305 30%, #360102 64%, #230101 100%);
--media-scrim: linear-gradient(180deg, rgba(35,1,1,0) 42%, rgba(35,1,1,.82) 100%);
```

No rainbow gradients, neon purple/blue glows, or decorative gradient text.

## 3. Typography

Use the supplied local Inter files; the website should not request fonts from Google.

```css
@font-face {
  font-family: "Inter";
  src: url("/Assets/font/Inter-4.1/web/InterVariable.woff2") format("woff2");
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: "Inter Display";
  src: url("/Assets/font/Inter-4.1/web/InterDisplay-Regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
```

### Type roles

- Display hero: Inter Display, `clamp(3.5rem, 9vw, 9rem)`, 400–500 weight, 0.88–0.96
  line-height, `-0.055em` tracking.
- Section statement: Inter Display, `clamp(2.5rem, 6vw, 6rem)`, 400–500 weight,
  0.95 line-height.
- Page title: Inter, `clamp(2.25rem, 5vw, 4.5rem)`, 600 weight, `-0.045em` tracking.
- Card title: Inter, 1–1.25rem, 600 weight, `-0.02em` tracking.
- Body: Inter, 1rem, 400 weight, 1.55–1.65 line-height, max 68 characters.
- UI label: Inter, 0.75rem, 600 weight, uppercase, `0.08em` tracking.
- Metadata: Inter, 0.75–0.875rem, 450–500 weight, tabular numerals where relevant.

Use giant typography only once or twice per page. Browsing, checkout, forms, and dashboard
screens use a compact hierarchy. Do not add a display serif or handwritten font.

## 4. Layout and spacing

- Desktop content max-width: `1440px`.
- Wide media/stage max-width: `1760px` or full bleed.
- Page gutter: `clamp(16px, 3vw, 48px)`.
- 12-column desktop grid, 6-column tablet grid, 4-column mobile grid.
- Base spacing unit: 4px. Preferred steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 144.
- Section padding: 96–144px desktop, 64–96px tablet, 48–72px mobile.
- Catalog grid: 3 columns desktop, 2 tablet, 1 mobile; 24px gaps.
- Maintain generous negative space around statement typography and product media.
- Use thin grid/crosshair details only in hero and campaign sections, never across every
  application screen.

## 5. Shape, borders, and depth

- Standard control radius: 10px.
- Compact pill/nav radius: 12px or fully rounded when height is 40px or less.
- Product card radius: 16px.
- Feature media radius: 20px.
- Dialog/sheet radius: 20px desktop; edge-to-edge with 20px top corners on mobile.
- Default border: 1px solid the relevant `--line-*` token.
- Default card shadow: `0 18px 60px rgba(35, 1, 1, 0.12)` on light.
- Floating dark control shadow: `0 10px 34px rgba(0, 0, 0, 0.34)`.

Avoid excessive nested rounded rectangles. Cards should be defined primarily by imagery,
spacing, and one restrained border.

## 6. Core components

### Floating navigation

- Desktop: logo on the left; a centered dark translucent pill with Templates, Pricing,
  Docs; Sign in and a red Get started button on the right.
- Becomes a compact top bar after the hero crosses 20% of the viewport.
- Use `backdrop-filter: blur(16px)` over media with a solid `#360102` fallback.
- Mobile: logo, Browse shortcut, and menu button; the full navigation opens in a sheet.

### Buttons

- Primary: `#CD0407` background, white label, 44–48px height. Hover uses `#D70507` and a
  1–2px lift. Active returns to the baseline.
- Secondary dark: translucent white fill/border on dark media.
- Secondary light: transparent with `#230101` border/text.
- Text action: label plus north-east or right arrow; underline grows from left on hover.
- Every button has a visible 2px focus ring and at least a 44px touch target.

### Template card

- Media-led card with a 4:3 or 16:10 preview image, product title, stack tags, and price.
- Keep copy to two lines maximum. The preview is the proof.
- Desktop hover: media scales to 1.025, scrim deepens, and Live preview/Get actions enter
  with an 8px vertical translation. No 3D tilt.
- Touch: actions are always visible; no information depends on hover.
- Use the same card anatomy on home, browse, recommendations, and dashboard.

### Product stage

- A full-width cinematic preview for featured templates, inspired by the Porsche product
  stage. Background color is sampled from the template cover but constrained by a dark
  scrim so controls remain legible.
- A bottom floating selector switches screenshots/pages; it does not auto-advance while the
  user is interacting.
- Include `View live demo` and `Get template` as explicit actions. The product itself is not
  mistaken for a decorative hero.

### Filters and search

- Sticky within the browse page after the intro.
- Desktop: search plus segmented filter chips. Mobile: search plus a Filter sheet.
- Active chips use `#CD0407`; inactive chips use border/surface neutrals.
- URL parameters hold search/filter/sort state so selections are shareable and reversible.

### Purchase panel

- Sticky right column on desktop; bottom action bar on mobile.
- Price is visually dominant, followed by one primary CTA and a short trust line.
- Do not apply cinematic motion inside checkout or entitlement/download flows.

### Forms, dialogs, and dashboard

- Prefer white or quiet `#230101` surfaces with standard density and unambiguous labels.
- Error text is never conveyed by color alone.
- Loading uses stable skeleton dimensions; avoid layout shifts.

## 7. Page rhythm

### Homepage

1. **Cinematic hero:** deep red/black field, oversized promise, one featured template visual,
   primary Browse templates CTA, and a quiet live-demo action.
2. **Proof rail:** free + premium, GitHub fork, ZIP download, and supported stacks.
3. **White editorial statement:** a single plain-language claim with ample negative space.
4. **Featured product stage:** full-width selected template with page/screenshot selector.
5. **Catalog grid:** conversion-focused cards on a clean light or dark surface.
6. **How it works:** preview, get, ship; three concise steps.
7. **Horizontal stories/proof:** releases, customer builds, or curated collections.
8. **Pricing/FAQ:** restrained, static, highly readable.
9. **Red final CTA, then dark structured footer.**

### Browse and detail pages

The browse page is practical and fast. The product detail page carries more theater in its
preview stage, then transitions to a white specification section and a stable sticky purchase
panel. Both preserve normal browser scrolling.

### Auth, dashboard, and checkout

These are application screens, not campaign pages. Use the same color/type tokens but reduce
the visual drama: clear hierarchy, low motion, compact controls, and predictable layout.

## 8. Motion system

Motion should communicate hierarchy and product quality, not delay access.

- Standard UI transition: 160ms, ease-out.
- Card/media transition: 280ms, cubic-bezier(0.22, 1, 0.36, 1).
- Section reveal: 500–700ms, same easing, once per section.
- Hero sequence: headline mask reveal, media fade/scale from 1.03 to 1, then CTA fade; total
  sequence under 1.2 seconds.
- Editorial statement: line-by-line opacity and 18px upward translation as it enters.
- Featured stage: optional pinned interval no longer than 120vh; screenshot selection is
  user-controlled. Do not scrub critical copy or video playback to scroll position.
- Horizontal story rail: native horizontal scroll with CSS snap on touch; drag support may be
  added on desktop.
- Use CSS transitions and IntersectionObserver for the base build. Introduce GSAP only for
  one clearly justified pinned hero/product sequence.
- No custom cursor, inertial scroll replacement, loader longer than 600ms, or autoplay audio.

### Reduced motion

Under `prefers-reduced-motion: reduce`, remove parallax, pinned animation, masked translation,
and smooth scrolling. Show final states immediately while preserving all content and controls.

## 9. Responsive rules

- Display headlines scale down before they wrap into more than three lines.
- Full-bleed media uses `aspect-ratio` and `object-fit: cover`; never force a desktop crop on
  mobile. Provide mobile art direction for important template screenshots.
- Sticky desktop purchase/sidebar elements become normal flow plus a bottom CTA bar on mobile.
- Horizontal navigation becomes a sheet; filter rows become a filter sheet.
- Cinematic sections shorten to 70–90svh on mobile and must not trap the scroll.
- Use `svh`/`dvh` carefully to avoid browser chrome jumps.

## 10. Accessibility and performance

- Meet WCAG AA for body text and controls. White is the default text on the red/dark ramp.
- Never place small `#CD0407` or `#D70507` text directly on the deep red surfaces.
- Preserve semantic headings, skip navigation, keyboard access, visible focus, descriptive
  labels, and alt text for every template preview.
- Avoid putting meaningful copy inside images or video.
- Preload only the Inter variable font and the hero poster. Subset fonts for production if
  the supported language set is known.
- Serve AVIF/WebP responsive screenshots with explicit dimensions and lazy-load below the fold.
- Hero video, if added, must be muted, optional, poster-backed, and no larger than necessary;
  pause it offscreen and on data-saver connections.
- Target LCP below 2.5s, CLS below 0.1, and smooth interaction on mid-range mobile hardware.

## 11. Asset requirements

The repository currently contains the Inter family but no product imagery or brand mark.
Before final visual implementation, prepare:

- A simple wordmark and compact monogram in SVG.
- At least six real template cover images at 1600×1000 and mobile variants.
- Three to five screenshots per product detail page.
- One hero poster that composites the strongest template into the red stage.
- Customer logos/testimonials only when genuine; do not invent social proof.
- Optional short muted hero loop, with a static poster and reduced-motion fallback.

## 12. Anti-patterns

- Generic blue/purple SaaS gradients or glass everywhere.
- Repeated bento grids with equal visual weight.
- Huge text on every section.
- Portfolio-style experimental navigation that hides Browse or Buy.
- Red body copy on dark red surfaces.
- Motion on every element, scroll hijacking, or content that only appears after animation.
- Fake download counts, logos, testimonials, ratings, or urgency.
- Stock imagery unrelated to the actual templates being sold.

