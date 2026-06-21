# Partners & Brands Page Redesign — Design Spec

**Date:** 2026-06-21
**Branch:** `partners-redesign`
**Requested by:** Abdulaziz (business owner), relayed via Ali
**Page:** `src/pages/partners.astro`

## Goal

Replace the current partners page — flat grid of "plain squares" — with a
**categorized, immersively themed** showcase: each brand category gets its own
full-width band with a darkened, brand-tinted photo background and logos presented
on frosted-glass chips. Add a dedicated **hospitality / GRMS** showcase. The page
should read as one cohesive, designed piece, not a logo dump.

## Decisions (locked with client)

1. **Logos:** Source all ~25 missing logos myself (official brand sites / logo CDNs),
   clean them, flag any that come out low-quality for the client to supply.
2. **Old brands:** Keep every brand currently on the site — fold each into the correct
   new category (none dropped).
3. **Hospitality / GRMS:** In scope for this round (client marked it "very important").
4. **Visual style:** Immersive themed bands (full-width dark themed photo per category,
   white/mono logos on frosted-glass chips, brightening to full color on hover).

## Information architecture — 7 categories

Brands marked ° are existing site brands folded into a category.

| Category | Brands |
|---|---|
| Audio Visual (AV) | Crestron · Extron · AMX by HARMAN · Q-SYS · Biamp · Shure · Sennheiser · Bose Professional · JBL Professional · Yamaha Pro Audio · Sony Professional · LG Business · Samsung Display · Barco · Epson° · WISI° |
| Network | Cisco · Juniper · Aruba · Fortinet · Ruckus · Extreme Networks · Huawei Enterprise · HPE · MikroTik · Ubiquiti · TP-Link° · Avaya° · Dell° · HP° |
| Structured Cabling & Infrastructure | CommScope · Panduit · Legrand · Belden · Corning · RDM · 3M° |
| CCTV & Video Surveillance | Hikvision · Dahua · Axis · Bosch · Hanwha Vision · Pelco |
| Access Control | HID Global · LenelS2 · Gallagher · Genetec · ZKTeco · Tesa · Salto · Tyco° · FAAC° · Yale° · Kwikset° · Safran Sagem° |
| Fire Alarm | Honeywell Notifier |
| Premium / Hospitality | Crestron Hospitality · Honeywell INNCOM (+ GRMS showcase) |

## Architecture / approach

**Data-driven, not hardcoded markup.** Refactor `partners.astro` so the page is
generated from a single `categories` config array in the frontmatter. Each entry:

```
{
  id, title, blurb,
  bg: '/images/upgrade/<themed>.jpg',   // band background
  brands: [ { name, logo: '/images/logos/<file>', featured?: bool } ]
}
```

The template loops the array to render bands; adding/removing a brand later is a one-line
data edit. This keeps the markup small and the brand list maintainable.

### Themed band component (per category)

- Full-width section, dark navy→cyan tinted overlay over a themed photo background
  (`linear-gradient(...) , url(bg)`), so all bands feel cohesive regardless of source photo.
- Category title + one-line blurb, left-aligned, white.
- Brand logos in a responsive flex/grid of **frosted-glass chips**
  (`background: rgba(255,255,255,.08)`, `backdrop-filter: blur`), logos rendered
  white/mono (`filter: brightness(0) invert(1)` or grayscale), animating to full color +
  lift on hover. Featured brands get a subtle cyan ring.
- Mobile: bands stack, chips wrap 2–3 per row, backgrounds switch to `scroll` for perf.

### Band background images

Reuse existing assets where they fit; source/generate ~3 new ones:

| Category | Background |
|---|---|
| CCTV | `service-cctv.jpg` (existing) |
| Network | `service-wireless.jpg` (existing) |
| Access Control | `service-locks.jpg` (existing) |
| Hospitality | `service-home.jpg` / `project-smarthome.jpg` (existing) |
| AV | NEW — mixing console / AV control room |
| Structured Cabling | NEW — server racks / fiber |
| Fire Alarm | NEW — detector / safety (or reuse a tinted generic) |

New backgrounds: source royalty-free darkened photography (free) and brand-tint via CSS;
generate via Higgsfield only if no good free source (keeps cost at zero by default).

### Hospitality / GRMS section

Dedicated premium band after the categories:

- Heading: "hospitality & guest room management (GRMS)".
- Two featured brand cards: **Crestron Hospitality**, **Honeywell INNCOM**.
- GRMS capability icon grid (9 items): guest room controller · lighting control ·
  HVAC control · curtain control · DND/MUR panel · occupancy sensor ·
  energy-saving key card holder · PMS integration · mobile app control.
- Short line positioning it for 5-star hotels & luxury resorts.

## Logo sourcing plan

Missing (~25): Extron, AMX/HARMAN, Q-SYS, Biamp, Sennheiser, Bose Professional, Sony
Professional, Samsung Display, Barco, Juniper, Aruba, Extreme Networks, Huawei, HPE,
MikroTik, Panduit, Legrand, Corning, RDM, Dahua, Hanwha Vision, LenelS2, Gallagher,
Genetec, Tesa, Honeywell INNCOM. (Pelco already present as `pelco-by-schneider-*`.)

Save to `public/images/logos/` as SVG where available, else PNG. Prefer transparent
backgrounds. Any logo that can't be sourced at acceptable quality is listed back to the
client to supply.

## Out of scope

- The maintenance **ticket system** (Track A) — parked pending client confirmation of
  whether one already exists.
- Changing other pages' partner references beyond what's needed for consistency.

## Verification

- `npm run build` clean (page count unchanged + no new broken-image warnings).
- Local preview: every category band renders with its background + all brand chips;
  logos mono by default, full color on hover; GRMS grid shows 9 items + 2 hospitality
  brands; mobile layout stacks correctly. Screenshot each band to confirm legibility of
  white logos on each background.
- No missing-logo 404s (broken-image auto-hide script still present as a safety net).
- Commit on `partners-redesign`; deploy only when client approves.
