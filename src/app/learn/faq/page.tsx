"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, MessageCircle, HelpCircle } from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";

interface FAQItem {
    q: string;
    a: string;
    category: string;
}

const faqs: FAQItem[] = [
    // About Our Coffee
    { q: "What makes Aura coffee special?", a: "We source only the top 1% of Arabica beans, focusing on micro-lots with unique flavor profiles. Our roasting process is tailored to highlight the inherent characteristics of each bean.", category: "About" },
    { q: "Where do you source your beans?", a: "We work directly with farmers in Ethiopia, Colombia, Brazil, and Sumatra. This direct trade model ensuring fair wages and sustainable practices.", category: "About" },
    { q: "What is single-origin coffee?", a: "Single-origin coffee comes from a specific region, coop, or even a single farm. It allows you to taste the unique terroir of that location.", category: "About" },

    // Ordering & Shipping
    { q: "What are your shipping options?", a: "We offer standard (3-5 days) and expedited (2-day) shipping. Orders over $50 ship free within the US.", category: "Ordering" },
    { q: "Do you ship internationally?", a: "Currently, we ship to the US, Canada, and select European countries. Check checkout for availability.", category: "Ordering" },
    { q: "How is coffee packaged?", a: "Our coffee is packed in nitrogen-flushed bags with one-way valves to lock in freshness for weeks.", category: "Ordering" },

    // Brewing
    { q: "How should I store my coffee beans?", a: "Store them in an airtight container in a cool, dark place. Avoid the fridge or freezer as moisture can damage the beans.", category: "Brewing" },
    { q: "What grind size should I use?", a: "It depends on your method! Coarse for French Press, Medium for Drip/Pour Over, and Fine for Espresso.", category: "Brewing" },
    { q: "How long do beans stay fresh?", a: "For peak flavor, use within 4-6 weeks of the roast date. They are safe to drink long after, but flavor notes will fade.", category: "Brewing" },

    // Subscriptions
    { q: "How does the Aura Rewards program work?", a: "Earn Gems for every dollar spent. Redeem them for free drinks, food, and merch. Join via our app!", category: "Subscriptions" },
    { q: "Can I pause my subscription?", a: "Yes, you can pause, skip a delivery, or cancel anytime from your account dashboard.", category: "Subscriptions" }
];

const categories = ["All", "About", "Ordering", "Brewing", "Subscriptions"];

export default function FAQPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredFaqs = faqs.filter(item => {
        const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.a.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Header */}
            <div className="py-20 px-6 text-center">
                <ScrollFloat
                    containerClassName="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tighter"
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                >
                    HOW CAN WE HELP?
                </ScrollFloat>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-brand-cream/10 border border-brand-cream/20 rounded-full px-6 py-4 pl-12 text-lg focus:outline-none focus:border-brand-gold focus:bg-brand-cream/15 transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-cream/50" />
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-6 pb-20">

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-all ${selectedCategory === cat
                                ? "bg-brand-gold text-brand-dark"
                                : "bg-brand-cream/5 hover:bg-brand-cream/10 text-brand-cream/60"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* FAQ Groups */}
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-brand-cream/5 border border-brand-cream/10 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-fullflex items-center justify-between w-full p-6 text-left hover:bg-brand-cream/5 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <HelpCircle size={20} className="text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="font-bold text-lg">{faq.q}</span>
                                    </div>
                                    {openIndex === i ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="opacity-50" />}
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 pl-16 text-brand-cream/70 leading-relaxed border-t border-brand-cream/5">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-10 opacity-50">
                            No results found. Try a different search term.
                        </div>
                    )}
                </div>

                {/* Contact CTA */}
                <div className="mt-20 p-10 bg-brand-gold text-brand-dark rounded-2xl text-center">
                    <MessageCircle size={48} className="mx-auto mb-4 opacity-80" />
                    <h2 className="text-3xl font-heading font-bold mb-4">STILL HAVE QUESTIONS?</h2>
                    <p className="font-bold opacity-80 mb-8 max-w-md mx-auto">Our coffee experts are here to help you find your perfect brew.</p>
                    <button className="bg-brand-dark text-brand-gold px-8 py-4 rounded-lg font-bold tracking-widest hover:scale-105 transition-transform">
                        CONTACT SUPPORT
                    </button>
                </div>

            </div>
        </div>
    );
}
