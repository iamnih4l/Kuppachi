import type { SVGProps } from "react";
import { Shirt, Store, Footprints, Palette, Zap } from "lucide-react";

export interface LogoItem {
  name: string;
  id: number;
  img: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const fitLabsLogos: LogoItem[] = [
  { name: "Malabar Threads", id: 1, img: Shirt },
  { name: "Coastal Casuals", id: 2, img: Store },
  { name: "Step Culture", id: 3, img: Footprints },
  { name: "Artisan Collective", id: 4, img: Palette },
  { name: "FitLabs", id: 5, img: Zap },
];
