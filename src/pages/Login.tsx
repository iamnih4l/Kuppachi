import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, type UserRole } from "@/store/useStore";
import PageTransition from "@/components/PageTransition";
import { ShoppingBag, Store } from "lucide-react";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setRole = useStore((s) => s.setRole);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) return;
    // TODO: Wire up real auth here
    setRole(selectedRole);
    navigate(selectedRole === "seller" ? "/seller/dashboard" : "/");
  };

  const roles = [
    {
      key: "buyer" as const,
      icon: <ShoppingBag className="w-8 h-8" />,
      emoji: "👤",
      title: "Buyer",
      desc: "Shop, mix & create outfits",
    },
    {
      key: "seller" as const,
      icon: <Store className="w-8 h-8" />,
      emoji: "🏪",
      title: "Seller",
      desc: "Sell, analyze & grow",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-full bg-kasargod-green-light flex items-center justify-center mx-auto mb-4">
              <span className="text-kasargod-green text-2xl">✦</span>
            </div>
            <h1 className="font-display text-3xl font-black text-foreground">
              Welcome to Kasargod
            </h1>
            <p className="text-muted-foreground mt-2">Pick your vibe and jump in ✨</p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {roles.map((r) => (
              <button
                key={r.key}
                onClick={() => setSelectedRole(r.key)}
                className={`p-5 rounded-2xl border-2 text-center transition-all ${
                  selectedRole === r.key
                    ? "border-kasargod-coral bg-kasargod-coral/10"
                    : "border-border bg-card hover:border-muted-foreground/30"
                }`}
              >
                <span className="text-3xl">{r.emoji}</span>
                <p className="font-semibold text-foreground mt-3">{r.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
              </button>
            ))}
          </div>

          {/* Login Form */}
          <div className="space-y-4 mb-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* CTA */}
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className="w-full py-3 rounded-full bg-kasargod-coral text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            {selectedRole
              ? `Continue as ${selectedRole === "buyer" ? "Buyer" : "Seller"}`
              : "Select a role to continue"}
          </button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            No real login yet — this is a demo 🎨
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
