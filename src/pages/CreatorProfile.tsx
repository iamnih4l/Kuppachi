import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    CheckCircle,
    MapPin,
    Users,
    Package,
    Instagram,
    ArrowLeft,
    Star,
    ExternalLink,
    Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { creators } from "@/data/mockProducts";
import { useStore } from "@/store/useStore";
import { DoodleStar, FloatingDoodle } from "@/components/DesiDoodles";

const CreatorProfile = () => {
    const { id } = useParams();
    const creator = creators.find((c) => c.id === id);
    const savedFits = useStore((s) => s.savedFits);

    // In a real app, we'd filter fits by creatorId. 
    // For this demo, we'll show some sample fits for the creator.
    const creatorFits = savedFits.length > 0 ? savedFits : [];

    if (!creator) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <h1 className="font-display text-4xl mb-4">Creator Not Found</h1>
                <Link to="/creators" className="text-primary font-bold flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Hub
                </Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-background">
                <Navbar />

                {/* Profile Header */}
                <div className="relative bg-desi-yellow-light texture-grain border-b-2 border-foreground/10 overflow-hidden">
                    <FloatingDoodle className="top-10 right-20 hidden md:block" delay={0.3}>
                        <DoodleStar className="w-12 h-12 text-desi-yellow/40" />
                    </FloatingDoodle>

                    <div className="container mx-auto px-4 py-16 relative z-10">
                        <Link
                            to="/creators"
                            className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-3 h-3" /> BACK TO CREATORS
                        </Link>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-card border-4 border-foreground/10 flex items-center justify-center text-6xl desi-shadow">
                                {creator.avatar}
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                    <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-wide">
                                        {creator.name.toUpperCase()}
                                    </h1>
                                    {creator.verified && (
                                        <div className="bg-desi-blue/10 p-1 rounded-full border border-desi-blue/20">
                                            <CheckCircle className="w-6 h-6 text-desi-blue" />
                                        </div>
                                    )}
                                </div>

                                <p className="font-handwritten text-2xl text-desi-saffron mb-4">
                                    {creator.specialty} 🎨
                                </p>

                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                                    <span className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground">
                                        <MapPin className="w-4 h-4 text-desi-red" /> {creator.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground">
                                        <Users className="w-4 h-4 text-primary" /> {creator.followers.toLocaleString()} Followers
                                    </span>
                                    <span className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground">
                                        <Package className="w-4 h-4 text-desi-green" /> {creator.products} Products
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm desi-shadow-sm hover:translate-y-[-2px] transition-all">
                                        FOLLOW CREATOR
                                    </button>
                                    <button className="p-2.5 rounded-lg border-2 border-foreground/10 hover:bg-muted transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </button>
                                    <button className="p-2.5 rounded-lg border-2 border-foreground/10 hover:bg-muted transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Creator Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* About Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <section>
                                <h3 className="font-display text-2xl mb-4 tracking-wide">ABOUT THE CREATOR</h3>
                                <div className="bg-card rounded-xl border-2 border-foreground/10 p-6 desi-shadow-sm">
                                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                                        Blending traditional handloom techniques with contemporary Kasaragod street style.
                                        Dedicated to preserving local heritage while pushing the boundaries of desi fashion.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="sticker-badge text-desi-blue border-desi-blue bg-desi-blue-light text-[10px]">HANDLOOM</span>
                                        <span className="sticker-badge text-desi-saffron border-desi-saffron bg-desi-saffron-light text-[10px]">STREETWEAR</span>
                                        <span className="sticker-badge text-desi-green border-desi-green bg-desi-green-light text-[10px]">SUSTAINABLE</span>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-desi-cream rounded-xl border-2 border-foreground/10 p-6 texture-grain">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-desi-saffron" />
                                    <h3 className="font-display text-xl tracking-wide">KASARAGOD ROOTS</h3>
                                </div>
                                <p className="font-handwritten text-lg text-desi-saffron leading-tight">
                                    "The patterns in my work are inspired by the backwaters and the vibrant street life of Kerala."
                                </p>
                            </section>
                        </div>

                        {/* Main Content Area - Recommended Fits */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-display text-2xl tracking-wide">RECOMMENDED FITS ⚡</h3>
                                <span className="text-xs font-bold text-muted-foreground tracking-widest">{creatorFits.length} OUTFITS</span>
                            </div>

                            {creatorFits.length === 0 ? (
                                <div className="text-center py-20 bg-muted/30 rounded-2xl border-2 border-dashed border-foreground/10">
                                    <p className="font-handwritten text-xl text-muted-foreground opacity-50">no fits recommended yet...</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {creatorFits.map((fit) => (
                                        <motion.div
                                            key={fit.id}
                                            whileHover={{ y: -5 }}
                                            className="bg-card rounded-2xl border-2 border-foreground/10 overflow-hidden desi-shadow-sm"
                                        >
                                            <div className="aspect-square bg-desi-cream p-4 grid grid-cols-2 gap-2 relative">
                                                <div className="absolute top-2 right-2 z-10">
                                                    <div className="bg-background/90 backdrop-blur rounded-full p-1.5 border border-foreground/10">
                                                        <Star className="w-4 h-4 text-desi-yellow fill-desi-yellow" />
                                                    </div>
                                                </div>

                                                {/* Displaying images from the fit slots */}
                                                {Object.entries(fit.items).map(([slot, item]) => {
                                                    if (!item) return (
                                                        <div key={slot} className="rounded-xl border-2 border-dashed border-foreground/5 bg-background/50 flex items-center justify-center text-2xl opacity-20">
                                                            {slot === 'top' ? '👕' : slot === 'bottom' ? '👖' : slot === 'shoes' ? '👟' : '⌚'}
                                                        </div>
                                                    );
                                                    return (
                                                        <div key={slot} className="rounded-xl border-2 border-foreground/10 bg-background overflow-hidden relative group">
                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className="p-4 border-t-2 border-foreground/5">
                                                <h4 className="font-bold text-foreground mb-1">{fit.name}</h4>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex gap-0.5">
                                                        {[1, 2, 3, 4, 5].map((i) => (
                                                            <Star key={i} className="w-3 h-3 text-desi-yellow fill-desi-yellow" />
                                                        ))}
                                                    </div>
                                                    <span className="text-[10px] text-muted-foreground font-bold ml-1 uppercase tracking-widest leading-none">
                                                        SIGNATURE LOOK
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* Footer CTA */}
                <section className="bg-desi-black py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="font-display text-4xl text-desi-cream mb-6 tracking-wide">LOVE THIS STYLE?</h2>
                        <p className="font-handwritten text-xl text-desi-yellow mb-8">get the same drip for yourself 🛍️</p>
                        <Link
                            to="/marketplace"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-desi-yellow text-desi-black font-bold text-base desi-shadow transition-transform hover:scale-105 active:scale-95"
                        >
                            SHOP COLLECTION <Package className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default CreatorProfile;
