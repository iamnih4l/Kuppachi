import PageTransition from "@/components/PageTransition";
import SellerLayout from "@/components/SellerLayout";
import StyleBadge from "@/components/StyleBadge";
import { sellerKPIs } from "@/data/mockSeller";
import { TrendingUp, Eye, Package, IndianRupee } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Total Products": <Package className="w-5 h-5 text-kasargod-green" />,
  "Total Views": <Eye className="w-5 h-5 text-kasargod-sky" />,
  "Total Orders": <TrendingUp className="w-5 h-5 text-kasargod-coral" />,
  Revenue: <IndianRupee className="w-5 h-5 text-kasargod-lavender" />,
};

const Dashboard = () => (
  <PageTransition>
    <SellerLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-black text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, creator! Here's your overview. 📊</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sellerKPIs.map((kpi) => (
            <div key={kpi.label} className="bg-card rounded-2xl border border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm">{kpi.label}</span>
                {iconMap[kpi.label]}
              </div>
              <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
              <p className="text-xs text-kasargod-green mt-1">{kpi.change}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Views Over Time</h3>
            <div className="h-48 bg-muted rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm">📈 Chart placeholder — connect real data later</p>
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Top-Selling Products</h3>
            <div className="h-48 bg-muted rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground text-sm">🏆 Chart placeholder — connect real data later</p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <StyleBadge
            label="✨ Kasargod Style Performance"
            className="bg-kasargod-green-light text-kasargod-green"
          />
        </div>
      </div>
    </SellerLayout>
  </PageTransition>
);

export default Dashboard;
