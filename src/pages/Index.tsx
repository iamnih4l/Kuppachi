import { Link } from "react-router-dom";
import { ArrowRight, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { products, communityFits } from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";
import StyleBadge from "@/components/StyleBadge";
import { DoodleStar, DoodleCircle, DoodleZigzag, DoodleSparkle, DoodleHanger, DoodleScissors, FloatingDoodle } from "@/components/DesiDoodles";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Accordion05 } from "@/components/ui/accordion-05";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { fitLabsLogos } from "@/data/fitLabsLogos";

const fitLabsTestimonials = [
  { text: "FitLabs changed how I shop. The Mix & Match lab is so fun — I found my perfect casual look in minutes!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", name: "Priya M.", role: "Kochi" },
  { text: "Finally a platform that gets Kasaragod fashion. Our shop's reach has doubled since joining.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", name: "Rahul K.", role: "Seller, Malabar Threads" },
  { text: "AI color recommendations are spot on. Bought a saffron kurta and it looks perfect on me!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", name: "Anitha S.", role: "Kannur" },
  { text: "The desi maximalist vibe is everything. Shopping feels like browsing a local bazaar.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", name: "Vikram N.", role: "Thiruvananthapuram" },
  { text: "Best decision for our brand. Analytics and product management are so easy.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", name: "Divya R.", role: "Seller, Artisan Collective" },
  { text: "Culture-first fashion done right. Every piece feels authentic.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", name: "Arjun P.", role: "Kozhikode" },
];

const faqItems = [
  { id: "1", title: "What is FitLabs?", content: "FitLabs is a Gen-Z focused fashion-tech marketplace that brings Kasaragod's unique fashion culture to the rest of Kerala. We blend AI-powered personalization with culture-first, desi-maximalist design." },
  { id: "2", title: "How does Mix & Match work?", content: "Our Mix & Match Lab lets you drag-and-drop tops, bottoms, shoes, and accessories onto a canvas. AI gives you color harmony scores, style suggestions, and best-for occasions." },
  { id: "3", title: "Can I sell on FitLabs?", content: "Yes! Local Kasaragod fashion stores, designers, and creators can onboard as sellers. You get product management, analytics, and access to buyers across Kerala." },
  { id: "4", title: "Where do you deliver?", content: "We currently serve Kerala, with Kasaragod as our home base. Expansion across India is on our roadmap." },
];

const firstCol = fitLabsTestimonials.slice(0, 3);
const secondCol = fitLabsTestimonials.slice(3, 6);

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Announcement */}
        <div className="py-6 flex justify-center">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
            ✨ Introducing FitLabs
          </AnimatedShinyText>
        </div>

        {/* Hero — Desi Maximalist */}
        <section className="relative overflow-hidden texture-grain">
          {/* SVG Doodle decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingDoodle className="top-8 left-8" delay={0.2}>
              <DoodleStar className="w-14 h-14 text-desi-yellow/30" />
            </FloatingDoodle>
            <FloatingDoodle className="top-28 right-16" delay={0.4}>
              <DoodleCircle className="w-16 h-16 text-primary/20" />
            </FloatingDoodle>
            <FloatingDoodle className="bottom-16 left-1/4" delay={0.6}>
              <DoodleSparkle className="w-10 h-10 text-desi-blue/25" />
            </FloatingDoodle>
            <FloatingDoodle className="top-1/2 right-8" delay={0.3}>
              <DoodleHanger className="w-16 h-16 text-desi-saffron/20" />
            </FloatingDoodle>
            <FloatingDoodle className="bottom-8 right-1/4" delay={0.7}>
              <DoodleScissors className="w-12 h-12 text-primary/15" />
            </FloatingDoodle>
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

                {/* Decorative doodle */}
                <FloatingDoodle className="-right-8 top-1/3" delay={0.5}>
                  <DoodleCircle className="w-20 h-20 text-desi-saffron/30" />
                </FloatingDoodle>
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
          {/* Section doodle */}
          <FloatingDoodle className="top-4 -right-2 hidden lg:block" delay={0.3}>
            <DoodleZigzag className="w-24 h-8 text-desi-saffron/25" />
          </FloatingDoodle>
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
            {products.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
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

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-10"
            >
              <div className="border-2 border-foreground/20 py-1 px-4 rounded-lg font-bold text-sm">Testimonials</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mt-5 text-foreground">
                What our community says
              </h2>
              <p className="text-muted-foreground mt-3">
                Real buyers and sellers from across Kerala.
              </p>
            </motion.div>
            <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[540px] overflow-hidden">
              <TestimonialsColumn testimonials={firstCol} duration={18} />
              <TestimonialsColumn testimonials={secondCol} className="hidden md:block" duration={22} />
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="bg-desi-cream texture-grain py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="font-handwritten text-xl text-desi-saffron mb-2">got questions? ✦</p>
              <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
                FAQ
              </h2>
            </div>
            <Accordion05 items={faqItems} defaultValue="1" />
          </div>
        </section>

        {/* Logo Carousel - Featured Shops */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <GradientHeading variant="secondary" size="lg" className="mb-2">
              Featured on FitLabs
            </GradientHeading>
            <p className="text-muted-foreground text-sm mb-8">Local shops you can trust</p>
            <div className="flex justify-center">
              <LogoCarousel columnCount={3} logos={fitLabsLogos} />
            </div>
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

        <MinimalFooter />
      </div>
    </PageTransition>
  );
};

export default Index;
