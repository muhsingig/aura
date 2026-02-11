"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const pressReleases = [
    {
        date: "Oct 15, 2025",
        title: "Aura Coffee Expands to 5 New Cities",
        excerpt: "We are thrilled to announce our expansion into the Midwest market, bringing our signature roasts to Chicago, Detroit, and Minneapolis.",
        category: "Expansion"
    },
    {
        date: "Sep 22, 2025",
        title: "Introducing 'The Reserve Collection': Ultra-Premium Micro-Lots",
        excerpt: "A new limited-edition series featuring rare, high-scoring beans from exclusive partner farms.",
        category: "Product Launch"
    },
    {
        date: "Aug 10, 2025",
        title: "Aura Coffee Named 'Best Roaster 2025' by Coffee Monthly",
        excerpt: "We are honored to receive this prestigious award recognizing our commitment to quality and sustainability.",
        category: "Award"
    },
    {
        date: "Jul 05, 2025",
        title: "Sustainability Report 2024: Achieving Carbon Neutrality",
        excerpt: "Our annual report details how we've reduced our carbon footprint by 40% and offset the ensuring 100% neutrality.",
        category: "Sustainability"
    }
];

const mediaCoverage = [
    { publication: "The Daily Grind", title: "Why Aura is the Future of Specialty Coffee", date: "Sep 2025" },
    { publication: "Eater", title: "The Best Coffee Shops opening this Fall", date: "Aug 2025" },
    { publication: "Business Insider", title: "How Aura Coffee disrupted the Direct-to-Consumer Market", date: "Jul 2025" }
];

export default function NewsroomPage() {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/70 z-10" />
                <div className="absolute inset-0 bg-[url('/products/ethiopia.svg')] bg-cover bg-center blur-sm opacity-50" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-6 tracking-tighter">NEWSROOM</h1>
                        <p className="text-xl md:text-2xl font-sans text-brand-cream/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Latest news, press releases, and updates from Aura Coffee.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Story */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-brand-cream/5 rounded-2xl overflow-hidden border border-brand-cream/10 hover:border-brand-gold/50 transition-colors flex flex-col md:flex-row">
                        <div className="md:w-1/2 h-64 md:h-auto bg-brand-cream/10 relative">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-brand-cream/20 font-bold text-xl">
                                FEATURED IMAGE
                            </div>
                        </div>
                        <div className="md:w-1/2 p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-brand-gold mb-4 text-xs font-bold tracking-widest uppercase">
                                <span className="bg-brand-gold/10 px-3 py-1 rounded-full">New Release</span>
                                <span>Oct 01, 2025</span>
                            </div>
                            <h2 className="text-3xl font-heading font-bold mb-4">AURA LAUNCHES MOBILE ORDERING APP</h2>
                            <p className="text-brand-cream/70 leading-relaxed mb-8">
                                Experience skip-the-line convenience and earn rewards with every sip. Our new app is designed to make your daily coffee ritual smoother than ever.
                            </p>
                            <Link href="#" className="inline-flex items-center text-brand-cream font-bold tracking-widest hover:text-brand-gold transition-colors">
                                READ FULL STORY <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-24 px-6 bg-brand-cream/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl font-heading font-bold mb-12">LATEST NEWS</h2>
                    <div className="space-y-8">
                        {pressReleases.map((news, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b border-brand-cream/10 pb-8 last:border-0"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                                    <div className="text-sm text-brand-gold font-bold tracking-widest flex items-center gap-2">
                                        <Calendar size={14} /> {news.date}
                                        <span className="text-brand-cream/20">|</span>
                                        <Tag size={14} /> {news.category}
                                    </div>
                                    <Link href="#" className="text-brand-cream/40 text-sm hover:text-brand-gold transition-colors flex items-center gap-1">
                                        Read More <ArrowRight size={14} />
                                    </Link>
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-3 hover:text-brand-gold transition-colors cursor-pointer">{news.title}</h3>
                                <p className="text-brand-cream/60 leading-relaxed">{news.excerpt}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Resources */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Press Kit */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold mb-8">PRESS RESOURCES</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Brand Logos (Vector)", "Executive Headshots", "Product Imagery", "Brand Guidelines"
                                ].map((item, i) => (
                                    <div key={i} className="bg-brand-cream/5 p-6 rounded-xl border border-brand-cream/10 flex items-center justify-between group hover:bg-brand-cream/10 transition-colors cursor-pointer">
                                        <span className="font-bold">{item}</span>
                                        <Download size={20} className="text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-brand-gold/10 rounded-xl border border-brand-gold/20">
                                <h4 className="font-bold mb-2 text-brand-gold">Media Inquiries</h4>
                                <p className="text-sm opacity-70 mb-4">For interview requests or additional information, please contact our PR team.</p>
                                <a href="mailto:press@auracoffee.com" className="text-sm font-bold border-b border-brand-gold pb-1 hover:opacity-80">press@auracoffee.com</a>
                            </div>
                        </div>

                        {/* In The News */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold mb-8">AURA IN THE NEWS</h2>
                            <div className="space-y-4">
                                {mediaCoverage.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-cream/5 transition-colors group cursor-pointer">
                                        <div className="w-12 h-12 bg-brand-cream/10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs opacity-50">LOGO</div>
                                        <div>
                                            <h4 className="font-bold text-lg leading-tight mb-1 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                                            <div className="text-xs opacity-50 flex items-center gap-2">
                                                {item.publication} • {item.date} <ExternalLink size={10} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
