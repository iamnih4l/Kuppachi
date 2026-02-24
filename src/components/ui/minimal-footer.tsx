import { Link } from "react-router-dom";
import {
  Facebook,
  Github,
  Grid2X2,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Zap,
} from "lucide-react";

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company = [
    { title: "About Us", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Brand assets", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
  ];

  const resources = [
    { title: "Blog", href: "#" },
    { title: "Help Center", href: "#" },
    { title: "Contact Support", href: "#" },
    { title: "Community", href: "#" },
    { title: "Security", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="size-4" />, link: "#" },
    { icon: <Github className="size-4" />, link: "#" },
    { icon: <Instagram className="size-4" />, link: "#" },
    { icon: <Linkedin className="size-4" />, link: "#" },
    { icon: <Twitter className="size-4" />, link: "#" },
    { icon: <Youtube className="size-4" />, link: "#" },
  ];

  return (
    <footer className="relative">
      <div className="bg-[radial-gradient(35%_80%_at_30%_0%,hsl(var(--foreground)/.08),transparent)] mx-auto max-w-4xl md:border-x border-foreground/10">
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="w-max opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center rotate-[-3deg] desi-shadow-sm">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl tracking-wider">FITLABS</span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-sans text-sm text-balance">
              Kasaragod fashion meets AI. Mix, match & shop culture-first fashion across Kerala. 🇮🇳
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-accent rounded-md border border-border p-1.5 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs block">Resources</span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-sm duration-200 hover:underline text-foreground"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs block">Company</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-sm duration-200 hover:underline text-foreground"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-muted-foreground text-center font-thin text-sm">
            © FitLabs. Made with 💛 from Kasaragod, Kerala · {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
