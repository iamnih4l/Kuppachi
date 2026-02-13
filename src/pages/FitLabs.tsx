import { useState } from "react";
import Navbar from "@/components/Navbar";
import StyleBadge from "@/components/StyleBadge";
import { fitLabItems, type FitLabItem } from "@/data/mockProducts";
import { RotateCcw, Sparkles, Save, Share2 } from "lucide-react";

const categories = [
  { key: "tops" as const, label: "Tops", icon: "👕" },
  { key: "bottoms" as const, label: "Bottoms", icon: "👖" },
  { key: "shoes" as const, label: "Shoes", icon: "👟" },
  { key: "accessories" as const, label: "Accessories", icon: "⌚" },
];

const FitLabs = () => {
  const [activeCategory, setActiveCategory] = useState<FitLabItem["category"]>("tops");
  const filteredItems = fitLabItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="text-center py-8">
        <StyleBadge label="✨ FitLab Studio" className="bg-kasargod-coral text-primary-foreground mb-4 inline-block" />
        <h1 className="font-display text-4xl md:text-5xl font-black text-foreground">
          Mix & Match Your Perfect Fit
        </h1>
        <p className="text-muted-foreground mt-3">
          Drag, drop, and create your signature look. AI helps you find what works. 🎨
        </p>
      </div>

      {/* Studio Layout */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-6">
          {/* Left Sidebar — Category + Items */}
          <div className="bg-card rounded-2xl border border-border p-5">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Choose Items</h3>

            {/* Category tabs */}
            <div className="flex flex-col gap-1 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    activeCategory === cat.key
                      ? "bg-kasargod-green-light text-kasargod-green"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Items list */}
            <div className="flex flex-col gap-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-lg border border-border"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Canvas (Placeholder) */}
          <div className="bg-kasargod-mint/20 rounded-2xl border border-border min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            {/* TODO: Canvas / drag-drop area will go here */}
            <p className="text-muted-foreground text-sm">Drop items here to build your fit</p>
          </div>

          {/* Right Panel — AI Insights */}
          <div className="bg-card rounded-2xl border border-border p-5">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-kasargod-coral" /> AI Insights
            </h3>

            {/* Color Harmony */}
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">Color Harmony</span>
                <span className="text-kasargod-green font-semibold">60%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-kasargod-green rounded-full" style={{ width: "60%" }} />
              </div>
            </div>

            {/* Best For */}
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Best For:</p>
              <div className="flex gap-2 flex-wrap">
                <StyleBadge label="Casual" className="bg-kasargod-lavender text-foreground" />
                <StyleBadge label="College" className="bg-kasargod-green-light text-kasargod-green" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-kasargod-coral text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            <Sparkles className="w-4 h-4" /> AI Suggest
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Save className="w-4 h-4" /> Save Fit
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitLabs;
