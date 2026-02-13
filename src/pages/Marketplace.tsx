import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";

const filters = ["All", "Tops", "Bottoms", "Shoes", "Accessories"];

const Marketplace = () => {
  // TODO: Add filter state and logic when backend is connected
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Explore the Collection
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Handpicked casual wear from Kasargod creators. Every piece tells a story. 🌿
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                f === "All"
                  ? "bg-kasargod-green text-primary-foreground border-kasargod-green"
                  : "bg-card text-muted-foreground border-border hover:bg-muted"
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
