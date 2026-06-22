# GOGO Electric — Design System

> Bold. Modern. Minimal. Built on two primaries and one signature device — the Bolt.

GOGO Electric is the consumer brand of **Bodawerk International** (Uganda), East Africa's leading Li-Ion battery and e-mobility company. GOGO designs and locally assembles electric vehicles — **E-Boda** (motorcycle), **E-Trak** (tractor), **E-Wheely** (wheelchair) — and operates a nationwide **battery-swap network**.

**Customers:** boda-boda riders, hardworking earners.
**Partners:** sustainability-focused investors and operators.

---

## Source materials

All originals live in `uploads/`. Treat the items below as the source of truth:

| Asset | Path |
|---|---|
| Brand guidelines (69 pp, WIP Dec 2024) | `uploads/GOGO Brand Guidelines WIP 17 Dec 2024.pdf` |
| Brand colour spec sheet | `uploads/GOGO Brand Colours.pdf` |
| ASE swatches (CMYK / Pantone) | `uploads/GOGO Brand CMYK PMS-C.ase` |
| Logo masters (RGB / CMYK / Pantone) | `uploads/GOGO Logo Masters *.ai` |
| Logomark exports (Full Colour / Inverse / Black / White, ±spacing) | `uploads/GOGO Logomark *@2x.png` |
| EV Bike brand device | `uploads/GOGO EV Bike *.png` |
| Mundial font family (preview only — licence required) | `uploads/Mundial*.otf` |
| Licence notice | `uploads/PLEASE READ.txt` |

No codebase or Figma file was attached for this build. **UI kits in this system are reconstructed from the brand guidelines + brand intent only** — when production code is available, swap each kit's components for the real ones.

---

## Index

| File / folder | What's inside |
|---|---|
| `colors_and_type.css` | All design tokens — CSS custom properties for colour, type, spacing, radii, shadow, motion. Import this first in every artifact. |
| `fonts/` | Mundial OTF files (preview only). Red Hat Display is loaded from Google Fonts as fallback. |
| `assets/` | Logos (full-colour, inverse, black, white, +spacing variants), EV Bike device, Bolt + Bolt Pin SVGs. |
| `preview/` | Design-system cards (typography, colour, spacing, components, brand) — the cards that render in the Design System tab. |
| `ui_kits/rider-app/` | Customer-facing **GOGO Rider** mobile UI kit: map, battery-swap booking, ride history, wallet, profile. |
| `ui_kits/ops-dashboard/` | Internal **GOGO Ops** dashboard: fleet, stations, swaps, riders, billing. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code. |
| `uploads/` | Original assets — source of truth. Do not edit. |

---

## CONTENT FUNDAMENTALS

**Tone:** Straightforward · Empowering · Action-oriented. Friendly but professional. "No-nonsense, rebellious spirit."

GOGO speaks to two audiences. The voice doesn't change — the register does:

- **Riders & hardworking earners** — practical, relatable, empowering. Show how GOGO reduces costs and increases earnings.
- **Investors & partners** — authoritative, visionary. Demonstrate impact and scale without buzzwords.

### Rules

1. **Plain English. No jargon.** No "innovative solutions," no "leveraging synergies." If a rider wouldn't say it, don't write it.
2. **Action verbs first.** "Swap a battery." "Find a station." "Start earning." Imperatives drive every CTA.
3. **No greenwashing.** Be specific about sustainability — name the production, reuse, or local-impact mechanism. Never "eco-friendly" without proof.
4. **Second person ("you").** Speak directly to the rider. Use "we" only when GOGO is the subject of an action.
5. **Sentence case for everything** except `ALL CAPS EYEBROWS` (12 px, 0.16 em tracking) and the wordmark.
6. **No emoji.** Brand device (Bolt) carries the energy, not Unicode.
7. **Numerals are numerals.** "1,300 active EV riders." Never "one thousand three hundred."
8. **Currency:** UGX with a thin space — `UGX 5,000`. Don't shorten to "k" in formal copy; OK on dense dashboards.
9. **Casing:** Product names retain capitals — **E-Boda**, **E-Trak**, **E-Wheely**, **Bolt**, **Swap Station**.

