
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BrandingKit from "./pages/portfolio/BrandingKit";
import ClothingBrand from "./pages/portfolio/ClothingBrand";
import LogoCollection from "./pages/portfolio/LogoCollection";
import YouTubeLayouts from "./pages/portfolio/YouTubeLayouts";
import EcommerceWebsite from "./pages/portfolio/EcommerceWebsite";
import ThreeDMockups from "./pages/portfolio/ThreeDMockups";
import StickerCreations from "./pages/portfolio/StickerCreations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/branding-kit" element={<BrandingKit />} />
          <Route path="/portfolio/clothing-brand" element={<ClothingBrand />} />
          <Route path="/portfolio/logo-collection" element={<LogoCollection />} />
          <Route path="/portfolio/youtube-layouts" element={<YouTubeLayouts />} />
          <Route path="/portfolio/ecommerce-website" element={<EcommerceWebsite />} />
          <Route path="/portfolio/3d-mockups" element={<ThreeDMockups />} />
          <Route path="/portfolio/sticker-creations" element={<StickerCreations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
