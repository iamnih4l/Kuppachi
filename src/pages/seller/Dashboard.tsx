import PageTransition from "@/components/PageTransition";
import SellerLayout from "@/components/SellerLayout";
import { sellerKPIs } from "@/data/mockSeller";
import { TrendingUp, Eye, Package, IndianRupee } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Total Products": <Package className="w-5 h-5 text-desi-blue" />,
  "Total Views": <Eye className="w-5 h-5 text-desi-saffron" />,
  "Total Orders": <TrendingUp className="w-5 h-5 text-primary" />,
  Revenue: <IndianRupee className="w-5 h-5 text-desi-green" />,
};

const bgMap: Record<string, string> = {
  "Total Products": "bg-desi-blue-light",
  "Total Views": "bg-desi-saffron-light",
  "Total Orders": "bg-desi-red-light",
  Revenue: "bg-desi-green-light",
};

const Dashboard = () => (
  <PageTransition>
    <SellerLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-display text-4xl text-foreground tracking-wide">DASHBOARD</h1>
          <p className="font-handwritten text-lg text-desi-saffron mt-1 rotate-[-1deg]">welcome back, creator! 📊</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sellerKPIs.map((kpi, idx) => (
            <div
              key={kpi.label}
              className={`${bgMap[kpi.label] || "bg-card"} rounded-xl border-2 border-foreground/10 p-5 hover:translate-y-[-2px] hover:shadow-[4px_6px_0_0_hsl(var(--desi-black))] transition-all ${
                idx % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{kpi.label}</span>
                {iconMap[kpi.label]}
              </div>
              <p className="font-display text-3xl text-foreground tracking-wide">{kpi.value}</p>
              <p className="text-xs text-desi-green font-bold mt-1">{kpi.change}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border-2 border-foreground/10 p-6">
            <h3 className="font-display text-xl text-foreground mb-4 tracking-wide">VIEWS OVER TIME</h3>
            <div className="h-48 bg-desi-cream rounded-lg flex items-center justify-center border-2 border-dashed border-foreground/10 texture-grain">
              <p className="font-handwritten text-lg text-muted-foreground/50">📈 chart coming soon...</p>
            </div>
          </div>
          <div className="bg-card rounded-xl border-2 border-foreground/10 p-6">
            <h3 className="font-display text-xl text-foreground mb-4 tracking-wide">TOP-SELLING</h3>
            <div className="h-48 bg-desi-cream rounded-lg flex items-center justify-center border-2 border-dashed border-foreground/10 texture-grain">
              <p className="font-handwritten text-lg text-muted-foreground/50">🏆 chart coming soon...</p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <span className="stamp-badge text-desi-saffron border-desi-saffron text-sm">
            ✦ KASARAGOD STYLE PERFORMANCE
          </span>
        </div>
      </div>
    </SellerLayout>
  </PageTransition>
);

export default Dashboard;
