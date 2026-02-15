import { create } from "zustand";
import type { Product } from "@/data/mockProducts";

export type UserRole = "buyer" | "seller" | null;

interface CartItem {
  product: Product;
  quantity: number;
}

interface AppStore {
  // Auth / Role
  role: UserRole;
  setRole: (role: UserRole) => void;
  logout: () => void;

  // Cart (buyer)
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const useStore = create<AppStore>((set, get) => ({
  role: null,
  setRole: (role) => set({ role }),
  logout: () => set({ role: null, cart: [] }),

  cart: [],
  addToCart: (product) => {
    const existing = get().cart.find((i) => i.product.id === product.id);
    if (existing) {
      set({
        cart: get().cart.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cart: [...get().cart, { product, quantity: 1 }] });
    }
  },
  removeFromCart: (productId) =>
    set({ cart: get().cart.filter((i) => i.product.id !== productId) }),
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set({
      cart: get().cart.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      ),
    });
  },
  clearCart: () => set({ cart: [] }),
  cartTotal: () =>
    get().cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
}));
