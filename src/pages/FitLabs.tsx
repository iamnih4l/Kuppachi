import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { fitLabItems, type FitLabItem } from "@/data/mockProducts";
import { RotateCcw, Sparkles, Save, Share2, X, GripVertical, CheckCircle } from "lucide-react";
import { DoodleStar, DoodleSparkle, FloatingDoodle } from "@/components/DesiDoodles";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { key: "tops" as const, label: "TOPS", icon: "👕", slot: "top" },
  { key: "bottoms" as const, label: "BOTTOMS", icon: "👖", slot: "bottom" },
  { key: "shoes" as const, label: "SHOES", icon: "👟", slot: "shoes" },
  { key: "accessories" as const, label: "ACCESSORIES", icon: "⌚", slot: "accessory" },
];

type OutfitSlots = {
  top: FitLabItem | null;
  bottom: FitLabItem | null;
  shoes: FitLabItem | null;
  accessory: FitLabItem | null;
};

const slotLabels: Record<keyof OutfitSlots, { label: string; icon: string }> = {
  top: { label: "TOP", icon: "👕" },
  bottom: { label: "BOTTOM", icon: "👖" },
  shoes: { label: "SHOES", icon: "👟" },
  accessory: { label: "ACCESSORY", icon: "⌚" },
};

// Simple color harmony calculation
const getColorHarmony = (slots: OutfitSlots): number => {
  const filled = Object.values(slots).filter(Boolean) as FitLabItem[];
  if (filled.length < 2) return 0;
  // Mock scoring based on number of items
  return Math.min(100, filled.length * 25 + Math.floor(Math.random() * 10) + 15);
};

const getStyleSuggestions = (slots: OutfitSlots): string[] => {
  const filled = Object.values(slots).filter(Boolean) as FitLabItem[];
  if (filled.length === 0) return ["Add items to get AI suggestions"];
  
  const suggestions: string[] = [];
  if (!slots.top) suggestions.push("🔥 Add a top to complete the look");
  if (!slots.bottom) suggestions.push("👖 Try pairing with bottoms");
  if (!slots.shoes) suggestions.push("👟 Shoes would complete this fit");
  if (filled.length >= 2) suggestions.push("✨ Great color balance!");
  if (filled.length >= 3) suggestions.push("🎯 This look is fire — very Kasaragod vibes");
  if (filled.length === 4) suggestions.push("💯 Full outfit! Ready to share");
  return suggestions;
};

const getBestFor = (slots: OutfitSlots): string[] => {
  const count = Object.values(slots).filter(Boolean).length;
  if (count === 0) return [];
  if (count <= 2) return ["CASUAL", "COLLEGE"];
  if (count === 3) return ["DATE NIGHT", "OUTING", "CASUAL"];
  return ["STREET STYLE", "FESTIVAL", "PHOTOSHOOT", "EVERYDAY"];
};

