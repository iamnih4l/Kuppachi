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
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl bg-muted aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.tag && (
          <div className="absolute top-3 left-3">
            <StyleBadge label={product.tag} className={product.tagColor} />
          </div>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
          <Heart className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      <div className="mt-3">
        <h3 className="font-sans text-sm font-medium text-foreground">{product.name}</h3>
        <p className="text-sm font-semibold text-foreground mt-1">₹{product.price.toLocaleString()}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-1.5">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {role !== "seller" && (
            <button
              onClick={() => addToCart(product)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-kasargod-green text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-3 h-3" /> Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
