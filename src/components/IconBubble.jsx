import {
  BarChart3, ChartNoAxesColumnIncreasing, Heart, Leaf, MapPin,
  ScanLine, ShieldCheck, ShoppingBag, Store, Utensils, UserRound,
  WalletCards, Headphones, Apple
} from "lucide-react";

const ICONS = {
  leaf: Leaf,
  shield: ShieldCheck,
  store: Store,
  heart: Heart,
  scan: ScanLine,
  nutrition: ChartNoAxesColumnIncreasing,
  recipe: Utensils,
  map: MapPin,
  support: Headphones,
  chart: BarChart3,
  income: WalletCards,
  user: UserRound,
  apple: Apple,
  shop: ShoppingBag
};

export default function IconBubble({ name, className = "" }) {
  const Icon = ICONS[name] || Leaf;
  return (
    <span className={`grid h-10 w-10 place-items-center rounded-full bg-white text-protein-green shadow-sm ${className}`}>
      <Icon size={20} strokeWidth={1.9} />
    </span>
  );
}