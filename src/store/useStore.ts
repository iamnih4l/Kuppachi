import { create } from "zustand";
import { products as initialProducts, type Product } from "@/data/mockProducts";

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

  // Products
  products: Product[];
  addProduct: (product: Product) => void;

  // FitLab Saved Fits
  savedFits: SavedFit[];
  saveFit: (fit: SavedFit) => void;

  // Forum Posts
  forumPosts: ForumPost[];
  addForumPost: (post: ForumPost) => void;
}

export interface SavedFit {
  id: string;
  name: string;
  items: {
    top: Product | null;
    bottom: Product | null;
    shoes: Product | null;
    accessory: Product | null;
  };
  creatorId?: string; // Links this fit to a CreatorProfile
  createdAt: string;
}

export interface ForumPost {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  attachedFit?: SavedFit | null;
  likes: number;
  comments: number;
  createdAt: string;
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

  products: initialProducts,
  addProduct: (product) =>
    set({ products: [product, ...get().products] }),

  savedFits: [
    {
      id: "f1",
      name: "Kasargod Summer",
      items: {
        top: initialProducts[0],
        bottom: initialProducts[1],
        shoes: initialProducts[2],
        accessory: initialProducts[4],
      },
      creatorId: "cr1",
      createdAt: new Date().toISOString(),
    },
    {
      id: "f2",
      name: "Street Basics",
      items: {
        top: initialProducts[3],
        bottom: initialProducts[6],
        shoes: initialProducts[2],
        accessory: null,
      },
      creatorId: "cr2",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    }
  ],
  saveFit: (fit) =>
    set({ savedFits: [fit, ...get().savedFits] }),

  forumPosts: [
    {
      id: "p1",
      authorName: "Ananya Krishnan",
      authorAvatar: "👩‍🎨",
      content: "Just dropped a new summer look using our latest Kasargod Cotton collection. What do you guys think? 🔥",
      attachedFit: {
        id: "f1",
        name: "Kasargod Summer",
        items: {
          top: initialProducts[0],
          bottom: initialProducts[1],
          shoes: initialProducts[2],
          accessory: initialProducts[4],
        },
        creatorId: "cr1",
        createdAt: new Date().toISOString(),
      },
      likes: 124,
      comments: 18,
      createdAt: new Date().toISOString(),
    },
    {
      id: "p2",
      authorName: "Rahul",
      authorAvatar: "🧑",
      content: "Anyone know when the new Coastal Casuals drop is happening? Need those relaxed fit bottoms! 😫",
      likes: 45,
      comments: 12,
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    }
  ],
  addForumPost: (post) =>
    set({ forumPosts: [post, ...get().forumPosts] }),
}));
