import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";

const filters = ["All", "Tops", "Bottoms", "Shoes", "Accessories"];

const Marketplace = () => {
  const [active, setActive] = useState("All");

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Header banner */}
        <div className="bg-desi-yellow-light texture-grain border-b-2 border-foreground/10">
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

        <section className="container mx-auto px-4 py-10">
          {/* Filters */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all border-2 ${
                  active === f
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Marketplace;
