"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { brewingMethods } from "@/lib/brewing-data";
import { Clock, TrendingUp, ChevronRight } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";

export default function BrewingGuidesPage() {
    return (
        <div className="min-h-screen bg-brand-dark">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent z-10" />
                    {/* Placeholder Background */}
                    <div className="w-full h-full bg-[url('/products/bon_bon_latte.png')] bg-cover bg-center blur-sm opacity-60 scale-105" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-brand-cream mb-6 tracking-tighter"
                    >
                        MASTER THE <span className="text-brand-gold">BREW</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-sans text-brand-cream/80 max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        Discover the art of extraction. From French Press to Pour Over, find the perfect method for your favorite beans.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* CREDIT Component inspired by @BalintFerenczy on X https://codepen.io/BalintFerenczy/pen/KwdoyEN */}
                        <ElectricBorder
                            color="#c59e49"
                            speed={0.1}
                            chaos={0.01}
                            thickness={2}
                            style={{ borderRadius: 16 }}
                            className="px-8 py-4 bg-brand-dark/50 backdrop-blur-md"
                        >
                            <div>
                                <p style={{ margin: '6px 0 0', opacity: 0.8 }} className="font-bold tracking-wider text-brand-gold uppercase text-sm">
                                    A glowing, animated border wrapper.
                                </p>
                            </div>
                        </ElectricBorder>
                    </motion.div>
                </div>
            </section>

            {/* Brewing Grid */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {brewingMethods.map((method, index) => (
                            <motion.div
                                key={method.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ElectricBorder
                                    color="#e1b823"
                                    speed={0.1}
                                    chaos={0.01}
                                    thickness={2}
                                    style={{ borderRadius: 16 }}
                                    className="h-full block"
                                >
                                    <Link
                                        href={`/learn/brewing/${method.slug}`}
                                        className="group block h-full bg-brand-cream/5 border border-brand-cream/10 rounded-xl overflow-hidden hover:bg-brand-cream/10 transition-colors duration-300 relative"
                                    >
                                        <div className="p-8 flex flex-col h-full">
                                            <div className={`w-14 h-14 rounded-full bg-brand-dark border border-brand-cream/10 flex items-center justify-center mb-6 ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                                                <method.icon size={28} />
                                            </div>

                                            <h3 className="text-2xl font-heading font-bold text-brand-cream mb-2">{method.name}</h3>
                                            <p className="text-sm text-brand-cream/60 mb-6 font-sans leading-relaxed flex-grow">
                                                {method.tagline}
                                            </p>

                                            <div className="space-y-3 mt-auto">
                                                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-cream/40">
                                                    <TrendingUp size={14} />
                                                    <span>{method.difficulty}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-cream/40">
                                                    <Clock size={14} />
                                                    <span>{method.time}</span>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex items-center text-brand-gold font-bold text-sm tracking-widest group-hover:gap-2 transition-all">
                                                LEARN HOW <ChevronRight size={16} className="ml-1" />
                                            </div>
                                        </div>

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </Link>
                                </ElectricBorder>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
