import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Star, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { products, communityFits } from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";
import StyleBadge from "@/components/StyleBadge";

const doodles = ["✦", "★", "◆", "●", "▲", "♦"];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero — Desi Maximalist */}
        <section className="relative overflow-hidden texture-grain">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 text-desi-yellow text-6xl font-display opacity-20 rotate-12">★</div>
            <div className="absolute top-32 right-20 text-primary text-4xl opacity-15 rotate-[-20deg]">◆</div>
            <div className="absolute bottom-20 left-1/4 text-desi-blue text-5xl opacity-10 rotate-45">●</div>
            <div className="absolute top-1/2 right-10 w-24 h-24 border-4 border-dashed border-desi-saffron/20 rounded-full" />
            <div className="absolute bottom-10 right-1/3 w-16 h-16 border-4 border-dashed border-primary/15 rounded-lg rotate-12" />
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                {/* Handwritten accent */}
                <p className="font-handwritten text-2xl text-desi-saffron rotate-[-3deg] mb-2">
                  from kasaragod, with love 💛
                </p>

                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground">
                  DRESS
                  <br />
                  <span className="text-primary">BOLD.</span>
                  <br />
                  DRESS
                  <br />
                  <span className="text-desi-yellow bg-desi-black px-3 inline-block rotate-[-1deg]">DESI.</span>
                </h1>

                <p className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed font-sans">
                  AI-powered styling meets Kasaragod culture. Mix, match & discover
                  fashion that's unapologetically Indian. 🇮🇳
                </p>

                <div className="flex gap-3 mt-8 flex-wrap">
                  <Link
                    to="/fitlabs"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-lg desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all"
                  >
                    ENTER FITLAB <Zap className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/marketplace"
                    className="inline-flex items-center px-7 py-3.5 border-2 border-foreground text-foreground font-bold text-sm rounded-lg hover:bg-desi-yellow-light transition-colors"
                  >
                    EXPLORE FASHION
                  </Link>
                </div>

                {/* Sticker badges */}
                <div className="flex gap-3 mt-8 flex-wrap">
                  <StyleBadge label="🔥 100+ Local Sellers" variant="sticker" className="text-desi-saffron border-desi-saffron bg-desi-saffron-light" />
                  <StyleBadge label="⚡ AI Styling" variant="sticker" className="text-desi-blue border-desi-blue bg-desi-blue-light" />
                </div>
              </div>

              {/* Hero visual — collage style */}
              <div className="relative">
                {/* Main image */}
                <div className="relative bg-desi-cream rounded-xl border-2 border-foreground/10 overflow-hidden desi-shadow rotate-[2deg]">
                  <img
                    src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=700&fit=crop"
                    alt="Fashion flatlay"
                    className="w-full h-80 md:h-[28rem] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Floating sticker */}
                <div className="absolute -top-4 -right-2 bg-desi-yellow text-desi-black px-4 py-2 rounded-lg font-bold text-sm rotate-[8deg] desi-shadow-sm z-10">
                  🔥 TRENDING
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -left-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xs rotate-[-5deg] desi-shadow-sm z-10">
                  KASARAGOD STYLE ✦
                </div>

                {/* Decorative doodle circle */}
                <div className="absolute -right-8 top-1/3 w-20 h-20 rounded-full border-[3px] border-dashed border-desi-saffron/40 animate-wobble" />
              </div>
            </div>
          </div>
        </section>

        {/* Ticker strip */}
        <div className="bg-desi-black text-desi-cream py-3 overflow-hidden">
          <div className="flex gap-8 animate-[slide_20s_linear_infinite] whitespace-nowrap">
            {Array(3).fill(null).map((_, i) => (
              <div key={i} className="flex gap-8 items-center text-sm font-bold tracking-widest">
                <span>★ KASARAGOD FASHION</span>
                <span>◆ MIX & MATCH</span>
                <span>● AI STYLING</span>
                <span>▲ LOCAL CREATORS</span>
                <span>♦ DESI MAXIMALISM</span>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Collection */}
        <section className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-12">
            <p className="font-handwritten text-xl text-desi-saffron mb-2 rotate-[-2deg]">handpicked for you ✨</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
              THE COLLECTION
            </h2>
            <p className="text-muted-foreground mt-3 text-base max-w-md mx-auto">
              Bold pieces from Kasaragod creators. Every outfit tells a story. 🌿
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-foreground text-foreground font-bold text-sm rounded-lg hover:bg-desi-yellow-light transition-colors"
            >
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Community Fits */}
        <section className="bg-desi-cream texture-grain py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="font-handwritten text-xl text-primary mb-2">real people, real fits 💚</p>
              <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
                COMMUNITY FITS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityFits.map((fit, idx) => (
                <div
                  key={fit.id}
                  className={`bg-card rounded-xl border-2 border-foreground/10 p-5 desi-shadow hover:translate-y-[-4px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all ${
                    idx % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-desi-saffron-light flex items-center justify-center text-lg border-2 border-desi-saffron/30">
                        {fit.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{fit.name}</p>
                        <p className="text-xs text-muted-foreground font-medium">{fit.location}</p>
                      </div>
                    </div>
                    <button className="hover:scale-110 transition-transform">
                      <Heart className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </button>
                  </div>
                  <div className="bg-desi-yellow-light/50 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-desi-yellow/40">
                    <div className="flex flex-col items-center gap-2">
                      <span className="stamp-badge text-primary border-primary text-[10px]">✨ STYLED BY FITLABS</span>
                      <div className="flex gap-2 mt-2">
                        <div className="w-12 h-16 bg-desi-green-light rounded-lg border border-desi-green/30" />
                        <div className="w-10 h-14 bg-desi-blue-light rounded-lg border border-desi-blue/30" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-desi-black text-desi-cream py-10 mt-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center rotate-[-3deg]">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display text-2xl tracking-wider">FITLABS</span>
              </div>
              <p className="text-sm text-desi-cream/60 font-medium">
                Made with 💛 from Kasaragod, Kerala • © 2026
              </p>
              <div className="flex gap-4">
                {doodles.map((d, i) => (
                  <span key={i} className="text-desi-cream/30 text-lg">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
