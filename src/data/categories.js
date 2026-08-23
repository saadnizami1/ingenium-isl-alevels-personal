// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the Ingenium competition categories.
// Used by both the Categories grid and the per-category Study Guide pages.
//
// TO ADD A STUDY GUIDE:
//   1. Drop the PDF in  public/study-guides/<slug>.pdf  (slug = the category's
//      `slug` below, e.g. `civil-symposium.pdf`).
//   2. Run  `python scripts/build_guide_content.py`  to regenerate
//      src/data/guideContent.json (extracts the text verbatim).
//   3. Rebuild. The category page flips from "coming soon" to the rendered
//      guide, with a "Download PDF" button pointing at the file in step 1.
// ─────────────────────────────────────────────────────────────────────────────

import guideContent from './guideContent.json'

// Auto-load emblems.
const emblemModules = import.meta.glob('../assets/categories/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { eager: true })

// Normalise a file path to a bare slug: strip folder, extension, and any
// leading `NN-` / `NN_` numeric prefix, then lowercase.
function baseSlug(path) {
  const file = path.split('/').pop().replace(/\.[^.]+$/, '')
  return file.replace(/^\d+[-_]/, '').toLowerCase()
}

const emblemBySlug = {}
for (const [path, mod] of Object.entries(emblemModules)) {
  emblemBySlug[baseSlug(path)] = mod.default ?? mod
}

const raw = [
  {
    name: "Malpighi's Manifestation",
    slug: 'malpighis-manifestation',
    field: 'Pure Sciences',
    compulsory: true,
    desc: 'Named after Marcello Malpighi, the 17th century pioneer of microscopy whose curiosity transformed our understanding of the living world, this category challenges participants across the full breadth of pure sciences. Teams navigate a multi-round gauntlet spanning Biology, Chemistry, and Physics combining a rigorous knowledge quiz with a hands-on experimental challenge and a high-pressure problem solving tournament.',
  },
  {
    name: 'Eureka',
    slug: 'eureka',
    field: 'Research',
    compulsory: true,
    desc: "Ingenium's second compulsory category, Eureka draws its name from the oldest expression of scientific discovery in human history. Delegates will be challenged to demonstrate something far harder than knowledge: the ability to communicate it. Tasked with guiding a non-specialist from a common misconception to a foundational scientific truth, teams must combine conceptual clarity, persuasive reasoning, and genuine pedagogical skill.",
  },
  {
    name: 'Axiom of Choice',
    slug: 'axiom-of-choice',
    field: 'Mathematics',
    desc: 'Mathematics is not a subject you can bluff your way through, and Axiom of Choice is designed with exactly that in mind. This category tests mathematical prowess across multiple rounds of escalating intensity. Teams must be able to think critically, and perform under the kind of time pressure that separates those who know mathematics from those who truly understand it.',
  },
  {
    name: "Sputnik's Ascent",
    slug: 'sputniks-ascent',
    field: 'Astronomy & Astrophysics',
    desc: "Humanity needs a new home, and Sputnik's Ascent tasks delegates with finding one. Working through fragmented data, the laws of relativity, and the full breadth of real astrophysics, teams must construct a coherent picture of the cosmos under sustained pressure. Three rounds spanning analytical, verbal, and practical challenges build toward a grand finale that demands ingenuity, adaptability and scientific conviction in equal measure.",
  },
  {
    name: "Rodney's Rover",
    slug: 'rodneys-rover',
    field: 'Robotics',
    desc: "A category forged in legacy. Rodney's Rover takes its inspiration from Burr, the figure who defined what ISL Robotics could be, and carries with it the standard he set. What begins on the workbench ends in the arena, where robots built by hand go head to head in a contest that rewards precision, creativity, and the ability to think on your feet when your machine is on the line.",
  },
  {
    name: 'Silicon 4D41',
    slug: 'silicon-4d41',
    field: 'Computer Science',
    desc: 'Every system has a foundation. Silicon 4D41 starts at the bottom of it. From the binary logic that underpins all computation to the high-level architecture of C++ programs, this category spans the full vertical of Computer Science, ICT, and digital design. Delegates will be tested across hardware, software, graphics, networking, and everything in between, navigating a discipline that has quietly become the language of the modern world.',
  },
  {
    name: 'Einstein Files',
    slug: 'einstein-files',
    field: 'Physics Debates',
    desc: 'Science advances through disagreement, and Einstein Files places delegates at the heart of that tradition. Built around open-ended phenomena at the frontiers of physical understanding, this category demands more than recall. Delegates must take a position, construct arguments that hold under scrutiny, and engage with competing perspectives without losing the thread of their own. For those who find physics most alive when the answer is not yet settled, this is the category built for them.',
  },
  {
    name: "Vigenère's Veil",
    slug: 'vigeneres-veil',
    field: 'Cryptography',
    desc: "Named after 16th century cryptographer, de Vigenère, Vigenère's Veil plunges participants into the shadowy world of codebreaking and encryption. Teams race through cipher challenges, logic puzzles, and cryptographic decoding rounds. Observation, deduction, and pattern recognition are your only weapons. Can you lift the veil?",
  },
  {
    name: "Adler's Complex",
    slug: 'adlers-complex',
    field: 'Psychology',
    desc: 'Drawing its name from Alfred Adler, father of individual psychology, this category navigates human behaviour, cognitive theory, and psychological phenomena through analytical case study evaluations, and live behavioural challenges. It rewards those who understand what drives people, and what breaks them.',
  },
  {
    name: 'The Pandora Papers',
    slug: 'pandora-papers',
    field: 'Environmental Science',
    desc: "A confidential leak has exposed a major corporation's environmental violations. The case is now before the court. The Pandora Papers challenges delegates to step into the roles of prosecutor and defence, building arguments grounded in environmental science, real-world policy, and the weight of documented evidence. This category rewards those who understand not just what happened to the environment, but why it matters and who is responsible. Making the case requires both.",
  },
  {
    name: 'Civil Symposium',
    slug: 'civil-symposium',
    field: 'Engineering',
    desc: 'Engineering is problem solving under constraint, and Civil Symposium is built on that premise. Delegates will design, build, and adapt across a layered series of challenges that test structural ingenuity, precision, and sound engineering judgment. Conditions will be unpredictable. Resources will be limited. The teams that succeed will be those who find elegant solutions where others find dead ends.',
  },
  {
    name: "Sadequain's Studio",
    slug: 'sadequains-studio',
    field: 'Arts & Media',
    desc: 'In tribute to Sadequain, the self-taught painter and muralist who redrew what Pakistani art could look like, this category navigates visual composition, design, and narrative craft through timed studio briefs, photography, and film. It rewards those who see what everyone else overlooks, and can make everyone else see it too.',
  },
  {
    name: "Goldmann's Gambit",
    slug: 'goldmanns-gambit',
    field: 'Entrepreneurship & Finance',
    desc: "The market does not reward good intentions. Goldmann's Gambit places delegates within the demanding world of tech entrepreneurship, spanning startup ideation, stock markets, investment strategy, and live negotiation. Teams are expected to think commercially, act decisively, and present their vision with clarity and conviction. In this category, a strong idea is only the starting point. Execution is what determines the outcome.",
  },
  {
    name: 'The Last Sin',
    slug: 'last-sin',
    field: 'Forensics',
    desc: 'A crime has been committed. The Last Sin tasks delegates with solving it. Working through a simulated criminal investigation, teams must examine evidence, apply forensic methodology, and build a case that holds up to scrutiny. This category rewards scientific reasoning, attention to detail, and the ability to construct a clear, logical conclusion from incomplete information.',
  },
  {
    name: 'The Quest of Erebor',
    slug: 'quest-of-erebor',
    field: 'Pop Culture & Fandom',
    desc: "Not every battle is fought in a laboratory. The Quest of Erebor is Ingenium's celebration of the stories, worlds, and characters that have defined a generation of young minds. Delegates will spin the wheel, recreate iconic movie moments on stage, and go head to head in a winner takes all game show finale that rewards pop culture knowledge, performance, and the willingness to commit fully to the moment. This category is unashamedly fun, and it takes that seriously.",
  },
]

// Attach emblem, rendered study-guide content, and the downloadable PDF URL.
export const categories = raw.map((c) => {
  const content = guideContent[c.slug]?.blocks || null
  return {
    ...c,
    emblem: emblemBySlug[c.slug] || null,
    content,                                        // structured blocks, or null
    pdf: content ? `/study-guides/${c.slug}.pdf` : null,
    hasGuide: !!content,
  }
})

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug) || null
}

// Wrapping prev / next for the guide-page footer navigation.
export function getNeighbors(slug) {
  const i = categories.findIndex((c) => c.slug === slug)
  if (i === -1) return { prev: null, next: null }
  const prev = categories[(i - 1 + categories.length) % categories.length]
  const next = categories[(i + 1) % categories.length]
  return { prev, next }
}
