"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, Calendar, ChevronRight } from "lucide-react";
import { blogPosts, categories } from "@/lib/blog-data";
import ElectricBorder from "@/components/ElectricBorder";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts[0];

    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Header */}
            <div className="py-20 px-6 text-center bg-gradient-to-b from-brand-dark to-brand-cream/5">
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tighter">THE DAILY GRIND</h1>
                <p className="text-xl opacity-70 max-w-2xl mx-auto">Exploring the world of specialty coffee, one cup at a time.</p>
            </div>

            <div className="container mx-auto max-w-7xl px-6 pb-20">

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${selectedCategory === cat
                                    ? "bg-brand-gold text-brand-dark"
                                    : "bg-brand-cream/5 hover:bg-brand-cream/10 border border-brand-cream/10"
                                    }`}
                            >
                                {cat.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded-full px-5 py-3 pl-10 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                        />
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-cream/40" />
                    </div>
                </div>

                {/* Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, i) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <ElectricBorder
                                    color="#ffc800"
                                    speed={0.1}
                                    chaos={0.01}
                                    thickness={2}
                                    style={{ borderRadius: 16 }}
                                    className="h-full block"
                                >
                                    <div className="group h-full bg-brand-cream/5 border border-brand-cream/10 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-colors flex flex-col">
                                        <div className="h-56 bg-brand-cream/5 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 z-20 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-brand-gold uppercase tracking-wider">
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col">
                                            <div className="flex items-center gap-4 text-xs font-bold text-brand-cream/40 mb-4 uppercase tracking-widest">
                                                <div className="flex items-center gap-1"><Calendar size={12} /> {post.date}</div>
                                                <div className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</div>
                                            </div>
                                            <Link href={`#`} className="block">
                                                <h2 className="text-2xl font-bold font-heading mb-3 group-hover:text-brand-gold transition-colors leading-tight">{post.title}</h2>
                                            </Link>
                                            <p className="text-brand-cream/60 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                                            <div className="flex items-center justify-between border-t border-brand-cream/10 pt-6 mt-auto">
                                                <div className="text-xs font-bold uppercase tracking-widest opacity-60">By {post.author}</div>
                                                <Link href="#" className="text-brand-gold font-bold text-sm tracking-widest flex items-center hover:gap-2 transition-all">
                                                    READ <ChevronRight size={16} className="ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ElectricBorder>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 opacity-50">
                        <p className="text-xl">No articles found matching your criteria.</p>
                        <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="mt-4 text-brand-gold underline">Clear filters</button>
                    </div>
                )}

            </div>
        </div>
    );
}
