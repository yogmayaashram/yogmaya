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
    description: "Ashwagandha root capsule product listing. Confirm ingredients, approved label, directions, safety information and applicable licensing before publication.",
  },
  {
    category: "joint-pain",
    product: "joint-relief-oil",
    name: "Joint Relief Oil",
    price: 249,
    description: "Traditional-use oil product listing. Confirm the actual ingredients, intended use, cautions and approved label before publication.",
  },
  {
    category: "immunity",
    product: "chyawanprash",
    name: "Chyawanprash",
    price: 499,
    description: "Chyawanprash product listing. Confirm the actual ingredient list, allergens, label claims and storage instructions before publication.",
  },
  {
    category: "immunity",
    product: "immunity-kadha",
    name: "Immunity Kadha Mix",
    price: 199,
    description: "Kadha mix product listing. Confirm the actual ingredients, preparation instructions and permitted label claims before publication.",
  },
  {
    category: "digestion",
    product: "triphala-powder",
    name: "Triphala Powder",
    price: 179,
    description: "Triphala powder product listing. Confirm the actual ingredients, usage directions, cautions and permitted label claims before publication.",
  },
];

export type Problem = { slug: string; label: string; description: string };

export const PROBLEMS: Problem[] = [
  {
    slug: "joint-pain",
    label: "Joint Pain",
    description: "This educational category is not medical advice. Product details and any health-related claims must be checked against approved product labels and applicable rules before publication.",
  },
  {
    slug: "immunity",
    label: "Low Immunity",
    description: "This educational category is not medical advice. Persistent symptoms should be discussed with a qualified healthcare professional; product claims must be verified before publication.",
  },
  {
    slug: "digestion",
    label: "Digestion Issues",
    description: "This educational category is not medical advice. Product claims about digestion or detoxification must be substantiated and approved before publication.",
  },
];
