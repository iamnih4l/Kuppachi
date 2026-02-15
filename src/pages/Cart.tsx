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
          <h1 className="font-display text-3xl font-black text-foreground mb-8">Your Cart 🛒</h1>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Link
                to="/marketplace"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-kasargod-coral text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-4 bg-card rounded-2xl border border-border p-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-foreground truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm font-semibold text-foreground mt-1">
                        ₹{item.product.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 bg-card rounded-2xl border border-border p-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">₹{cartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-kasargod-green font-medium">Free</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-bold text-lg text-foreground">₹{cartTotal().toLocaleString()}</span>
                </div>
                <button className="w-full mt-5 py-3 rounded-full bg-kasargod-coral text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-muted-foreground mt-2">
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
