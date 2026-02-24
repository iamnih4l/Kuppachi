# FitLabs — Kasaragod Fashion Marketplace

A Gen-Z focused fashion-tech marketplace that brings Kasaragod's unique fashion culture to the rest of Kerala. FitLabs blends AI-powered personalization with culture-first, desi-maximalist design.

![FitLabs](public/placeholder.svg)

---

## Product Vision

FitLabs is designed to connect Kasaragod-based local fashion sellers with buyers across Kerala. The platform features a bold **Desi Maximalism × Gen-Z** aesthetic — Indian colors, playful chaos, and typography experimentation — while maintaining usability and scalability.

---

## Target Users

| User Type | Description |
|-----------|-------------|
| **Buyers** | Gen Z and Millennials interested in casual, culture-first fashion |
| **Sellers** | Local Kasaragod fashion stores, designers, and creators |

---

## Core Problems Solved

- **For Buyers:** Kasaragod fashion styles don't reach wider markets; lack of confidence in styling and color choices
- **For Sellers:** Limited analytics, reach, and digital tools to grow their business

---

## Features

### Buyer Side
- Browse and buy fashion products from local sellers
- Add to cart and buy now
- **FitLabs Mix & Match Lab** — Drag-and-drop outfit builder with AI-style insights (color harmony, outfit suggestions, best-for occasions)
- **AI Style Lab** — Skin-tone based color recommendations (MVP)
- **AI Virtual Try-On** — Image-based outfit visualization (coming soon)
- Community fits showcase and creator discovery

### Seller Side
- Seller onboarding and role-based login
- Product uploads and management
- Analytics dashboard (Total Products, Views, Orders, Revenue)
- AI-powered style insights (roadmap)

### Unique Differentiators
- **Mix & Match Playground** — Interactive drag-and-drop fashion lab
- **Culture-first desi maximalism UI** — Bold Indian palette, handwritten accents, doodles
- **AI-first styling** — Recommendations, color analysis, try-on (MVP)
- **Local-first scaling** — Starting with Kasaragod, expanding across Kerala

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Vite, React, TypeScript |
| **UI** | Tailwind CSS, shadcn/ui (Radix primitives), Framer Motion |
| **Routing** | React Router v6 |
| **State** | Zustand (cart, auth), TanStack React Query |
| **Fonts** | Bebas Neue, Space Grotesk, Caveat (handwritten) |

### Design System
- **Colors:** Desi palette (red, saffron, yellow, blue, green, cream, black), Kasargod accents
- **Components:** `DesiDoodles`, `StyleBadge`, stamp badges, sticker-style buttons
- **Animations:** Page transitions, hover effects, `desi-shadow`, subtle rotations

---

## Project Structure

```
src/
├── components/       # UI components
│   ├── ui/           # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── SellerLayout.tsx
│   ├── DesiDoodles.tsx
│   └── StyleBadge.tsx
├── pages/
│   ├── Index.tsx         # Home / landing
│   ├── Marketplace.tsx   # Product browse (filter by shop & category)
│   ├── FitLabs.tsx       # Mix & Match outfit lab
│   ├── AiFeatures.tsx    # AI Style Lab (colors, try-on)
│   ├── Creators.tsx      # Creator discovery
│   ├── Cart.tsx          # Shopping cart
│   ├── ProductDetail.tsx # Product page
│   ├── ShopPage.tsx      # Per-shop view
│   ├── Login.tsx         # Auth (role: buyer/seller)
│   └── seller/           # Seller dashboard
│       ├── Dashboard.tsx # KPIs, charts
│       ├── Products.tsx
│       └── Upload.tsx
├── data/             # Mock data (products, sellers, creators)
├── store/            # Zustand (useStore)
├── hooks/            # useToast, useMobile
└── lib/              # utils
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd Kuppachi

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at **http://localhost:8080**.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Index | Landing, hero, collection preview |
| `/marketplace` | Marketplace | Browse products, filter by shop/category |
| `/fitlabs` | FitLabs | Mix & Match outfit builder |
| `/ai` | AI Style Lab | Color analysis, virtual try-on |
| `/creators` | Creators | Local creators discovery |
| `/cart` | Cart | Shopping cart |
| `/product/:id` | Product Detail | Single product view |
| `/shop/:shopName` | Shop Page | Seller's shop |
| `/login` | Login | Auth (buyer/seller) |
| `/seller/dashboard` | Dashboard | Seller analytics |
| `/seller/products` | Products | Manage products |
| `/seller/upload` | Upload | Add new product |

---

## Design Philosophy

**Desi Maximalism × Gen-Z aesthetics** — Bold Indian colors (saffron, red, yellow, blue), playful chaos, typography experimentation, handwritten accents, and doodles. All while maintaining usability, accessibility, and scalability.

---

## Monetization (Roadmap)

- Seller subscription plans
- Featured seller placements
- Premium AI tools (future)
- Brand collaborations

---

## Deployment

- **Frontend:** Vercel / Netlify
- **Environment:** Use `.env` for API keys and config

---

## License & Credits

Made with 💛 from Kasaragod, Kerala • © 2026 FitLabs
