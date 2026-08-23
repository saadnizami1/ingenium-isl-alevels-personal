# Category Study Guides (source PDFs)

Each `<slug>.pdf` here is a category's study guide. These files are:

1. **Served for download** on the category page (`/categories/<slug>` → "Download PDF").
2. **The source** the guide text is extracted from.

## Adding or updating a guide

1. Put the PDF here named after the category `slug` (see `src/data/categories.js`),
   e.g. `civil-symposium.pdf`, `sputniks-ascent.pdf`.
2. Regenerate the rendered text:

   ```
   python scripts/build_guide_content.py
   ```

   This extracts the text **verbatim** (via poppler's `pdftotext`) into
   `src/data/guideContent.json`.
3. Rebuild the site (`npm run build`). The category page flips from
   "coming soon" to the rendered guide automatically.

## Slugs

`malpighis-manifestation`, `eureka`, `axiom-of-choice`, `sputniks-ascent`,
`rodneys-rover`, `silicon-4d41`, `einstein-files`, `vigeneres-veil`,
`adlers-complex`, `pandora-papers`, `civil-symposium`, `sadequains-studio`,
`goldmanns-gambit`, `last-sin`, `quest-of-erebor`.

Currently missing (still "coming soon"): **sputniks-ascent**, **silicon-4d41**, **adlers-complex**.
