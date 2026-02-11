"use client";

import { useParams } from "next/navigation";
import { brewingMethods } from "@/lib/brewing-data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Clock, TrendingUp, Droplets, CheckCircle2, AlertCircle } from "lucide-react";
import { notFound } from "next/navigation";

export default function BrewingGuideDetail() {
    const params = useParams();
    const method = brewingMethods.find(m => m.slug === params.slug);

    if (!method) {
        return <div className="min-h-screen bg-brand-dark text-brand-cream flex items-center justify-center">Method not found</div>;
    }

    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Header */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/60 z-10" />
                <div className="absolute inset-0 bg-[url('/products/bon_bon_latte.png')] bg-cover bg-center blur-sm opacity-50" />

                <div className="relative z-20 text-center max-w-4xl px-6">
                    <Link href="/learn/brewing" className="inline-flex items-center text-brand-gold font-bold tracking-widest text-sm mb-6 hover:opacity-80 transition-opacity">
                        <ChevronLeft size={16} className="mr-2" /> BACK TO GUIDES
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tighter"
                    >
                        {method.name.toUpperCase()}
                    </motion.h1>
                    <p className="text-xl opacity-80 max-w-2xl mx-auto">{method.description}</p>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Left Sidebar: At a Glance & Equipment */}
                    <div className="lg:col-span-1 space-y-12">
                        {/* Stats */}
                        <div className="bg-brand-cream/5 rounded-xl p-8 border border-brand-cream/10">
                            <h3 className="font-heading font-bold text-xl mb-6 text-brand-gold">AT A GLANCE</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Clock className="text-brand-cream/60" />
                                    <div>
                                        <div className="text-xs font-bold opacity-60 uppercase">Time</div>
                                        <div className="font-bold">{method.time}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <TrendingUp className="text-brand-cream/60" />
                                    <div>
                                        <div className="text-xs font-bold opacity-60 uppercase">Difficulty</div>
                                        <div className="font-bold">{method.difficulty}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Droplets className="text-brand-cream/60" />
                                    <div>
                                        <div className="text-xs font-bold opacity-60 uppercase">Ratio</div>
                                        <div className="font-bold">{method.ratio}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Equipment */}
                        <div>
                            <h3 className="font-heading font-bold text-2xl mb-6">WHAT YOU NEED</h3>
                            <ul className="space-y-4">
                                {method.equipment.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 bg-brand-cream/5 rounded-lg border border-brand-cream/5">
                                        <div className="w-2 h-2 rounded-full bg-brand-gold" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Best For */}
                        <div className="bg-gradient-to-br from-brand-gold/20 to-brand-dark p-8 rounded-xl border border-brand-gold/20">
                            <h3 className="font-heading font-bold text-xl mb-2 text-brand-gold">BEST FOR</h3>
                            <p className="opacity-90 leading-relaxed">{method.bestFor}</p>
                        </div>
                    </div>

                    {/* Main Content: Steps */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-heading font-bold mb-10 pb-4 border-b border-brand-cream/10">THE PROCESS</h2>

                        <div className="space-y-12">
                            {method.steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold text-brand-dark font-heading font-bold text-xl flex items-center justify-center">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 font-heading tracking-wide">{step.title}</h3>
                                        <p className="text-brand-cream/70 leading-relaxed text-lg">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pro Tips */}
                        <div className="mt-16 p-8 bg-brand-cream/5 border-l-4 border-brand-gold rounded-r-xl">
                            <div className="flex items-center gap-3 mb-4 text-brand-gold">
                                <AlertCircle />
                                <h3 className="font-bold font-heading text-xl tracking-widest">PRO TIPS</h3>
                            </div>
                            <ul className="space-y-3">
                                {method.tips.map((tip, i) => (
                                    <li key={i} className="flex gap-3 text-brand-cream/80">
                                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-brand-gold/50" />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Next Steps CTA */}
                        <div className="mt-16 flex flex-col sm:flex-row gap-6">
                            <Link href="/shop" className="flex-1 bg-brand-gold text-brand-dark py-4 rounded-lg font-bold text-center hover:bg-white transition-colors">
                                SHOP COFFEE
                            </Link>
                            <Link href="/learn/brewing" className="flex-1 bg-transparent border border-brand-cream/20 py-4 rounded-lg font-bold text-center hover:bg-brand-cream/10 transition-colors">
                                SEE OTHER GUIDES
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
