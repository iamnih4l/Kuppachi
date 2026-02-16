import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, type UserRole } from "@/store/useStore";
import PageTransition from "@/components/PageTransition";
import { ShoppingBag, Store, Zap } from "lucide-react";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setRole = useStore((s) => s.setRole);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) return;
    setRole(selectedRole);
    navigate(selectedRole === "seller" ? "/seller/dashboard" : "/");
  };

  const roles = [
    {
      key: "buyer" as const,
      emoji: "👤",
      title: "I'M A BUYER",
      desc: "Shop, mix & create outfits",
      bg: "bg-desi-blue-light",
      border: "border-desi-blue",
      activeBg: "bg-desi-blue/10",
    },
    {
      key: "seller" as const,
      emoji: "🏪",
      title: "I'M A SELLER",
      desc: "Sell, analyze & grow",
      bg: "bg-desi-saffron-light",
      border: "border-desi-saffron",
      activeBg: "bg-desi-saffron/10",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex items-center justify-center px-4 texture-grain">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 text-desi-yellow text-7xl font-display opacity-10 rotate-12">★</div>
          <div className="absolute bottom-20 right-10 text-primary text-5xl opacity-10 rotate-[-20deg]">◆</div>
          <div className="absolute top-1/3 right-20 w-20 h-20 border-4 border-dashed border-desi-saffron/15 rounded-full" />
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Brand */}
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 rotate-[-3deg] desi-shadow">
              <Zap className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl text-foreground tracking-wider">
              JOIN FITLABS
            </h1>
            <p className="font-handwritten text-xl text-desi-saffron mt-2 rotate-[-2deg]">
              pick your vibe & jump in ✨
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {roles.map((r) => (
              <button
                key={r.key}
                onClick={() => setSelectedRole(r.key)}
                className={`p-5 rounded-xl border-2 text-center transition-all ${
                  selectedRole === r.key
                    ? `${r.border} ${r.activeBg} desi-shadow-sm translate-y-[-2px]`
                    : "border-foreground/10 bg-card hover:border-foreground/30 hover:translate-y-[-1px]"
                }`}
              >
                <span className="text-3xl block mb-2">{r.emoji}</span>
                <p className="font-display text-lg text-foreground tracking-wide">{r.title}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{r.desc}</p>
              </button>
            ))}
          </div>

          {/* Login Form */}
          <div className="space-y-3 mb-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-xl border-2 border-foreground/10 bg-card px-4 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-0 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-xl border-2 border-foreground/10 bg-card px-4 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-0 transition-colors"
            />
          </div>

          {/* CTA */}
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:translate-y-[-2px] desi-shadow hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all disabled:opacity-40 disabled:hover:translate-y-0 disabled:shadow-none tracking-wide"
          >
            {selectedRole
              ? `CONTINUE AS ${selectedRole === "buyer" ? "BUYER" : "SELLER"} →`
              : "SELECT A ROLE TO CONTINUE"}
          </button>

          <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
            No real login yet — this is a demo 🎨
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
