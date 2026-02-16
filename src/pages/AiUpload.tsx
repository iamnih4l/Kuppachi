import { Upload, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { communityFits } from "@/data/mockProducts";
import { Heart } from "lucide-react";

const palettes = [
  { color: "bg-desi-red", label: "Vermilion" },
  { color: "bg-desi-saffron", label: "Saffron" },
  { color: "bg-desi-blue", label: "Indigo" },
  { color: "bg-desi-green", label: "Jade" },
];

const AiUpload = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="container mx-auto px-4 py-12">
          {/* Upload + Try-On Row */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Upload Card */}
            <div>
              <p className="font-handwritten text-xl text-desi-saffron mb-1 rotate-[-2deg]">AI powered ✨</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-2">
                FIND YOUR COLORS
              </h2>
              <div className="mt-6 border-2 border-dashed border-foreground/15 rounded-xl p-12 flex flex-col items-center justify-center bg-desi-saffron-light/50 min-h-[220px] cursor-pointer hover:border-primary transition-colors texture-grain">
                <Upload className="w-8 h-8 text-muted-foreground mb-3" />
                <p className="font-bold text-foreground text-sm tracking-wide">UPLOAD YOUR PHOTO</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">We'll analyze your skin tone</p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold text-muted-foreground mb-3 tracking-widest uppercase">YOUR PERFECT PALETTE</p>
                <div className="flex gap-3">
                  {palettes.map((p) => (
                    <div key={p.label} className={`w-12 h-12 rounded-lg ${p.color} border-2 border-foreground/15 hover:scale-110 transition-transform cursor-pointer`} title={p.label} />
                  ))}
                </div>
              </div>
            </div>

            {/* Virtual Try-On */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
                VIRTUAL TRY-ON
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-desi-cream rounded-xl h-40 flex items-center justify-center border-2 border-foreground/10">
                  <div className="text-center">
                    <span className="text-3xl">😊</span>
                    <p className="text-xs text-muted-foreground mt-2 font-bold tracking-wide">BEFORE</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0" />
                <div className="flex-1 bg-desi-cream rounded-xl h-40 flex items-center justify-center border-2 border-foreground/10">
                  <div className="text-center">
                    <span className="text-3xl">😎</span>
                    <p className="text-xs text-muted-foreground mt-2 font-bold tracking-wide">AFTER</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-7 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-bold desi-shadow-sm hover:translate-y-[-2px] transition-all tracking-wide">
                  TRY IT NOW →
                </button>
              </div>
            </div>
          </div>

          {/* Community Fits */}
          <div className="text-center mb-10">
            <p className="font-handwritten text-xl text-primary mb-1">real creators, real style 💚</p>
            <h2 className="font-display text-5xl text-foreground tracking-wide">COMMUNITY FITS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityFits.map((fit, idx) => (
              <div key={fit.id} className={`bg-card rounded-xl border-2 border-foreground/10 p-5 hover:translate-y-[-4px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}>
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
        </section>
      </div>
    </PageTransition>
  );
};

export default AiUpload;
