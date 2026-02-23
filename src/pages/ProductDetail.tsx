import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Zap, Star, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { products } from "@/data/mockProducts";
import { useStore } from "@/store/useStore";
import StyleBadge from "@/components/StyleBadge";
import { DoodleStar, DoodleSparkle, DoodleHanger, FloatingDoodle } from "@/components/DesiDoodles";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const role = useStore((s) => s.role);
  const addToCart = useStore((s) => s.addToCart);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-display text-5xl text-foreground">PRODUCT NOT FOUND</h1>
            <Link to="/marketplace" className="mt-6 inline-flex items-center gap-2 text-primary font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Marketplace
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
  const shopProducts = products.filter((p) => p.shop === product.shop && p.id !== product.id);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/marketplace" className="hover:text-primary transition-colors font-medium">Marketplace</Link>
            <span>/</span>
            <Link to={`/shop/${encodeURIComponent(product.shop)}`} className="hover:text-primary transition-colors font-medium">{product.shop}</Link>
            <span>/</span>
            <span className="text-foreground font-bold">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 relative">
            {/* Doodles */}
            <FloatingDoodle className="top-0 -right-8 hidden lg:block" delay={0.3}>
              <DoodleStar className="w-12 h-12 text-desi-saffron/30" />
            </FloatingDoodle>
            <FloatingDoodle className="-bottom-4 -left-6 hidden lg:block" delay={0.5}>
              <DoodleHanger className="w-14 h-14 text-primary/20" />
            </FloatingDoodle>

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-xl border-2 border-foreground/10 overflow-hidden desi-shadow bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <StyleBadge label={product.tag} className={product.tagColor} />
                  </div>
                )}
                <button className="absolute top-4 right-4 w-11 h-11 rounded-lg bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-desi-red-light transition-all hover:scale-110 border border-foreground/10">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3 mt-4">
                {[product.image, product.image, product.image].map((img, i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden cursor-pointer transition-all ${
                      i === 0 ? "border-primary desi-shadow-sm" : "border-foreground/10 hover:border-foreground/30"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <Link
                to={`/shop/${encodeURIComponent(product.shop)}`}
                className="text-xs font-bold text-muted-foreground tracking-[0.15em] uppercase hover:text-primary transition-colors"
              >
                {product.shop}
              </Link>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mt-1">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mt-3 font-display tracking-wide">
                ₹{product.price.toLocaleString()}
              </p>

              {/* Rating mock */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-4 h-4 ${s <= 4 ? "text-desi-yellow fill-desi-yellow" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">(42 reviews)</span>
              </div>

              {/* Colors */}
              <div className="mt-6">
                <p className="text-sm font-bold text-foreground mb-2">COLORS</p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                        i === 0 ? "border-foreground ring-2 ring-foreground/20" : "border-foreground/20"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size mock */}
              <div className="mt-6">
                <p className="text-sm font-bold text-foreground mb-2">SIZE</p>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size, i) => (
                    <button
                      key={size}
                      className={`w-10 h-10 rounded-lg border-2 text-xs font-bold transition-all ${
                        i === 2
                          ? "bg-primary text-primary-foreground border-primary desi-shadow-sm"
                          : "border-foreground/20 text-foreground hover:border-foreground/40"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                Handcrafted with care by <span className="font-bold text-foreground">{product.shop}</span> from Kasaragod.
                Bold, comfortable, and designed for the culture-first Gen-Z wardrobe. Perfect for everyday styling or
                creating your next FitLab look. 🔥
              </p>

              {/* Actions */}
              {role !== "seller" && (
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-lg desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" /> ADD TO CART
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-desi-yellow text-desi-black font-bold text-sm rounded-lg desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all">
                    <Zap className="w-4 h-4" /> BUY NOW
                  </button>
                </div>
              )}

              {/* Trust badges */}
              <div className="flex gap-4 mt-8 flex-wrap">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="w-4 h-4 text-desi-green" />
                  <span className="font-medium">Free delivery in Kerala</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-desi-blue" />
                  <span className="font-medium">7-day easy returns</span>
                </div>
              </div>

              {/* Try on FitLab */}
              <Link
                to="/fitlabs"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 border-2 border-dashed border-desi-saffron text-desi-saffron font-bold text-sm rounded-lg hover:bg-desi-saffron-light transition-colors"
              >
                ✨ TRY THIS LOOK IN FITLAB
              </Link>
            </motion.div>
          </div>

          {/* More from this shop */}
          {shopProducts.length > 0 && (
            <section className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-3xl text-foreground">
                  MORE FROM <span className="text-primary">{product.shop.toUpperCase()}</span>
                </h2>
                <Link
                  to={`/shop/${encodeURIComponent(product.shop)}`}
                  className="text-sm font-bold text-primary hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}

          {/* Related products */}
          <section className="mt-16 mb-12">
            <h2 className="font-display text-3xl text-foreground mb-6">YOU MIGHT ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetail;
