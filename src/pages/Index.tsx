import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { products, communityFits } from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";
import StyleBadge from "@/components/StyleBadge";

const Index = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <StyleBadge
              label="✨ Kasargod's Fashion Playground"
              className="bg-kasargod-coral text-primary-foreground mb-6 inline-block"
            />
            <div className="text-kasargod-green text-4xl mb-4 opacity-60">✦</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
              Create Your Fit.
              <br />
              <span className="text-kasargod-green">Kasargod</span> Style.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed">
              Mix, match, and discover your perfect look with AI-powered styling.
              From local creators to your wardrobe. 🎨
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                to="/fitlabs"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-kasargod-coral text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Enter FitLab <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center px-8 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-muted transition-colors text-sm"
              >
                Explore Fashion
              </Link>
            </div>
          </div>

          <div className="relative">
            <StyleBadge
              label="🔥 Trending"
              className="bg-kasargod-green-light text-kasargod-green absolute -top-2 right-4 z-10"
            />
            <div className="absolute -right-6 top-1/2 w-20 h-20 rounded-full border-2 border-dashed border-kasargod-peach opacity-60" />
            <div className="relative bg-kasargod-sky/40 rounded-2xl p-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=700&fit=crop"
                alt="Fashion flatlay"
                className="w-full h-80 md:h-[28rem] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Collection */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Explore the Collection
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Handpicked casual wear from Kasargod creators. Every piece tells a story. 🌿
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Community Fits */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Community Fits
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Real people, real style. Get inspired by creators from Kasargod. 💚
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityFits.map((fit) => (
            <div key={fit.id} className="bg-card rounded-2xl border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-kasargod-peach flex items-center justify-center text-lg">
                    {fit.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{fit.name}</p>
                    <p className="text-xs text-muted-foreground">{fit.location}</p>
                  </div>
                </div>
                <button>
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="bg-kasargod-mint/30 rounded-xl h-48 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <StyleBadge label="✨ Styled by Kasargod" className="bg-kasargod-coral/20 text-kasargod-coral text-[10px]" />
                  <div className="w-12 h-16 bg-kasargod-green-light rounded-lg" />
                  <div className="w-10 h-14 bg-kasargod-sky rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © 2026 Kasargod Fashion. Made with 💚 from Kasargod.
        </div>
      </footer>
    </div>
    </PageTransition>
  );
};

export default Index;
