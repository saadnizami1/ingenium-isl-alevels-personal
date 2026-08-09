# Category Study Guides

Drop a category's study-guide **PDF** in this folder to make it appear on that
category's page automatically — no code changes required.

## Naming

Name the file after the category's `slug` (see `src/data/categories.js`):

| Category                  | File name                          |
| ------------------------- | ---------------------------------- |
| Malpighi's Manifestation  | `malpighis-manifestation.pdf`      |
| Eureka                    | `eureka.pdf`                       |
| Axiom of Choice           | `axiom-of-choice.pdf`              |
| Sputnik's Ascent          | `sputniks-ascent.pdf`              |
| Rodney's Rover            | `rodneys-rover.pdf`                |
| Silicon 4D41              | `silicon-4d41.pdf`                 |
| Einstein Files            | `einstein-files.pdf`               |
| Vigenère's Veil           | `vigeneres-veil.pdf`               |
| Adler's Complex           | `adlers-complex.pdf`               |
| The Pandora Papers        | `pandora-papers.pdf`               |
| Civil Symposium           | `civil-symposium.pdf`              |
| Sadequain's Studio        | `sadequains-studio.pdf`            |
| Goldmann's Gambit         | `goldmanns-gambit.pdf`             |
| The Last Sin              | `last-sin.pdf`                     |
| The Quest of Erebor       | `quest-of-erebor.pdf`              |

A leading number is fine too (e.g. `01-malpighis-manifestation.pdf`).

After adding a file, rebuild (`npm run build`) or the dev server will pick it up
on save. Until a PDF is present, the page shows an elegant "coming soon" state.
