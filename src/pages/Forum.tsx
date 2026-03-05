import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { useStore, type ForumPost } from "@/store/useStore";
import { MessageSquare, Heart, Share2, Send, Sparkles } from "lucide-react";
import { DoodleStar, FloatingDoodle } from "@/components/DesiDoodles";
import { useToast } from "@/hooks/use-toast";

const Forum = () => {
    const posts = useStore((s) => s.forumPosts);
    const addForumPost = useStore((s) => s.addForumPost);
    const { toast } = useToast();

    const [newPostContent, setNewPostContent] = useState("");

    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPostContent.trim()) return;

        const newPost: ForumPost = {
            id: `post_${Date.now()}`,
            authorName: "Guest User",
            authorAvatar: "😎",
            content: newPostContent,
            likes: 0,
            comments: 0,
            createdAt: new Date().toISOString(),
        };

        addForumPost(newPost);
        setNewPostContent("");
        toast({ title: "Posted! 🚀", description: "Your thoughts are now on the feed." });
    };

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-background">
                <Navbar />

                {/* Header Section */}
                <div className="relative bg-desi-blue-light texture-grain border-b-2 border-foreground/10 overflow-hidden">
                    <FloatingDoodle className="top-8 right-24 hidden md:block" delay={0.2}>
                        <DoodleStar className="w-10 h-10 text-desi-blue/30" />
                    </FloatingDoodle>
                    <div className="text-center py-10 container mx-auto px-4 relative z-10">
                        <span className="stamp-badge text-desi-blue border-desi-blue mb-4 inline-block">🗣 THE STREETS</span>
                        <h1 className="font-display text-5xl md:text-6xl text-foreground tracking-wide mt-4">
                            COMMUNITY FORUM
                        </h1>
                        <p className="font-handwritten text-xl text-desi-blue mt-2 rotate-[-2deg]">
                            drop your fits, share your thoughts 🌐
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8 max-w-3xl">

                    {/* Create Post Input */}
                    <div className="bg-card rounded-xl border-2 border-foreground/10 p-5 mb-8 desi-shadow-sm">
                        <form onSubmit={handleCreatePost}>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-desi-saffron-light flex items-center justify-center text-2xl border-2 border-foreground/10 shrink-0">
                                    😎
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        value={newPostContent}
                                        onChange={(e) => setNewPostContent(e.target.value)}
                                        placeholder="What's your drip today?..."
                                        rows={3}
                                        className="w-full rounded-xl border-2 border-foreground/10 bg-muted/30 px-4 py-3 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:border-desi-blue focus:bg-background transition-colors resize-none"
                                    />
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="flex gap-2 text-muted-foreground text-sm font-bold">
                                            {/* Placeholder for future features like attaching images or fits directly */}
                                            <button type="button" className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-2">
                                                <Sparkles className="w-4 h-4" /> <span className="hidden sm:inline">Attach Fit</span>
                                            </button>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={!newPostContent.trim()}
                                            className="px-6 py-2.5 rounded-lg bg-desi-blue text-desi-blue-foreground font-bold text-sm desi-shadow-sm hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:hover:translate-y-0"
                                        >
                                            <span className="flex items-center gap-2">
                                                POST <Send className="w-4 h-4" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Feed */}
                    <div className="space-y-6">
                        {posts.length === 0 ? (
                            <div className="text-center py-12 bg-muted/30 rounded-xl border-2 border-dashed border-foreground/10">
                                <h3 className="font-display text-2xl text-muted-foreground mb-2">No posts yet</h3>
                                <p className="font-handwritten text-desi-saffron text-lg">Be the first to drop some heat 🔥</p>
                            </div>
                        ) : (
                            [...posts].reverse().map((post) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-card rounded-xl border-2 border-foreground/10 p-5 desi-shadow-sm transition-transform hover:translate-y-[-2px]"
                                >
                                    {/* Post Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-desi-yellow-light flex items-center justify-center text-xl border-2 border-foreground/10 overflow-hidden">
                                            {post.authorAvatar}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground leading-none">{post.authorName}</h4>
                                            <span className="text-xs text-muted-foreground font-medium">{formatDate(post.createdAt)}</span>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <p className="text-sm font-medium text-foreground/90 whitespace-pre-wrap mb-4">
                                        {post.content}
                                    </p>

                                    {/* Attached Fit Preview */}
                                    {post.attachedFit && (
                                        <div className="mt-4 mb-4 p-4 rounded-xl border-2 border-desi-green/30 bg-desi-green-light/20 relative">
                                            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 rotate-12">
                                                <span className="sticker-badge text-desi-green border-desi-green bg-desi-green-light text-[10px]">
                                                    ATTACHED FIT
                                                </span>
                                            </div>
                                            <h5 className="font-bold text-sm mb-3 text-desi-green-foreground">{post.attachedFit.name}</h5>
                                            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                                                {Object.entries(post.attachedFit.items).map(([slot, item]) => {
                                                    if (!item) return null;
                                                    return (
                                                        <div key={slot} className="w-16 h-16 shrink-0 rounded-lg border-2 border-foreground/10 bg-background overflow-hidden relative group">
                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1">
                                                                <span className="text-[9px] font-bold text-center leading-tight truncate w-full">{item.name}</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Post Actions */}
                                    <div className="flex items-center gap-6 pt-4 border-t-2 border-foreground/5 text-muted-foreground font-bold text-sm">
                                        <button className="flex items-center gap-2 hover:text-desi-red transition-colors">
                                            <Heart className="w-4 h-4" /> {post.likes}
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-desi-blue transition-colors">
                                            <MessageSquare className="w-4 h-4" /> {post.comments}
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Forum;
