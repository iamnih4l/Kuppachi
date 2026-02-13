import { Upload, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import StyleBadge from "@/components/StyleBadge";
import { communityFits } from "@/data/mockProducts";
import { Heart } from "lucide-react";

const palettes = [
  { color: "bg-kasargod-green", label: "Sage" },
  { color: "bg-kasargod-peach", label: "Peach" },
  { color: "bg-kasargod-pink", label: "Rose" },
  { color: "bg-kasargod-sky", label: "Sky" },
];

const AiUpload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 py-12">
        {/* Upload + Try-On Row */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Upload Card */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Let's find colors that love you back
            </h2>
            <div className="mt-6 border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center bg-kasargod-peach/20 min-h-[220px] cursor-pointer hover:border-kasargod-coral transition-colors">
              {/* TODO: Wire up file input when backend is ready */}
              <Upload className="w-8 h-8 text-muted-foreground mb-3" />
              <p className="font-semibold text-foreground">Upload Your Photo</p>
              <p className="text-sm text-muted-foreground">We'll analyze your skin tone</p>
            </div>

            {/* Palette */}
            <div className="mt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Your Perfect Palette</p>
              <div className="flex gap-3">
                {palettes.map((p) => (
                  <div key={p.label} className={`w-12 h-12 rounded-full ${p.color}`} title={p.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Virtual Try-On */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Virtual Try-On
            </h2>
            <div className="flex items-center gap-4">
              {/* Before */}
              <div className="flex-1 bg-kasargod-mint/30 rounded-2xl h-40 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl">😊</span>
                  <p className="text-xs text-muted-foreground mt-2">Before</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0" />
              {/* After */}
              <div className="flex-1 bg-kasargod-mint/30 rounded-2xl h-40 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl">😎</span>
                  <p className="text-xs text-muted-foreground mt-2">After</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 rounded-full bg-kasargod-coral text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Try It Now
              </button>
            </div>
          </div>
        </div>

        {/* Community Fits */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl font-bold text-foreground">Community Fits</h2>
          <p className="text-muted-foreground mt-3">
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
    </div>
  );
};

export default AiUpload;
