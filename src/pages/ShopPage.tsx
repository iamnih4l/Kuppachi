import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Store, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockProducts";
import { DoodleCircle, DoodleSparkle, FloatingDoodle } from "@/components/DesiDoodles";

// Derive unique shops from products
const shopMeta: Record<string, { tagline: string; avatar: string; location: string }> = {
  "Malabar Threads": { tagline: "Handwoven heritage meets streetwear", avatar: "🧵", location: "Kasaragod, Kerala" },
  "Coastal Casuals": { tagline: "Everyday coastal comfort", avatar: "🌊", location: "Kannur, Kerala" },
  "Step Culture": { tagline: "Walk the culture. Own the street.", avatar: "👟", location: "Kasaragod, Kerala" },
  "Artisan Collective": { tagline: "Handmade with heart", avatar: "🎨", location: "Kochi, Kerala" },
};

const ShopPage = () => {
  const { shopName } = useParams();
  const decodedName = decodeURIComponent(shopName || "");
  const shopProducts = products.filter((p) => p.shop === decodedName);
  const meta = shopMeta[decodedName] || { tagline: "Local fashion from Kerala", avatar: "🏪", location: "Kerala" };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Shop header banner */}
        <div className="relative bg-desi-cream texture-grain border-b-2 border-foreground/10 overflow-hidden">
          <FloatingDoodle className="top-4 right-10 hidden md:block" delay={0.2}>
            <DoodleCircle className="w-16 h-16 text-desi-saffron/25" />
          </FloatingDoodle>
          <FloatingDoodle className="bottom-2 left-8 hidden md:block" delay={0.4}>
            <DoodleSparkle className="w-10 h-10 text-primary/20" />
          </FloatingDoodle>

          <div className="container mx-auto px-4 py-12">
            <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-bold mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Marketplace
            </Link>

            <div className="flex items-center gap-5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-20 h-20 rounded-xl bg-desi-yellow-light border-2 border-desi-yellow/40 flex items-center justify-center text-4xl desi-shadow"
              >
                {meta.avatar}
              </motion.div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl text-foreground">{decodedName.toUpperCase()}</h1>
                <p className="font-handwritten text-lg text-desi-saffron mt-1">{meta.tagline} ✦</p>
                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="font-medium">{meta.location}</span>
                  <span className="mx-2 text-foreground/20">•</span>
                  <Store className="w-3 h-3" />
                  <span className="font-medium">{shopProducts.length} products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <section className="container mx-auto px-4 py-10">
          {shopProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🏪</p>
              <h2 className="font-display text-3xl text-foreground">NO PRODUCTS YET</h2>
              <p className="text-muted-foreground mt-2">This shop hasn't listed any products.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default ShopPage;
