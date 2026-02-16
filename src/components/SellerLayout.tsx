import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, Upload, LogOut, Zap } from "lucide-react";
import { useStore } from "@/store/useStore";

const sellerLinks = [
  { to: "/seller/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/seller/products", label: "Products", icon: Package },
  { to: "/seller/upload", label: "Upload", icon: Upload },
];

const SellerLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const logout = useStore((s) => s.logout);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-60 border-r-2 border-foreground/10 bg-card hidden md:flex flex-col">
        <div className="p-5 border-b-2 border-foreground/10">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center rotate-[-3deg] desi-shadow-sm group-hover:rotate-0 transition-transform">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl text-foreground tracking-wider">FITLABS</span>
          </Link>
          <p className="text-xs font-bold text-muted-foreground mt-1 tracking-widest uppercase">SELLER STUDIO</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sellerLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground desi-shadow-sm"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t-2 border-foreground/10">
          <Link
            to="/login"
            onClick={() => logout()}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold text-muted-foreground hover:bg-desi-red-light hover:text-primary transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Mobile header for seller */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b-2 border-foreground/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center rotate-[-3deg]">
              <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg text-foreground tracking-wider">FITLABS</span>
          </Link>
        </div>
        <div className="flex gap-1 mt-2 overflow-x-auto">
          {sellerLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground desi-shadow-sm"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <link.icon className="w-3 h-3" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 mt-20 md:mt-0">{children}</main>
    </div>
  );
};

export default SellerLayout;
