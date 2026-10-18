
import {
  Sun,
  CalendarDays,
  CalendarRange,
} from "lucide-react";

export const PACK_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "veg", label: "Veg" },
  { id: "non-veg", label: "Non-Veg" },
];

export const PACK_TYPES = [
  {
    id: "daily",
    title: "Daily Protein Pack",
    icon: Sun,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    badge: "",
  },
  {
    id: "weekly",
    title: "Weekly Protein Pack",
    icon: CalendarDays,
    iconColor: "text-green-700",
    iconBg: "bg-green-50",
    badge: "Most Popular",
  },
  {
    id: "monthly",
    title: "Monthly Protein Pack",
    icon: CalendarRange,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    badge: "",
  },
];

// Replace these image URLs with your own project assets whenever needed.
const FOOD_IMAGES = {
  all: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=85",
  veg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85",
  "non-veg":
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85",
};

const makePack = (
  category,
  title,
  description,
  features,
  image = FOOD_IMAGES[category],
) => ({
  category,
  title,
  description,
  features,
  image,
  buttonLabel: "View in App",
  buttonLink: "#app-promo",
});

const dailyFeatures = [
  "Balanced protein foods",
  "Fresh and nutritious",
  "Ideal for daily needs",
];

const weeklyFeatures = [
  "Variety of protein foods",
  "Better value",
  "Great for fitness & health goals",
];

const monthlyFeatures = [
  "Complete nutrition support",
  "Ideal for families",
  "Helps maintain healthy habits",
];

export const PROTEIN_PACKS = {
  all: [
    makePack(
      "all",
      "Daily Protein Pack",
      "A convenient way to start your protein journey.",
      dailyFeatures,
    ),
    makePack(
      "all",
      "Weekly Protein Pack",
      "Plan ahead with protein-rich foods for the week.",
      weeklyFeatures,
    ),
    makePack(
      "all",
      "Monthly Protein Pack",
      "Build a consistent protein-food routine.",
      monthlyFeatures,
    ),
  ],

  veg: [
    makePack(
      "veg",
      "Daily Veg Protein Pack",
      "Enjoy plant-powered protein in your everyday meals.",
      ["Fresh vegetables and legumes", "Protein-rich pulses", "Easy daily nutrition"],
    ),
    makePack(
      "veg",
      "Weekly Veg Protein Pack",
      "Plan a delicious week of vegetarian protein foods.",
      ["Beans, lentils and paneer", "Weekly food variety", "Ideal for active lifestyles"],
    ),
    makePack(
      "veg",
      "Monthly Veg Protein Pack",
      "Make vegetarian protein a regular part of your routine.",
      ["Plant-based protein options", "Family-friendly choices", "Build healthy food habits"],
    ),
  ],

  "non-veg": [
    makePack(
      "non-veg",
      "Daily Non-Veg Protein Pack",
      "Get started with protein-rich non-vegetarian foods.",
      ["Eggs and lean meat options", "Fresh food choices", "Suitable for daily meals"],
    ),
    makePack(
      "non-veg",
      "Weekly Non-Veg Protein Pack",
      "Plan your week with a variety of protein-rich foods.",
      ["Chicken, fish and eggs", "Weekly meal variety", "Fitness-friendly options"],
    ),
    makePack(
      "non-veg",
      "Monthly Non-Veg Protein Pack",
      "Build a consistent routine with non-vegetarian protein.",
      ["Variety of protein sources", "Options for families", "Convenient meal planning"],
    ),
  ],
};
