import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import FitLabs from "./pages/FitLabs";
import AiUpload from "./pages/AiUpload";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Dashboard from "./pages/seller/Dashboard";
import Products from "./pages/seller/Products";
import Upload from "./pages/seller/Upload";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/fitlabs" element={<FitLabs />} />
        <Route path="/ai" element={<AiUpload />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller/dashboard" element={<Dashboard />} />
        <Route path="/seller/products" element={<Products />} />
        <Route path="/seller/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
