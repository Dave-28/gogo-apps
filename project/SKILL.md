---
name: gogo-electric-design
description: Use this skill to generate well-branded interfaces and assets for GOGO Electric (consumer brand of Bodawerk International, Uganda), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping rider apps, ops dashboards, marketing, and station signage.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `fonts/`, `assets/`, `preview/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. Always:

- Import `colors_and_type.css` first.
- Use **Purple Eclipse** (`#40103C`) and **Electric Rose** (`#D20C7D`) as the two primaries. Accents (orange / yellow / red) for emphasis only — never as solid backgrounds, never combined, never as gradients.
- Use **Mundial** type with Red Hat Display fallback. Bold for headlines, Medium/Regular for body.
- Icons are filled, solid, and bold — never thin outlines.
- The **Bolt** is the signature glyph (`assets/bolt.svg`).
- Logo on light: `assets/logo-full-colour.png`. On Purple Eclipse: `assets/logo-inverse.png`. On photography or saturated colour: `assets/logo-white.png`.

If working on production code, copy the assets in and treat `colors_and_type.css` as the design-token source.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, copy register), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
