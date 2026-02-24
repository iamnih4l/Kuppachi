import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X, LogOut, Zap } from "lucide-react";
import { useStore } from "@/store/useStore";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const role = useStore((s) => s.role);
  const cart = useStore((s) => s.cart);
  const logout = useStore((s) => s.logout);

  const buyerLinks = [
    { to: "/marketplace", label: "SHOP" },
    { to: "/fitlabs", label: "FITLAB ⚡", isCta: true },
    { to: "/ai", label: "AI STYLE" },
    { to: "/creators", label: "CREATORS" },
  ];

  const navLinks = role === "seller" ? [] : buyerLinks;
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-desi-black/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to={role === "seller" ? "/seller/dashboard" : "/"} className="flex items-center gap-2 shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center rotate-[-3deg] desi-shadow-sm group-hover:rotate-0 transition-transform">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl text-foreground tracking-wider">FITLABS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.isCta ? (
              <Link
                key={link.to}
                to={link.to}
                className="ml-2 px-5 py-2 bg-desi-yellow text-desi-black text-sm font-bold rounded-lg desi-shadow-sm hover:translate-y-[-2px] hover:shadow-[4px_6px_0_0_hsl(var(--desi-black))] transition-all rotate-[-1deg]"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-bold transition-colors rounded-lg ${
                  location.pathname === link.to
                    ? "text-primary bg-desi-red-light"
                    : "text-foreground hover:bg-muted"
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
              className="relative ml-2 w-10 h-10 rounded-lg border-2 border-foreground/20 flex items-center justify-center hover:bg-desi-yellow-light transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center animate-bounce-in">
                  {cartCount}
                </span>
              )}
            </Link>
          )}

          {role ? (
            <Link
              to="/login"
              onClick={() => logout()}
              className="ml-1 w-10 h-10 rounded-lg border-2 border-foreground/20 flex items-center justify-center hover:bg-desi-red-light transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="ml-1 w-10 h-10 rounded-lg border-2 border-foreground/20 flex items-center justify-center hover:bg-desi-yellow-light transition-colors"
            >
              <User className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border-2 border-foreground/20"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-desi-black/10 bg-background px-4 pb-4 pt-2 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-bold py-2.5 px-3 rounded-lg ${
                  link.isCta
                    ? "text-center bg-desi-yellow text-desi-black desi-shadow-sm"
                    : location.pathname === link.to
                    ? "text-primary bg-desi-red-light"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              {role !== "seller" && (
                <Link
                  to="/cart"
                  onClick={() => setMobileOpen(false)}
                  className="relative w-10 h-10 rounded-lg border-2 border-foreground/20 flex items-center justify-center"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              )}
              {role ? (
                <Link
                  to="/login"
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="w-10 h-10 rounded-lg border-2 border-foreground/20 flex items-center justify-center"
                >
                  <LogOut className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-lg border-2 border-foreground/20 flex items-center justify-center"
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