### Example copy (verbatim from the brand book)

> **To a rider:** "Meet the EV-150: reliable, efficient, and built for drivers who mean business. With lower running costs, quick battery swaps, and zero emissions, the EV-150 keeps you moving faster, saving money on every ride. Get ready to power your journey with GOGO."

> **To an investor:** "At GOGO, we empower our customers to earn more while spending less. By delivering affordable, reliable renewable energy solutions, we help drivers and businesses reduce costs, maximise earnings, and embrace a cleaner, greener future."

### CTA vocabulary

`Swap now` · `Find a station` · `Start earning` · `Keep moving` · `Join the charge` · `Power your journey` · `Get a quote`

---

## VISUAL FOUNDATIONS

### Colour

Two primaries do the heavy lifting:

- **Purple Eclipse** `#40103C` — foreground, large fields, brand mark.
- **Electric Rose** `#D20C7D` — action, accent, signature highlight.

Accents (**Energetic Orange** `#DE5307`, **Buzzing Yellow** `#F7B500`, **Turbo Red** `#BB1E10`) are for emphasis only — chart segments, single highlighted figures, warnings. **Never as solid backgrounds. Never combined with each other. Never used in gradients.**

Neutrals are warm-tinted (drawn from Purple Eclipse): `#15010C → #1A0618 → #664063 → #ECE7EC → #FFFFFF`. They appear as backgrounds, dividers, body and secondary text.

### Type

**Mundial** for everything. Hierarchy is mostly weight, not family:
- **Bold (700) / Black (900)** for headlines and display.
- **Regular (400) / Demibold (600)** for body and UI.
- Tight tracking on display (-1.5% to -2.5%) — the wordmark is dense, the type should follow.
- Eyebrows are ALL CAPS, +16% letterspacing, 12 px, Bold, in Electric Rose.

**Red Hat Display** (Google Fonts) is the licensed fallback — same vibe (geometric grotesk, generous counters).

### Spacing & layout

- 4-px base unit (`--s-1` = 4 px).
- Generous outer padding (`--s-8` / 32 px+) on cards and surfaces; tight inner gaps (`--s-2` / 8 px) for chip rows.
- 1200 px web container, 1440 px for dashboards.
- 8-column phone grid with 16 px gutter, 16 px margins for the rider app.

### Backgrounds

- **Default surface:** clean white, or `--gogo-mauve-100` (`#ECE7EC`) for soft alternate sections.
- **Brand surface:** flat **Purple Eclipse** — never gradient. The Bolt device or a single product photo carries energy on these surfaces.
- **No gradients anywhere** — the brand book forbids them.
- **No repeating patterns** as default — patterns exist for brand devices (location signage, vehicle wraps), not UI chrome.
- **Photography:** authentic, vibrant, warm. Boda-Boda riders in real environments. No staged shoots, no clichés, **no AI-generated imagery**.

### Motion

- Restrained and purposeful — match the action-oriented tone.
- Fades + small translates (8–16 px). Bouncy easing is reserved for the **Bolt pin** drop on the map.
- Default `--dur-base` 200 ms, `--ease-out` (`cubic-bezier(.22,1,.36,1)`).
- No parallax. No looping shimmer. No decorative motion.

### States

- **Hover:** primary CTAs darken one step (Electric Rose → `--gogo-rose-600` `#B40769`). Surfaces lift one shadow tier.
- **Press:** darken one more step (`--gogo-rose-700` `#8E0552`), shrink 1 % (`transform: scale(.99)`).
- **Focus:** 3 px halo in `rgba(210,12,125,0.35)` — never remove outlines.
- **Disabled:** 40 % opacity on text, no shadow, cursor `not-allowed`.

### Borders, corners, shadows

