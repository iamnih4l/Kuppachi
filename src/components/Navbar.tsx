import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-kasargod-green-light flex items-center justify-center">
            <span className="text-kasargod-green text-lg">✦</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground">Kasargod</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/marketplace"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === "/marketplace" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Shop
          </Link>
          <Link
            to="/fitlabs"
            className="px-5 py-2 rounded-full bg-kasargod-coral text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            FitLab ✨
          </Link>
          <Link
            to="/ai"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === "/ai" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Creators
          </Link>
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
