import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { fitLabItems, type FitLabItem } from "@/data/mockProducts";
import { RotateCcw, Sparkles, Save, Share2, Zap } from "lucide-react";

const categories = [
  { key: "tops" as const, label: "TOPS", icon: "👕" },
  { key: "bottoms" as const, label: "BOTTOMS", icon: "👖" },
  { key: "shoes" as const, label: "SHOES", icon: "👟" },
  { key: "accessories" as const, label: "ACCESSORIES", icon: "⌚" },
];

const FitLabs = () => {
  const [activeCategory, setActiveCategory] = useState<FitLabItem["category"]>("tops");
  const filteredItems = fitLabItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Header */}
        <div className="bg-desi-red-light texture-grain border-b-2 border-foreground/10">
          <div className="text-center py-8 container mx-auto px-4">
            <span className="stamp-badge text-primary border-primary mb-4 inline-block">⚡ FITLAB STUDIO</span>
            <h1 className="font-display text-5xl md:text-6xl text-foreground tracking-wide mt-4">
              MIX & MATCH
            </h1>
            <p className="font-handwritten text-xl text-desi-saffron mt-2 rotate-[-1deg]">
              drag, drop & create your signature look 🎨
            </p>
          </div>
        </div>

        {/* Studio Layout */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-6">
            {/* Left Sidebar */}
            <div className="bg-card rounded-xl border-2 border-foreground/10 p-5">
              <h3 className="font-display text-xl text-foreground mb-4 tracking-wide">CHOOSE ITEMS</h3>

              <div className="flex flex-col gap-1 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold transition-all text-left ${
                      activeCategory === cat.key
                        ? "bg-primary text-primary-foreground desi-shadow-sm"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-desi-yellow-light transition-colors cursor-pointer border border-transparent hover:border-desi-yellow/40"
                  >
                    <div
                      className="w-10 h-10 rounded-lg border-2 border-foreground/15"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Canvas */}
            <div className="bg-desi-cream rounded-xl border-2 border-dashed border-foreground/15 min-h-[400px] lg:min-h-[500px] flex items-center justify-center texture-grain">
              <div className="text-center">
                <p className="font-display text-2xl text-muted-foreground/40 tracking-wide">DROP ITEMS HERE</p>
                <p className="font-handwritten text-lg text-desi-saffron/60 mt-2">build your fit ✦</p>
              </div>
            </div>

            {/* Right Panel — AI */}
            <div className="bg-card rounded-xl border-2 border-foreground/10 p-5">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2 tracking-wide">
                <Sparkles className="w-4 h-4 text-desi-saffron" /> AI INSIGHTS
              </h3>

              {/* Color Harmony */}
              <div className="mb-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-bold text-xs tracking-wide">COLOR HARMONY</span>
                  <span className="text-desi-green font-bold">60%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden border border-foreground/10">
                  <div className="h-full bg-desi-green rounded-full" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Best For */}
              <div>
                <p className="text-xs font-bold text-foreground mb-2 tracking-wide">BEST FOR:</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="sticker-badge text-desi-blue border-desi-blue bg-desi-blue-light text-[10px]">CASUAL</span>
                  <span className="sticker-badge text-desi-green border-desi-green bg-desi-green-light text-[10px]">COLLEGE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-muted transition-colors">
              <RotateCcw className="w-4 h-4" /> RESET
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-desi-yellow text-desi-black text-sm font-bold desi-shadow-sm hover:translate-y-[-2px] transition-all">
              <Sparkles className="w-4 h-4" /> AI SUGGEST
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-muted transition-colors">
              <Save className="w-4 h-4" /> SAVE FIT
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-muted transition-colors">
              <Share2 className="w-4 h-4" /> SHARE
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FitLabs;
