import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ArrowRight, Camera, Palette, Sparkles, Shirt, Eye, Wand2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { DoodleStar, DoodleCircle, DoodleSparkle, FloatingDoodle } from "@/components/DesiDoodles";
import { useToast } from "@/hooks/use-toast";

const skinTones = [
  { name: "Fair", hex: "#FDEBD3", palettes: ["#8B3A3A", "#2C5F2D", "#1B3A5C", "#C87533"] },
  { name: "Light", hex: "#F5D0A9", palettes: ["#B22222", "#2E8B57", "#4169E1", "#DAA520"] },
  { name: "Medium", hex: "#D4A574", palettes: ["#FF6347", "#3CB371", "#6495ED", "#FF8C00"] },
  { name: "Olive", hex: "#C19A6B", palettes: ["#DC143C", "#228B22", "#4682B4", "#D2691E"] },
  { name: "Brown", hex: "#8D5524", palettes: ["#FFD700", "#00CED1", "#FF69B4", "#F0E68C"] },
  { name: "Deep", hex: "#4A2C2A", palettes: ["#FFD700", "#00FA9A", "#FF4500", "#E6E6FA"] },
];

const tryOnOutfits = [
  { id: 1, name: "Kasaragod Cotton Set", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop", style: "Casual" },
  { id: 2, name: "Street Style Fit", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop", style: "Street" },
  { id: 3, name: "Heritage Look", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop", style: "Traditional" },
];

const styleRecommendations = [
  { icon: "🌴", title: "Coastal Casual", desc: "Earthy tones with breathable fabrics — perfect for Kerala's vibe", match: 92 },
  { icon: "🔥", title: "Desi Street", desc: "Bold colors, layered accessories, and statement pieces", match: 85 },
  { icon: "✨", title: "Minimal Desi", desc: "Clean lines with subtle Indian accents and textures", match: 78 },
];

const AiFeatures = () => {
  const [selectedTone, setSelectedTone] = useState<number | null>(null);
  const [uploadState, setUploadState] = useState<"idle" | "analyzing" | "done">("idle");
  const [selectedTryOn, setSelectedTryOn] = useState<number | null>(null);
  const { toast } = useToast();

  const handleUpload = () => {
    setUploadState("analyzing");
    setTimeout(() => {
      setUploadState("done");
      setSelectedTone(2); // Mock result: Medium skin tone
      toast({ title: "Analysis complete! 🎨", description: "We found your perfect color palette" });
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <div className="relative bg-desi-blue-light texture-grain border-b-2 border-foreground/10 overflow-hidden">
          <FloatingDoodle className="top-6 right-10 hidden md:block" delay={0.2}>
            <DoodleStar className="w-14 h-14 text-desi-yellow/25" />
          </FloatingDoodle>
          <FloatingDoodle className="bottom-4 left-12 hidden md:block" delay={0.5}>
            <DoodleCircle className="w-16 h-16 text-primary/15" />
          </FloatingDoodle>
          <div className="container mx-auto px-4 py-14 text-center relative z-10">
            <span className="stamp-badge text-desi-blue border-desi-blue mb-4 inline-block">🤖 AI POWERED</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wide mt-4">
              AI <span className="text-primary">STYLE LAB</span>
            </h1>
            <p className="font-handwritten text-xl text-desi-saffron mt-3 rotate-[-1deg]">
              your personal stylist, powered by AI ✨
            </p>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
              Discover your perfect colors, try outfits virtually, and get personalized style recommendations.
            </p>
          </div>
        </div>

        {/* Color Tone Analyzer */}
        <section className="container mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-primary" />
                <p className="font-handwritten text-xl text-desi-saffron rotate-[-2deg]">AI powered ✨</p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-2">
                FIND YOUR COLORS
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Upload a photo and our AI will analyze your skin tone to suggest the most flattering colors for you.
              </p>

              {/* Upload Area */}
              <motion.div
                onClick={handleUpload}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center min-h-[220px] cursor-pointer transition-all texture-grain ${
                  uploadState === "analyzing"
                    ? "border-desi-saffron bg-desi-saffron-light/30"
                    : uploadState === "done"
                    ? "border-desi-green bg-desi-green-light/30"
                    : "border-foreground/15 bg-desi-saffron-light/50 hover:border-primary"
                }`}
              >
                <AnimatePresence mode="wait">
                  {uploadState === "idle" && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                      <Upload className="w-10 h-10 text-muted-foreground mb-3 mx-auto" />
                      <p className="font-bold text-foreground text-sm tracking-wide">UPLOAD YOUR PHOTO</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">Click to analyze your skin tone</p>
                    </motion.div>
                  )}
                  {uploadState === "analyzing" && (
                    <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                        <Sparkles className="w-10 h-10 text-desi-saffron mb-3 mx-auto" />
                      </motion.div>
                      <p className="font-bold text-foreground text-sm tracking-wide">ANALYZING...</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">Our AI is studying your skin tone</p>
                    </motion.div>
                  )}
                  {uploadState === "done" && (
                    <motion.div key="done" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                      <Camera className="w-10 h-10 text-desi-green mb-3 mx-auto" />
                      <p className="font-bold text-foreground text-sm tracking-wide">ANALYSIS COMPLETE! ✅</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">Your perfect palette is ready</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Skin Tone Selector & Results */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4 tracking-wide">SELECT SKIN TONE</h3>
              <p className="text-xs text-muted-foreground mb-4 font-medium">Or pick manually to see your palette</p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {skinTones.map((tone, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTone(i)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      selectedTone === i
                        ? "border-primary bg-desi-red-light/30 desi-shadow-sm"
                        : "border-foreground/10 hover:border-foreground/25"
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-lg mx-auto mb-2 border-2 border-foreground/15"
                      style={{ backgroundColor: tone.hex }}
                    />
                    <p className="text-xs font-bold text-foreground">{tone.name}</p>
                  </motion.button>
                ))}
              </div>

              {/* Color Palette Result */}
              <AnimatePresence>
                {selectedTone !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-card rounded-xl border-2 border-foreground/10 p-5 desi-shadow"
                  >
                    <p className="text-xs font-bold text-foreground mb-3 tracking-widest uppercase">
                      YOUR PERFECT PALETTE — {skinTones[selectedTone].name}
                    </p>
                    <div className="flex gap-3">
                      {skinTones[selectedTone].palettes.map((color, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex-1 flex flex-col items-center gap-1.5"
                        >
                          <div
                            className="w-full aspect-square rounded-lg border-2 border-foreground/15 hover:scale-110 transition-transform cursor-pointer desi-shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                          <p className="text-[10px] text-muted-foreground font-mono">{color}</p>
                        </motion.div>
                      ))}
                    </div>
                    <Link
                      to="/marketplace"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                    >
                      Shop these colors <ChevronRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Virtual Try-On */}
        <section className="bg-desi-cream texture-grain py-14">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-primary" />
                <p className="font-handwritten text-xl text-primary">see before you buy 👀</p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide">
                VIRTUAL TRY-ON
              </h2>
              <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
                Select an outfit and see how it looks on you — powered by AI visualization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Outfit Selector */}
              <div>
                <p className="text-xs font-bold text-foreground mb-3 tracking-widest">CHOOSE AN OUTFIT</p>
                <div className="flex flex-col gap-3">
                  {tryOnOutfits.map((outfit) => (
                    <motion.button
                      key={outfit.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTryOn(outfit.id)}
                      className={`flex items-center gap-4 p-3 rounded-xl border-2 text-left transition-all ${
                        selectedTryOn === outfit.id
                          ? "border-primary bg-desi-red-light/30 desi-shadow-sm"
                          : "border-foreground/10 bg-card hover:border-foreground/25"
                      }`}
                    >
                      <img
                        src={outfit.image}
                        alt={outfit.name}
                        className="w-16 h-16 rounded-lg object-cover border border-foreground/10"
                      />
                      <div>
                        <p className="font-bold text-sm text-foreground">{outfit.name}</p>
                        <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">{outfit.style}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Try-On Preview */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 bg-card rounded-xl h-56 flex items-center justify-center border-2 border-foreground/10">
                    <div className="text-center">
                      <span className="text-5xl block mb-2">😊</span>
                      <p className="text-xs text-muted-foreground font-bold tracking-wide">YOUR PHOTO</p>
                    </div>
                  </div>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0" />
                  </motion.div>
                  <div className="flex-1 bg-card rounded-xl h-56 flex items-center justify-center border-2 border-foreground/10 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {selectedTryOn ? (
                        <motion.div
                          key={selectedTryOn}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center"
                        >
                          <span className="text-5xl block mb-2">😎</span>
                          <p className="text-xs text-desi-green font-bold tracking-wide">LOOKING GREAT!</p>
                          <span className="stamp-badge text-primary border-primary text-[9px] mt-2 inline-block">
                            AI STYLED ✨
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                          <span className="text-5xl block mb-2">👗</span>
                          <p className="text-xs text-muted-foreground font-bold tracking-wide">RESULT</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <button
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all tracking-wide inline-flex items-center justify-center gap-2"
                >
                  <Wand2 className="w-4 h-4" /> GENERATE TRY-ON
                </button>
                <p className="text-xs text-muted-foreground font-medium">Demo only — AI try-on coming soon 🎨</p>
              </div>
            </div>
          </div>
        </section>

        {/* Style Recommendations */}
        <section className="container mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <p className="font-handwritten text-xl text-desi-saffron mb-1">curated for you 💛</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide">
              STYLE RECOMMENDATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {styleRecommendations.map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`bg-card rounded-xl border-2 border-foreground/10 p-5 hover:translate-y-[-3px] hover:shadow-[4px_6px_0_0_hsl(var(--desi-black))] transition-all ${
                  i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                }`}
              >
                <span className="text-3xl block mb-3">{rec.icon}</span>
                <h3 className="font-display text-lg text-foreground mb-1">{rec.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{rec.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-desi-green tracking-widest">{rec.match}% MATCH</span>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-desi-green rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${rec.match}%` }}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              to="/fitlabs"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-desi-yellow text-desi-black font-bold text-sm rounded-lg desi-shadow-sm hover:translate-y-[-2px] transition-all"
            >
              <Shirt className="w-4 h-4" /> BUILD YOUR OUTFIT IN FITLAB
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AiFeatures;