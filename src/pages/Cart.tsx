import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { useStore } from "@/store/useStore";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const cart = useStore((s) => s.cart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const cartTotal = useStore((s) => s.cartTotal);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="container mx-auto px-4 py-12 max-w-2xl">
          <h1 className="font-display text-4xl text-foreground mb-2 tracking-wide">YOUR CART</h1>
          <p className="font-handwritten text-lg text-desi-saffron mb-8 rotate-[-1deg]">let's check out your picks 🛒</p>

          {cart.length === 0 ? (
            <div className="text-center py-20 bg-desi-cream rounded-xl border-2 border-dashed border-foreground/15 texture-grain">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-display text-xl text-muted-foreground mb-2">NOTHING HERE YET</p>
              <p className="font-handwritten text-lg text-desi-saffron/60 mb-6">go find something bold 🔥</p>
              <Link
                to="/marketplace"
                className="inline-flex items-center px-7 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-lg desi-shadow hover:translate-y-[-2px] transition-all"
              >
                START SHOPPING
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 bg-card rounded-xl border-2 border-foreground/10 p-4 hover:translate-y-[-1px] hover:shadow-[3px_4px_0_0_hsl(var(--desi-black))] transition-all"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover border-2 border-foreground/10"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-muted-foreground tracking-[0.15em] uppercase">{item.product.shop}</p>
                      <h3 className="font-semibold text-sm text-foreground truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-base font-bold text-primary font-display tracking-wide mt-0.5">
                        ₹{item.product.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border-2 border-foreground/15 flex items-center justify-center hover:bg-muted transition-colors font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold w-6 text-center text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border-2 border-foreground/15 flex items-center justify-center hover:bg-muted transition-colors font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:bg-desi-red-light p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 bg-card rounded-xl border-2 border-foreground/10 p-6 desi-shadow">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground font-medium">Subtotal</span>
                  <span className="font-bold text-foreground">₹{cartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground font-medium">Shipping</span>
                  <span className="text-desi-green font-bold">FREE</span>
                </div>
                <div className="border-t-2 border-foreground/10 pt-3 flex justify-between">
                  <span className="font-display text-xl text-foreground tracking-wide">TOTAL</span>
                  <span className="font-display text-2xl text-primary tracking-wide">₹{cartTotal().toLocaleString()}</span>
                </div>
                <button className="w-full mt-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all tracking-wide">
                  PROCEED TO CHECKOUT →
                </button>
                <p className="text-center text-xs text-muted-foreground mt-3 font-medium">
                  Checkout is UI-only for now 🎨
                </p>
              </div>
            </>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default Cart;