const FitLabs = () => {
  const [activeCategory, setActiveCategory] = useState<FitLabItem["category"]>("tops");
  const [outfit, setOutfit] = useState<OutfitSlots>({ top: null, bottom: null, shoes: null, accessory: null });
  const [draggedItem, setDraggedItem] = useState<FitLabItem | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<keyof OutfitSlots | null>(null);
  const { toast } = useToast();

  const filteredItems = fitLabItems.filter((item) => item.category === activeCategory);
  const harmony = getColorHarmony(outfit);
  const suggestions = getStyleSuggestions(outfit);
  const bestFor = getBestFor(outfit);
  const filledCount = Object.values(outfit).filter(Boolean).length;

  const categoryToSlot = (cat: FitLabItem["category"]): keyof OutfitSlots => {
    const map: Record<string, keyof OutfitSlots> = { tops: "top", bottoms: "bottom", shoes: "shoes", accessories: "accessory" };
    return map[cat];
  };

  const handleDragStart = useCallback((item: FitLabItem) => {
    setDraggedItem(item);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, slot: keyof OutfitSlots) => {
    e.preventDefault();
    setDragOverSlot(slot);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverSlot(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, slot: keyof OutfitSlots) => {
    e.preventDefault();
    if (draggedItem && categoryToSlot(draggedItem.category) === slot) {
      setOutfit((prev) => ({ ...prev, [slot]: draggedItem }));
      toast({ title: `${draggedItem.name} added! ✨`, description: `Placed in ${slotLabels[slot].label} slot` });
    }
    setDraggedItem(null);
    setDragOverSlot(null);
  }, [draggedItem, toast]);

  const handleItemClick = useCallback((item: FitLabItem) => {
    const slot = categoryToSlot(item.category);
    setOutfit((prev) => ({ ...prev, [slot]: item }));
    toast({ title: `${item.name} added! ✨`, description: `Placed in ${slotLabels[slot].label} slot` });
  }, [toast]);

  const removeFromSlot = useCallback((slot: keyof OutfitSlots) => {
    setOutfit((prev) => ({ ...prev, [slot]: null }));
  }, []);

  const resetOutfit = useCallback(() => {
    setOutfit({ top: null, bottom: null, shoes: null, accessory: null });
    toast({ title: "Outfit reset! 🔄" });
  }, [toast]);

  const saveOutfit = useCallback(() => {
    if (filledCount === 0) {
      toast({ title: "Add items first!", description: "Drop some pieces onto the canvas" });
      return;
    }
    toast({ title: "Outfit saved! 💾", description: "Your fit has been saved to your collection" });
  }, [filledCount, toast]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Header */}
        <div className="relative bg-desi-red-light texture-grain border-b-2 border-foreground/10 overflow-hidden">
          <FloatingDoodle className="top-4 right-12 hidden md:block" delay={0.2}>
            <DoodleStar className="w-12 h-12 text-desi-yellow/30" />
          </FloatingDoodle>
          <FloatingDoodle className="bottom-2 left-8 hidden md:block" delay={0.4}>
            <DoodleSparkle className="w-8 h-8 text-primary/20" />
          </FloatingDoodle>
          <div className="text-center py-8 container mx-auto px-4 relative z-10">
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
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6">
            
            {/* Left Sidebar — Item Picker */}
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
                    {outfit[categoryToSlot(cat.key)] && (
                      <CheckCircle className="w-3.5 h-3.5 ml-auto opacity-70" />
                    )}
                  </button>
                ))}
              </div>

              <p className="text-[10px] font-bold text-muted-foreground tracking-widest mb-3">DRAG OR TAP TO ADD</p>
              <div className="flex flex-col gap-2">
                {filteredItems.map((item) => {
                  const isActive = outfit[categoryToSlot(item.category)]?.id === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      draggable
                      onDragStart={() => handleDragStart(item)}
                      onClick={() => handleItemClick(item)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center gap-3 p-2.5 rounded-lg cursor-grab active:cursor-grabbing transition-colors border-2 ${
                        isActive
                          ? "bg-desi-yellow-light border-desi-yellow/50 desi-shadow-sm"
                          : "border-transparent hover:bg-desi-yellow-light/50 hover:border-desi-yellow/20"
                      }`}
                    >
                      <GripVertical className="w-3 h-3 text-muted-foreground/40 shrink-0" />
                      <div
                        className="w-10 h-10 rounded-lg border-2 border-foreground/15 shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium text-foreground truncate">{item.name}</span>
                      {isActive && <CheckCircle className="w-3.5 h-3.5 text-desi-green shrink-0 ml-auto" />}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Center — Outfit Canvas */}
            <div className="bg-desi-cream rounded-xl border-2 border-foreground/15 min-h-[500px] texture-grain p-6 flex flex-col">
              <div className="text-center mb-4">
                <p className="text-xs font-bold text-muted-foreground tracking-widest">YOUR OUTFIT</p>
                <p className="font-handwritten text-base text-desi-saffron/70">
                  {filledCount === 0 ? "start building ✦" : `${filledCount}/4 pieces added 🔥`}
                </p>
              </div>

              {/* Outfit Slots Grid */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                {(Object.keys(slotLabels) as (keyof OutfitSlots)[]).map((slot) => {
                  const item = outfit[slot];
                  const isOver = dragOverSlot === slot;
                  const canDrop = draggedItem && categoryToSlot(draggedItem.category) === slot;

                  return (
                    <motion.div
                      key={slot}
                      onDragOver={(e) => handleDragOver(e, slot)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, slot)}
                      layout
                      className={`relative rounded-xl border-2 border-dashed flex flex-col items-center justify-center min-h-[160px] transition-all ${
                        item
                          ? "border-desi-green/40 bg-card"
                          : isOver && canDrop
                          ? "border-primary bg-desi-red-light/30 scale-[1.02]"
                          : isOver && !canDrop
                          ? "border-destructive/40 bg-destructive/5"
                          : "border-foreground/15 bg-card/50 hover:border-foreground/25"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {item ? (
                          <motion.div
                            key={item.id}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="flex flex-col items-center gap-2 p-4"
                          >
                            <div
                              className="w-20 h-20 rounded-xl border-2 border-foreground/15 desi-shadow-sm"
                              style={{ backgroundColor: item.color }}
                            />
                            <p className="text-xs font-bold text-foreground text-center">{item.name}</p>
                            <button
                              onClick={() => removeFromSlot(slot)}
                              className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors"
                            >
                              <X className="w-3 h-3 text-destructive" />
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center p-4"
                          >
                            <span className="text-3xl block mb-2">{slotLabels[slot].icon}</span>
                            <p className="text-xs font-bold text-muted-foreground/50 tracking-wide">
                              {slotLabels[slot].label}
                            </p>
                            <p className="text-[10px] text-muted-foreground/40 mt-1">Drop here</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Outfit Preview Strip */}
              {filledCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2"
                >
                  {(Object.keys(slotLabels) as (keyof OutfitSlots)[]).map((slot) => {
                    const item = outfit[slot];
                    return (
                      <div
                        key={slot}
                        className={`w-10 h-10 rounded-lg border-2 transition-all ${
                          item
                            ? "border-foreground/20 desi-shadow-sm"
                            : "border-dashed border-foreground/10"
                        }`}
                        style={item ? { backgroundColor: item.color } : { backgroundColor: "transparent" }}
                        title={item ? item.name : slotLabels[slot].label}
                      />
                    );
                  })}
                </motion.div>
              )}
            </div>

            {/* Right Panel — AI Insights */}
            <div className="bg-card rounded-xl border-2 border-foreground/10 p-5 flex flex-col gap-5">
              <h3 className="font-display text-xl text-foreground flex items-center gap-2 tracking-wide">
                <Sparkles className="w-4 h-4 text-desi-saffron" /> AI INSIGHTS
              </h3>

              {/* Color Harmony */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-bold text-xs tracking-wide">COLOR HARMONY</span>
                  <span className={`font-bold ${harmony >= 60 ? "text-desi-green" : harmony >= 30 ? "text-desi-saffron" : "text-muted-foreground"}`}>
                    {harmony}%
                  </span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden border border-foreground/10">
                  <motion.div
                    className={`h-full rounded-full ${harmony >= 60 ? "bg-desi-green" : harmony >= 30 ? "bg-desi-saffron" : "bg-muted-foreground/30"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${harmony}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Best For */}
              {bestFor.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-foreground mb-2 tracking-wide">BEST FOR:</p>
                  <div className="flex gap-2 flex-wrap">
                    {bestFor.map((tag) => (
                      <span key={tag} className="sticker-badge text-desi-blue border-desi-blue bg-desi-blue-light text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Suggestions */}
              <div>
                <p className="text-xs font-bold text-foreground mb-2 tracking-wide">SUGGESTIONS</p>
                <div className="flex flex-col gap-2">
                  {suggestions.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2 font-medium"
                    >
                      {s}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Kasaragod Inspiration */}
              <div className="mt-auto">
                <p className="text-xs font-bold text-foreground mb-2 tracking-wide">KASARAGOD STYLE TIP</p>
                <div className="bg-desi-saffron-light rounded-lg p-3 border border-desi-saffron/20">
                  <p className="font-handwritten text-sm text-desi-saffron">
                    {filledCount >= 3
                      ? "\"Mix earthy tones with a bold accent — the Kasaragod way!\" 🌿"
                      : "\"Start with neutrals, end with fire\" — every great fit begins somewhere ✦"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            <button
              onClick={resetOutfit}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-muted transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> RESET
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-desi-yellow text-desi-black text-sm font-bold desi-shadow-sm hover:translate-y-[-2px] transition-all">
              <Sparkles className="w-4 h-4" /> AI SUGGEST
            </button>
            <button
              onClick={saveOutfit}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-muted transition-colors"
            >
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