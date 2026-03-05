import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Users, Package, Send, Sparkles, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { creators } from "@/data/mockProducts";
import { DoodleStar, DoodleSparkle, FloatingDoodle } from "@/components/DesiDoodles";

const Creators = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    specialty: "",
    instagram: "",
    about: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <div className="relative bg-desi-saffron-light texture-grain border-b-2 border-foreground/10 overflow-hidden">
          <FloatingDoodle className="top-6 right-12 hidden md:block" delay={0.2}>
            <DoodleStar className="w-14 h-14 text-desi-yellow/30" />
          </FloatingDoodle>
          <FloatingDoodle className="bottom-4 left-8 hidden md:block" delay={0.5}>
            <DoodleSparkle className="w-10 h-10 text-primary/20" />
          </FloatingDoodle>

          <div className="container mx-auto px-4 py-14 text-center relative z-10">
            <span className="stamp-badge text-primary border-primary mb-4 inline-block">🎨 CREATORS HUB</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wide mt-4">
              LOCAL <span className="text-primary">CREATORS</span>
            </h1>
            <p className="font-handwritten text-xl text-desi-saffron mt-3 rotate-[-1deg]">
              from kasaragod to the world ✨
            </p>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
              Join Kerala's boldest fashion community. Sell your designs, build your brand, and connect with buyers who love desi culture.
            </p>
          </div>
        </div>

        {/* Featured Creators */}
        <section className="container mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <p className="font-handwritten text-xl text-desi-saffron mb-1">meet the fam 💛</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide">FEATURED CREATORS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {creators.map((creator, i) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  to={`/creator/${creator.id}`}
                  className={`block bg-card rounded-xl border-2 border-foreground/10 p-5 hover:translate-y-[-4px] hover:shadow-[5px_7px_0_0_hsl(var(--desi-black))] transition-all ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-desi-yellow-light border-2 border-desi-yellow/40 flex items-center justify-center text-2xl">
                      {creator.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm text-foreground truncate">{creator.name}</h3>
                        {creator.verified && <CheckCircle className="w-3.5 h-3.5 text-desi-blue shrink-0" />}
                      </div>
                      <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {creator.location}
                      </p>
                    </div>
                  </div>

                  <div className="bg-desi-cream rounded-lg px-3 py-2 mb-3">
                    <p className="text-xs font-bold text-foreground">{creator.specialty}</p>
                  </div>

                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-medium">
                      <Users className="w-3 h-3" /> {creator.followers.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Package className="w-3 h-3" /> {creator.products} items
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="bg-desi-cream texture-grain py-14">
          <div className="container mx-auto px-4 max-w-xl">
            <div className="text-center mb-10">
              <p className="font-handwritten text-xl text-primary mb-1">ready to create? 🔥</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide">
                BECOME A CREATOR
              </h2>
              <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
                Apply to join FitLabs as a seller. List your products, reach buyers across Kerala, and grow your brand.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-card rounded-xl border-2 border-desi-green/30 p-10 text-center desi-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-desi-green-light flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-desi-green" />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-2">APPLICATION SENT! 🎉</h3>
                <p className="font-handwritten text-lg text-desi-saffron rotate-[-1deg] mb-3">
                  welcome to the fam ✨
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll review your application and get back to you within 48 hours. Keep creating! 💛
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-lg border-2 border-foreground/15 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                >
                  SUBMIT ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border-2 border-foreground/10 p-6 md:p-8 desi-shadow space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-foreground tracking-wide mb-1.5 block">FULL NAME *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className="w-full h-11 rounded-lg border-2 border-foreground/10 bg-background px-3 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-foreground tracking-wide mb-1.5 block">EMAIL *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full h-11 rounded-lg border-2 border-foreground/10 bg-background px-3 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-foreground tracking-wide mb-1.5 block">LOCATION *</label>
                    <input
                      required
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      placeholder="Kasaragod, Kerala"
                      className="w-full h-11 rounded-lg border-2 border-foreground/10 bg-background px-3 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-foreground tracking-wide mb-1.5 block">SPECIALTY *</label>
                    <select
                      required
                      value={formData.specialty}
                      onChange={(e) => handleChange("specialty", e.target.value)}
                      className="w-full h-11 rounded-lg border-2 border-foreground/10 bg-background px-3 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="Handloom Fashion">Handloom Fashion</option>
                      <option value="Streetwear">Streetwear</option>
                      <option value="Sustainable Fashion">Sustainable Fashion</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Fusion Wear">Fusion Wear</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground tracking-wide mb-1.5 block">INSTAGRAM HANDLE</label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => handleChange("instagram", e.target.value)}
                    placeholder="@yourhandle"
                    className="w-full h-11 rounded-lg border-2 border-foreground/10 bg-background px-3 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground tracking-wide mb-1.5 block">TELL US ABOUT YOUR WORK *</label>
                  <textarea
                    required
                    value={formData.about}
                    onChange={(e) => handleChange("about", e.target.value)}
                    placeholder="What makes your fashion unique? What's your story?"
                    rows={4}
                    className="w-full rounded-lg border-2 border-foreground/10 bg-background px-3 py-2.5 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm desi-shadow hover:translate-y-[-2px] hover:shadow-[6px_8px_0_0_hsl(var(--desi-black))] transition-all tracking-wide inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> APPLY AS CREATOR
                </button>
                <p className="text-center text-xs text-muted-foreground font-medium">
                  This is a demo — no real data is stored 🎨
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Why Join */}
        <section className="container mx-auto px-4 py-14">
          <h2 className="font-display text-4xl text-foreground text-center mb-10 tracking-wide">WHY JOIN FITLABS?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🚀", title: "REACH BUYERS", desc: "Connect with fashion-loving Gen-Z buyers across Kerala and beyond." },
              { icon: "🤖", title: "AI INSIGHTS", desc: "Get data-driven insights on trending colors, styles, and what sells best." },
              { icon: "💰", title: "GROW YOUR BRAND", desc: "Build your storefront, manage orders, and scale your fashion business." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-xl border-2 border-foreground/10 p-6 text-center hover:translate-y-[-3px] hover:shadow-[4px_6px_0_0_hsl(var(--desi-black))] transition-all"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Creators;