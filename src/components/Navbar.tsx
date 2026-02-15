import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X, LogOut } from "lucide-react";
import { useStore } from "@/store/useStore";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const role = useStore((s) => s.role);
  const cart = useStore((s) => s.cart);
  const logout = useStore((s) => s.logout);

  const buyerLinks = [
    { to: "/marketplace", label: "Shop" },
    { to: "/fitlabs", label: "FitLab ✨", isCta: true },
    { to: "/ai", label: "Creators" },
  ];

  const navLinks = role === "seller" ? [] : buyerLinks;
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to={role === "seller" ? "/seller/dashboard" : "/"} className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-full bg-kasargod-green-light flex items-center justify-center">
            <span className="text-kasargod-green text-lg">✦</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground">Kasargod</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isCta ? (
              <Link
                key={link.to}
                to={link.to}
                className="px-5 py-2 rounded-full bg-kasargod-coral text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Cart (buyer only) */}
          {role !== "seller" && (
            <Link
              to="/cart"
              className="relative w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-kasargod-coral text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          )}

          {role ? (
            <Link
              to="/login"
              onClick={() => logout()}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <User className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 ${
                  link.isCta
                    ? "text-center px-5 py-2.5 rounded-full bg-kasargod-coral text-primary-foreground font-semibold"
                    : location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              {role !== "seller" && (
                <Link
                  to="/cart"
                  onClick={() => setMobileOpen(false)}
                  className="relative w-9 h-9 rounded-full border border-border flex items-center justify-center"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-kasargod-coral text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              )}
              {role ? (
                <Link
                  to="/login"
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center"
                >
                  <LogOut className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center"
                >
                  <User className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
