export type Product = {
  category: string;
  product: string;
  name: string;
  price: number;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    category: "joint-pain",
    product: "ashwagandha-capsules",
    name: "Ashwagandha Capsules",
    price: 349,
    description: "Pure Ashwagandha root capsules to relieve joint pain, reduce inflammation, and restore mobility. Traditionally prepared at Yog Maya Ashram.",
  },
  {
    category: "joint-pain",
    product: "joint-relief-oil",
    name: "Joint Relief Oil",
    price: 249,
    description: "Ayurvedic joint pain relief oil with Mahanarayan and Dhanwantharam blend. For external use, deep penetrating warmth.",
  },
  {
    category: "immunity",
    product: "chyawanprash",
    name: "Chyawanprash",
    price: 499,
    description: "Traditional Chyawanprash made with 40+ herbs, Amla, and pure cow ghee. Boosts immunity and vitality.",
  },
  {
    category: "immunity",
    product: "immunity-kadha",
    name: "Immunity Kadha Mix",
    price: 199,
    description: "Ready-to-brew Ayurvedic kadha mix with tulsi, ginger, black pepper, and cinnamon. Natural immunity booster.",
  },
  {
    category: "digestion",
    product: "triphala-powder",
    name: "Triphala Powder",
    price: 179,
    description: "Classical Triphala blend for digestion, gut health, and gentle detoxification.",
  },
];

export type Problem = { slug: string; label: string; description: string };

export const PROBLEMS: Problem[] = [
  {
    slug: "joint-pain",
    label: "Joint Pain",
    description: "Ayurveda approaches joint pain through anti-inflammatory herbs, oil therapy, and internal purification. Our curated remedies combine centuries-old wisdom with pure ingredients.",
  },
  {
    slug: "immunity",
    label: "Low Immunity",
    description: "Recurrent colds, fatigue, and slow recovery often signal weak immunity (vyadhikshamatva). Ayurvedic rasayanas rebuild your body's natural defenses.",
  },
  {
    slug: "digestion",
    label: "Digestion Issues",
    description: "Ayurveda treats the gut as the root of health. Herbs like Triphala and Trikatu restore agni (digestive fire) and eliminate ama (toxins).",
  },
];
