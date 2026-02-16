import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SellerLayout from "@/components/SellerLayout";
import { sellerProducts } from "@/data/mockSeller";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

const Products = () => (
  <PageTransition>
    <SellerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-display text-4xl text-foreground tracking-wide">PRODUCTS</h1>
            <p className="font-handwritten text-lg text-desi-saffron mt-1 rotate-[-1deg]">manage your collection 🛍️</p>
          </div>
          <Link
            to="/seller/upload"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-desi-yellow text-desi-black text-sm font-bold desi-shadow-sm hover:translate-y-[-2px] transition-all"
          >
            <Plus className="w-4 h-4" /> ADD PRODUCT
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sellerProducts.map((p) => (
            <div key={p.id} className="bg-card rounded-xl border-2 border-foreground/10 overflow-hidden hover:translate-y-[-3px] hover:shadow-[4px_6px_0_0_hsl(var(--desi-black))] transition-all">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-foreground">{p.name}</h3>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg tracking-wider uppercase border ${
                      p.status === "Active"
                        ? "bg-desi-green-light text-desi-green border-desi-green/30"
                        : "bg-desi-saffron-light text-desi-saffron border-desi-saffron/30"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-base font-bold text-primary font-display tracking-wide">₹{p.price.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 font-medium">
                  <Eye className="w-3 h-3" /> {p.views.toLocaleString()} views
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-desi-yellow-light transition-colors inline-flex items-center justify-center gap-1">
                    <Edit className="w-3.5 h-3.5" /> EDIT
                  </button>
                  <button className="py-2 px-3 rounded-lg border-2 border-foreground/15 text-destructive hover:bg-desi-red-light transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SellerLayout>
  </PageTransition>
);

export default Products;
