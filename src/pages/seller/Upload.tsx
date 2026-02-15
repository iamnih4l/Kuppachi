import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import SellerLayout from "@/components/SellerLayout";
import { Upload as UploadIcon, ImagePlus } from "lucide-react";

const categories = ["Tops", "Bottoms", "Shoes", "Accessories"];
const styleTags = ["Kasargod Pick", "Street Fit", "Creator Favorite", "Minimal"];

const Upload = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <PageTransition>
      <SellerLayout>
        <div className="max-w-2xl space-y-8">
          <div>
            <h1 className="font-display text-3xl font-black text-foreground">Upload Product</h1>
            <p className="text-muted-foreground mt-1">Add a new item to your Kasargod collection 🎨</p>
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Product Image</label>
            <div className="border-2 border-dashed border-border rounded-2xl p-10 flex flex-col items-center justify-center bg-muted/30 cursor-pointer hover:border-kasargod-coral transition-colors">
              <ImagePlus className="w-10 h-10 text-muted-foreground mb-3" />
              <p className="text-sm font-medium text-foreground">Click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB. Square works best.</p>
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Product Name</label>
            <input
              type="text"
              placeholder="e.g. Kasargod Cotton Tee"
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Price (₹)</label>
            <input
              type="number"
              placeholder="899"
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    selectedCategory === cat
                      ? "bg-kasargod-green text-primary-foreground border-kasargod-green"
                      : "bg-card text-muted-foreground border-border hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Color Tags */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Color Options</label>
            <div className="flex gap-3">
              {["#A8D8C8", "#F5C5A3", "#F4A0B0", "#333333", "#6888A8"].map((c) => (
                <button
                  key={c}
                  className="w-8 h-8 rounded-full border-2 border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Style Tags */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Style Tags</label>
            <div className="flex gap-2 flex-wrap">
              {styleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-kasargod-coral text-primary-foreground border-kasargod-coral"
                      : "bg-card text-muted-foreground border-border hover:bg-muted"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button className="w-full py-3 rounded-full bg-kasargod-coral text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
            <UploadIcon className="w-4 h-4" /> Upload Product
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Tip: Use clean, well-lit photos with white backgrounds for the best results 📸
          </p>
        </div>
      </SellerLayout>
    </PageTransition>
  );
};

export default Upload;
