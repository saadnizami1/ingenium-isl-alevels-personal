import EssayReader from '../components/EssayReader'

const sections = [
  {
    heading: 'The Edge of Infinity',
    blocks: [
      { type: 'p', text: 'If you were to ask a room full of people to define mathematics, most would tell you it is the study of numbers, equations, and rigid rules. But to view math this way is to mistake the sheet music for the symphony. At its deepest level, mathematics is the ultimate art form of abstraction. It is the language we use to map concepts that the human brain was never biologically wired to fully comprehend.' },
      { type: 'p', text: 'Nowhere is this more apparent than in our relationship with infinity.' },
      { type: 'p', text: 'For centuries, philosophers and early mathematicians treated infinity as a monolithic, dangerous concept — a boundary line where human logic simply broke down. It was viewed as a singular, bottomless pit at the end of the number line. But in the late nineteenth century, a quiet revolution took place that shattered this view forever. Mathematics proved that infinity is not just a destination, and it is certainly not singular. There are infinities that are vastly, unthinkably larger than other infinities.' },
    ],
  },
  {
    heading: 'Georg Cantor and the Counting Game',
    blocks: [
      { type: 'p', text: 'The architect of this mind-bending reality was a German mathematician named Georg Cantor. In the 1870s, Cantor set out to do something that sounded entirely paradoxical: he wanted to measure and compare the sizes of infinite sets.' },
      { type: 'p', text: 'To do this without losing his mind to the abstract scale of the problem, Cantor went back to the absolute basics of counting. Imagine you are looking at a crowded auditorium and want to know if there are exactly as many people as there are chairs. You do not actually need to count the total number of people or chairs. You simply need to observe if every single person is sitting in a chair, with no empty seats and no one left standing.' },
      { type: 'p', text: 'In mathematics, this perfect one-to-one pairing is called a bijection. Cantor realized that if you can perfectly pair every element of one infinite set with every element of another infinite set, they must be the exact same size.' },
      { type: 'p', text: 'Using this logic, Cantor started with the natural numbers — the ordinary counting numbers we use every day. He labeled the size of this infinite set ℵ₀ (Aleph-null), the very first level of infinity. He then tested this against the set of all even numbers.' },
      { type: 'eq', formula: 'N = {1, 2, 3, 4, 5, …}', note: 'ℵ₀ — Aleph-null: the cardinality of the natural numbers, the first and smallest infinity' },
      { type: 'p', text: 'Intuition suggests that there should be exactly half as many even numbers as there are total counting numbers. But Cantor showed you can set up a flawless bijection between them:' },
      { type: 'code', lines: ['1 ↔ 2', '2 ↔ 4', '3 ↔ 6', 'n ↔ 2n'] },
      { type: 'p', text: 'Because the pattern continues forever, every single counting number gets paired with exactly one even number. No numbers are left out. Therefore, counterintuitively, the set of all even numbers is exactly the same size as the set of all counting numbers. They are both smoothly contained within the infinity of Aleph-null.' },
    ],
  },
  {
    heading: 'The Diagonal Proof: Breaking the Continuum',
    blocks: [
      { type: 'p', text: 'If all infinities could be paired up like this, infinity would remain a singular concept. But Cantor then turned his attention to a different sandbox: the real numbers. Specifically, the decimal numbers that exist in the tiny, claustrophobic space between 0 and 1.' },
      { type: 'p', text: 'This set includes fractions like 0.5, repeating decimals like 0.333…, and chaotic, non-repeating irrational numbers like 0.14159…. Cantor wondered if this infinite collection of decimals could also be lined up and paired one-to-one with our standard counting numbers.' },
      { type: 'p', text: 'To find out, he invented a beautiful, elegant thought experiment known as Cantor\'s Diagonal Argument. Imagine an adversary claims they have successfully created a complete, numbered list of every single decimal between 0 and 1:' },
      {
        type: 'table',
        headers: ['Counting Number', 'Decimal Value'],
        rows: [
          ['1', '0.314159…'],
          ['2', '0.271828…'],
          ['3', '0.500000…'],
          ['4', '0.123456…'],
        ],
      },
      { type: 'p', text: 'Cantor proved that this list is guaranteed to be incomplete. He demonstrated a foolproof method to construct a brand-new decimal that is completely missing from the adversary\'s infinite list.' },
      { type: 'p', text: 'Take the first digit of the first number (3), and change it. Then take the second digit of the second number (7), and change it. Take the third digit of the third number (0), and change it. By moving diagonally down the infinite list and changing every single overlapping digit, you build a completely new decimal:' },
      { type: 'eq', formula: 'X = 0.4815…', note: 'X differs from every entry n in the list at its n-th decimal digit — it cannot appear anywhere in the list, no matter how long it is.' },
      { type: 'p', text: 'This new number X cannot be the first number on the list, because its first digit is different. It cannot be the second number, because its second digit is different. By extension, it cannot match any number n on the list, because its n-th digit will always be different. You have created a real number that escaped the infinite net.' },
    ],
  },
  {
    heading: 'The Tower of Infinities',
    blocks: [
      { type: 'p', text: 'The mathematical fallout of this proof was cataclysmic. It proved that the infinity of decimal numbers — the continuum — is fundamentally too dense to ever be counted by the natural numbers. No matter how you try to pair them up, you will always run out of integers long before you run out of decimals.' },
      { type: 'p', text: 'This means there are at least two distinct types of infinity: countable infinity (ℵ₀), which represents the discrete steps of our counting numbers, and uncountable infinity (c), which represents the smooth, unbroken fabric of space and real numbers.' },
      {
        type: 'table',
        headers: ['Infinity Tier', 'What It Measures', 'Conceptual Nature'],
        rows: [
          ['Aleph-Null (ℵ₀)', 'Counting numbers, integers, fractions',   'Discrete, step-by-step, listable'],
          ['The Continuum (c)', 'Real numbers, points on a continuous line', 'Smooth, dense, unlistable'],
          ['Power Set of c',   'All possible geometric curves and shapes',  'Too vast for physical coordinates'],
        ],
      },
      { type: 'p', text: 'Cantor didn\'t stop there. He used a generalized version of this logic to prove that you can take the power set (the set of all subsets) of any infinity to create a brand-new, even larger tier of infinity. Mathematics pulled back the curtain on an infinite tower of infinities, each towering over the last, stretching upward forever into absolute abstraction.' },
    ],
  },
  {
    heading: 'The Human Perspective',
    blocks: [
      { type: 'p', text: 'When Cantor first published his work, the mathematical establishment reacted with open hostility. Prominent figures called him a "scientific charlatan" and a "corrupter of youth," terrified of the theological and philosophical chaos that multiple infinities implied. The strain of defending his work took a heavy toll on Cantor\'s mental health, and he spent his final years in and out of sanatoriums.' },
      { type: 'p', text: 'Yet today, Cantor\'s set theory is recognized as a monumental triumph of human thought. It serves as the bedrock foundational framework for modern mathematical analysis.' },
      { type: 'p', text: 'The true beauty of this discovery lies in its absolute independence from the physical universe. We live in a world bound by finite constraints — there are only a finite number of atoms in the observable universe, and our lives are measured in a finite number of heartbeats. Yet, using nothing more than logic, ink, and paper, a human mind was able to break through the boundaries of our physical reality and map the landscape of the endless.' },
    ],
  },
]

export default function MathematicalChronicle() {
  return (
    <EssayReader
      seriesLabel="The Mathematical Chronicle · Ingenium Newsletter"
      title="THE MATHEMATICAL CHRONICLE"
      author="Eesa Faisal"
      date="January 22, 2026"
      sections={sections}
    />
  )
}