- **Radii:** Pills (999 px) for buttons and chips — echoes the circular `O` letterforms in the wordmark. Cards use 12 px. Inputs use 8 px. Modals 16 px.
- **Borders:** 1 px `--gogo-ink-200` for subtle divisions. 2 px `--fg` for emphasis (input on focus). Avoid coloured borders for decoration.
- **Shadows:** four-tier elevation, all tinted warm (`rgba(21,1,12,…)`). Never coloured shadows.

### Transparency & blur

- Used sparingly. Bottom-sheet handles in the rider app sit on a 96 % white surface with no blur. Modal scrims are `rgba(21,1,12,0.45)`, no blur.
- Glass-morphism is **not** part of this brand.

### Cards

- **Default card:** white surface, 12 px radius, 1 px `--border-subtle`, `--shadow-1` on rest, `--shadow-2` on hover. No coloured top borders.
- **Brand card:** Purple Eclipse fill, white type, optional Electric Rose Bolt icon top-right.

### Iconography (summary — full notes below)

Filled · Solid · Bold. The **Bolt** is the signature glyph.

---

## ICONOGRAPHY

> "Filled and Bold. Icons must be solid, bold, and easily recognisable. Avoid thin outlines or overly intricate details." — Brand book, Iconography & Graphics §31.

**Approach:**
- All UI icons are **filled, bold, single-colour**, drawn on a 24 × 24 (interface) or 32 × 32 (signage) grid with a 2 px optical stroke equivalent.
- Default colour: `--fg` (Purple Eclipse on light, White on dark). **Electric Rose** is reserved for the active or selected state.
- **No outlined icon variants.** No two-tone except the Bolt Pin Marker.

**Sources:**
- **Brand devices** (Bolt, Bolt Pin Marker, EV Bike) live in `assets/` as SVGs/PNGs. These are the only required brand-specific icons.
- **General UI icons:** we substitute **[Lucide](https://lucide.dev/)** with `stroke-width: 2.25` and `fill="currentColor"` on solid glyphs (closest filled-bold match available on CDN). **⚑ Substitution flag** — the brand book shows specific icon examples on pages 31–32 that we did not have source files for; once GOGO produces an in-house icon set, replace the Lucide references in `ui_kits/*/Icons.jsx`.
- **No emoji.** No Unicode glyphs (`★`, `▲`, etc.) used as icons.

**Brand devices on file:**
- `assets/bolt.svg` — the signature Bolt glyph.
- `assets/bolt-pin.svg` — Bolt Pin Marker, used for map pins and Swap Station signage.
- `assets/ev-bike-full-colour.png` / `assets/ev-bike-white.png` — EV Bike device, used on safety vests, promo, signage.

---

## Substitutions flagged for the user

1. **Mundial fonts** are preview-only per `uploads/PLEASE READ.txt`. **Please confirm a TipoType licence is in place before any production use.** Red Hat Display is wired up as a same-vibe Google Fonts fallback.
2. **UI icon set** is Lucide on CDN as a placeholder until GOGO's own filled-bold icon library exists.
3. **No real photography** ships in this system — the brand book is explicit that imagery must be authentic, locally-shot, non-AI. Production designs need real shots from your photo library; placeholders here are Purple Eclipse fields with the EV Bike device.
4. **Neutrals on Brand Colours sheet** were marked `TBC` for Pantone/CMYK. Hex values are honoured; print specs need finalising by the brand team.

---

## How to use this system

1. In any new HTML artifact, `<link rel="stylesheet" href="/colors_and_type.css">` (path may vary).
2. Compose with the tokens — never hardcode hex or pixel values that have a token.
3. Reach for `assets/logo-full-colour.png` on light surfaces, `assets/logo-inverse.png` on Purple Eclipse, `assets/logo-white.png` on photography or any saturated colour.
4. The UI kits (`ui_kits/*/index.html`) demonstrate complete screens; lift components from their JSX files for new mocks.
