import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SellerLayout from "@/components/SellerLayout";
import { sellerProducts } from "@/data/mockSeller";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

const Products = () => (
  <PageTransition>
    <SellerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-black text-foreground">Products</h1>
            <p className="text-muted-foreground mt-1">Manage your Kasargod collection 🛍️</p>
          </div>
          <Link
            to="/seller/upload"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-kasargod-coral text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sellerProducts.map((p) => (
            <div key={p.id} className="bg-card rounded-2xl border border-border overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm text-foreground">{p.name}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      p.status === "Active"
                        ? "bg-kasargod-green-light text-kasargod-green"
                        : "bg-kasargod-peach text-foreground"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground">₹{p.price.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Eye className="w-3 h-3" /> {p.views.toLocaleString()} views
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors inline-flex items-center justify-center gap-1">
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button className="py-2 px-3 rounded-lg border border-border text-destructive hover:bg-destructive/10 transition-colors">
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
