import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SellerLayout from "@/components/SellerLayout";
import { Upload as UploadIcon, ImagePlus } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/data/mockProducts";

const categories = ["Tops", "Bottoms", "Shoes", "Accessories"];
const styleTags = ["Kasargod Pick", "Street Fit", "Creator Favorite", "Minimal"];

const Upload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const addProduct = useStore((s) => s.addProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Product["category"]>("Tops");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleUpload = () => {
    if (!name || !price) {
      toast({ title: "Validation Error", description: "Please enter a name and price.", variant: "destructive" });
      return;
    }

    const newProduct: Product = {
      id: `p_${Date.now()}`,
      name,
      shop: "My Shop",
      price: Number(price),
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop", // Mock image upload
      category: selectedCategory,
      tag: selectedTags[0] || undefined,
      tagColor: "bg-primary text-primary-foreground font-bold border border-primary/30",
      colors: selectedColors.length > 0 ? selectedColors : ["#000000"],
    };

    addProduct(newProduct);
    toast({ title: "Product Uploaded! 🚀", description: `${name} is now live.` });
    navigate("/seller/products");
  };

  return (
    <PageTransition>
      <SellerLayout>
        <div className="max-w-2xl space-y-8">
          <div>
            <h1 className="font-display text-4xl text-foreground tracking-wide">UPLOAD PRODUCT</h1>
            <p className="font-handwritten text-lg text-desi-saffron mt-1 rotate-[-1deg]">add something bold to your collection 🎨</p>
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-xs font-bold text-foreground mb-2 block tracking-widest uppercase">PRODUCT IMAGE</label>
            <div className="border-2 border-dashed border-foreground/15 rounded-xl p-10 flex flex-col items-center justify-center bg-desi-saffron-light/30 cursor-pointer hover:border-primary transition-colors texture-grain">
              <ImagePlus className="w-10 h-10 text-muted-foreground mb-3" />
              <p className="font-bold text-foreground text-sm tracking-wide">CLICK TO UPLOAD</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">PNG, JPG up to 5MB. Square works best.</p>
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="text-xs font-bold text-foreground mb-2 block tracking-widest uppercase">PRODUCT NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Kasargod Cotton Tee"
              className="w-full h-12 rounded-xl border-2 border-foreground/10 bg-card px-4 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-xs font-bold text-foreground mb-2 block tracking-widest uppercase">PRICE (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="899"
              className="w-full h-12 rounded-xl border-2 border-foreground/10 bg-card px-4 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-bold text-foreground mb-2 block tracking-widest uppercase">CATEGORY</label>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as Product["category"])}
                  className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all ${selectedCategory === cat
                      ? "bg-primary text-primary-foreground border-primary desi-shadow-sm"
                      : "bg-card text-muted-foreground border-foreground/10 hover:bg-muted"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div>
            <label className="text-xs font-bold text-foreground mb-2 block tracking-widest uppercase">COLOR OPTIONS</label>
            <div className="flex gap-3">
              {["#C0392B", "#E67E22", "#2980B9", "#27AE60", "#2C3E50"].map((c) => (
                <button
                  key={c}
                  onClick={() => toggleColor(c)}
                  className={`w-9 h-9 rounded-lg border-2 transition-all ${selectedColors.includes(c) ? "scale-110 border-foreground" : "border-foreground/20 hover:scale-110"
                    }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Style Tags */}
          <div>
            <label className="text-xs font-bold text-foreground mb-2 block tracking-widest uppercase">STYLE TAGS</label>
            <div className="flex gap-2 flex-wrap">
              {styleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all ${selectedTags.includes(tag)
                      ? "bg-desi-yellow text-desi-black border-desi-yellow desi-shadow-sm"
                      : "bg-card text-muted-foreground border-foreground/10 hover:bg-muted"
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleUpload}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all inline-flex items-center justify-center gap-2 tracking-wide"
          >
            <UploadIcon className="w-4 h-4" /> UPLOAD PRODUCT
          </button>

          <p className="text-xs text-muted-foreground text-center font-medium">
            Tip: Use clean, well-lit photos with white backgrounds for the best results 📸
          </p>
        </div>
      </SellerLayout>
    </PageTransition>
  );
};

export default Upload;
