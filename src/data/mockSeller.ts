export interface SellerProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  status: "Active" | "In Review";
  views: number;
  category: string;
}

export const sellerProducts: SellerProduct[] = [
  {
    id: "sp1",
    name: "Kasargod Cotton Tee",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
    price: 899,
    status: "Active",
    views: 1240,
    category: "Tops",
  },
  {
    id: "sp2",
    name: "Relaxed Fit Bottoms",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop",
    price: 1299,
    status: "Active",
    views: 890,
    category: "Bottoms",
  },
  {
    id: "sp3",
    name: "Summer Casual Top",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=200&h=200&fit=crop",
    price: 1099,
    status: "In Review",
    views: 320,
    category: "Tops",
  },
  {
    id: "sp4",
    name: "Classic White Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop",
    price: 2499,
    status: "Active",
    views: 2100,
    category: "Shoes",
  },
];

export interface KPI {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export const sellerKPIs: KPI[] = [
  { label: "Total Products", value: "12", change: "+2 this week", positive: true },
  { label: "Total Views", value: "4,550", change: "+18%", positive: true },
  { label: "Total Orders", value: "64", change: "+5 today", positive: true },
  { label: "Revenue", value: "₹82,400", change: "+12%", positive: true },
];
