import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/mockProducts";
import StyleBadge from "./StyleBadge";
import { useStore } from "@/store/useStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const role = useStore((s) => s.role);
  const addToCart = useStore((s) => s.addToCart);

  return (
    <div className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] rounded-xl border-2 border-foreground/10 bg-card overflow-hidden">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.tag && (
          <div className="absolute top-3 left-3">
            <StyleBadge label={product.tag} className={product.tagColor} />
          </div>
        )}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-desi-red-light transition-all hover:scale-110 duration-200 border border-foreground/10">
          <Heart className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
        {/* Grainy overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 pointer-events-none" />
      </div>
      <div className="p-3">
        <p className="text-[10px] font-bold text-muted-foreground tracking-[0.15em] uppercase">{product.shop}</p>
        <h3 className="font-sans text-sm font-semibold text-foreground mt-0.5">{product.name}</h3>
        <p className="text-base font-bold text-primary mt-1 font-display tracking-wide">₹{product.price.toLocaleString()}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-1.5">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border-2 border-foreground/20 transition-transform duration-200 hover:scale-125"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {role !== "seller" && (
            <button
              onClick={() => addToCart(product)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:translate-y-[-1px] hover:shadow-[2px_3px_0_0_hsl(var(--desi-black))] transition-all duration-200"
            >
              <ShoppingBag className="w-3 h-3" /> ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
