export interface Product {
  id: string;
  name: string;
  shop: string;
  price: number;
  image: string;
  category: "Tops" | "Bottoms" | "Shoes" | "Accessories";
  tag?: string;
  tagColor?: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kasargod Cotton Tee",
    shop: "Malabar Threads",
    category: "Tops",
    price: 899,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    tag: "Kasargod Pick",
    tagColor: "bg-desi-red-light text-primary font-bold border border-primary/30",
    colors: ["#A8D8C8", "#F5C5A3", "#F4A0B0"],
  },
  {
    id: "2",
    name: "Relaxed Fit Bottoms",
    shop: "Coastal Casuals",
    category: "Bottoms",
    price: 1299,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    tag: "Street Fit",
    tagColor: "bg-desi-yellow-light text-desi-black font-bold border border-desi-yellow/40",
    colors: ["#333333", "#1a3a5c", "#5c3a2e"],
  },
  {
    id: "3",
    name: "Classic White Sneakers",
    shop: "Step Culture",
    category: "Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    tag: "Creator Favorite",
    tagColor: "bg-desi-blue-light text-desi-blue font-bold border border-desi-blue/30",
    colors: ["#e8e8e8", "#d4e8d4", "#c8c8c8"],
  },
  {
    id: "4",
    name: "Summer Casual Top",
    shop: "Malabar Threads",
    category: "Tops",
    price: 1099,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=400&h=500&fit=crop",
    tag: "Street Fit",
    tagColor: "bg-desi-saffron-light text-desi-saffron font-bold border border-desi-saffron/30",
    colors: ["#F4A0B0", "#B8A0D8", "#D8A0F4"],
  },
  {
    id: "5",
    name: "Minimal Accessories",
    shop: "Artisan Collective",
    category: "Accessories",
    price: 699,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop",
    tag: "Kasargod Pick",
    tagColor: "bg-desi-green-light text-desi-green font-bold border border-desi-green/30",
    colors: ["#D4A800", "#888888", "#C87533"],
  },
  {
    id: "6",
    name: "Everyday Comfort Wear",
    shop: "Coastal Casuals",
    category: "Tops",
    price: 1499,
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=500&fit=crop",
    tag: "Creator Favorite",
    tagColor: "bg-desi-pink-light text-desi-pink font-bold border border-desi-pink/30",
    colors: ["#F5E680", "#A0D8E8", "#F4A0B0"],
  },
  {
    id: "7",
    name: "Desi Street Joggers",
    shop: "Coastal Casuals",
    category: "Bottoms",
    price: 1599,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
    tag: "Street Fit",
    tagColor: "bg-desi-yellow-light text-desi-black font-bold border border-desi-yellow/40",
    colors: ["#2A2A2A", "#4a4a4a", "#6a6a6a"],
  },
  {
    id: "8",
    name: "Heritage Silk Kurta",
    shop: "Malabar Threads",
    category: "Tops",
    price: 2199,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    tag: "Kasargod Pick",
    tagColor: "bg-desi-red-light text-primary font-bold border border-primary/30",
    colors: ["#C87533", "#D4A800", "#8B5E3C"],
  },
  {
    id: "9",
    name: "Canvas Tote Bag",
    shop: "Artisan Collective",
    category: "Accessories",
    price: 499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    tagColor: "bg-desi-green-light text-desi-green font-bold border border-desi-green/30",
    colors: ["#D4C8B0", "#8B7355", "#C8B090"],
  },
];

export interface FitLabItem {
  id: string;
  name: string;
  color: string;
  category: "tops" | "bottoms" | "shoes" | "accessories";
}

export const fitLabItems: FitLabItem[] = [
  { id: "t1", name: "White Cotton Tee", color: "#E8E4E0", category: "tops" },
  { id: "t2", name: "Beige Casual Shirt", color: "#E8C890", category: "tops" },
  { id: "t3", name: "Blue Denim Shirt", color: "#6888A8", category: "tops" },
  { id: "b1", name: "Black Slim Jeans", color: "#2A2A2A", category: "bottoms" },
  { id: "b2", name: "Khaki Chinos", color: "#C8B090", category: "bottoms" },
  { id: "b3", name: "White Art Pants", color: "#F0EDE8", category: "bottoms" },
  { id: "s1", name: "White Sneakers", color: "#F0F0F0", category: "shoes" },
  { id: "s2", name: "Brown Loafers", color: "#8B5E3C", category: "shoes" },
  { id: "a1", name: "Minimal Watch", color: "#333333", category: "accessories" },
  { id: "a2", name: "Canvas Tote", color: "#D4C8B0", category: "accessories" },
];

export interface CommunityFit {
  id: string;
  name: string;
  location: string;
  avatar: string;
}

export const communityFits: CommunityFit[] = [
  { id: "c1", name: "Ravi Kumar", location: "Kasargod", avatar: "🧑" },
  { id: "c2", name: "Priya Menon", location: "Kannur", avatar: "👩" },
  { id: "c3", name: "Arjun Nair", location: "Kasargod", avatar: "🧑" },
];

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  location: string;
  specialty: string;
  followers: number;
  products: number;
  verified: boolean;
}

export const creators: Creator[] = [
  { id: "cr1", name: "Ananya Krishnan", avatar: "👩‍🎨", location: "Kasaragod", specialty: "Handloom Fusion", followers: 2400, products: 18, verified: true },
  { id: "cr2", name: "Rohit Menon", avatar: "🧑‍🎤", location: "Kannur", specialty: "Streetwear", followers: 1800, products: 12, verified: true },
  { id: "cr3", name: "Divya Nair", avatar: "👩‍🎤", location: "Kochi", specialty: "Sustainable Fashion", followers: 3200, products: 24, verified: true },
  { id: "cr4", name: "Arun Das", avatar: "🧑‍🎨", location: "Kasaragod", specialty: "Accessories", followers: 950, products: 8, verified: false },
];