import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";
import { DoodleSparkle, DoodleZigzag, FloatingDoodle } from "@/components/DesiDoodles";

const categories = ["All", "Tops", "Bottoms", "Shoes", "Accessories"] as const;

const shopMeta: Record<string, { emoji: string; color: string }> = {
  "Malabar Threads": { emoji: "🧵", color: "bg-desi-saffron-light border-desi-saffron/30" },
  "Coastal Casuals": { emoji: "🌊", color: "bg-desi-blue-light border-desi-blue/30" },
  "Step Culture": { emoji: "👟", color: "bg-desi-yellow-light border-desi-yellow/30" },
  "Artisan Collective": { emoji: "🎨", color: "bg-desi-green-light border-desi-green/30" },
};

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeShop, setActiveShop] = useState<string | null>(null);

  const uniqueShops = useMemo(() => [...new Set(products.map((p) => p.shop))], []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesShop = !activeShop || p.shop === activeShop;
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesShop && matchesCategory;
    });
  }, [activeShop, activeCategory]);

  const handleShopClick = useCallback((shop: string) => {
    setActiveShop((prev) => (prev === shop ? null : shop));
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Header banner */}
        <div className="relative bg-desi-yellow-light texture-grain border-b-2 border-foreground/10 overflow-hidden">
          <FloatingDoodle className="top-4 right-8 hidden md:block" delay={0.2}>
            <DoodleSparkle className="w-10 h-10 text-primary/20" />
          </FloatingDoodle>
          <FloatingDoodle className="bottom-2 left-12 hidden md:block" delay={0.4}>
            <DoodleZigzag className="w-20 h-6 text-desi-saffron/20" />
          </FloatingDoodle>
          <div className="container mx-auto px-4 py-10 text-center">
            <p className="font-handwritten text-xl text-desi-saffron mb-1 rotate-[-2deg]">shop the culture ✦</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
              THE MARKETPLACE
            </h1>
            <p className="text-muted-foreground mt-3 text-base max-w-md mx-auto">
              Bold, local, unapologetically Kasaragod. Every piece, every story. 🔥
            </p>
          </div>
        </div>

        {/* Shop by Seller */}
        <section className="container mx-auto px-4 pt-10">
          <div className="flex items-center gap-2 mb-4">
            <Store className="w-4 h-4 text-primary" />
            <h2 className="font-display text-2xl text-foreground tracking-wide">BROWSE BY SHOP</h2>
          </div>
          <div className="flex gap-3 flex-wrap mb-8">
            <button
              onClick={() => setActiveShop(null)}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all border-2 ${
                !activeShop
                  ? "bg-primary text-primary-foreground border-primary desi-shadow-sm"
                  : "bg-card text-muted-foreground border-foreground/10 hover:bg-muted"
              }`}
            >
              All Shops
            </button>
            {uniqueShops.map((shop) => {
              const meta = shopMeta[shop] || { emoji: "🏪", color: "bg-muted border-foreground/10" };
              return (
                <motion.button
                  key={shop}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleShopClick(shop)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all border-2 inline-flex items-center gap-2 ${
                    activeShop === shop
                      ? "bg-primary text-primary-foreground border-primary desi-shadow-sm"
                      : `${meta.color} text-foreground hover:desi-shadow-sm`
                  }`}
                >
                  <span>{meta.emoji}</span> {shop}
                </motion.button>
              );
            })}
          </div>
          {activeShop && (
            <div className="mb-6">
              <Link
                to={`/shop/${encodeURIComponent(activeShop)}`}
                className="text-sm font-bold text-primary hover:underline"
              >
                View {activeShop}'s full shop page →
              </Link>
            </div>
          )}
        </section>

        <section className="container mx-auto px-4 pb-10">
          {/* Category Filters */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {categories.map((f) => (
              <button
                key={f}
                onClick={() => setActiveCategory(f)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all border-2 ${
                  activeCategory === f
                    ? "bg-primary text-primary-foreground border-primary desi-shadow-sm"
                    : "bg-card text-muted-foreground border-foreground/10 hover:bg-muted hover:border-foreground/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-5xl mb-3">🏪</p>
              <h3 className="font-display text-2xl text-foreground">NO PRODUCTS FOUND</h3>
              <p className="text-muted-foreground mt-2 text-sm">Try a different shop or category.</p>
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default Marketplace;