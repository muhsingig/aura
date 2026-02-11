"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="min-h-screen py-32 bg-brand-cream flex items-center justify-center relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[200px]" />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-heading font-bold text-brand-dark mb-8 tracking-tighter"
                >
                    EXPERIENCE<br />THE BREW
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12"
                >
                    {/* Placeholder for Product Shot */}
                    <div className="w-64 h-80 mx-auto bg-brand-dark shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-[#2a2a2a] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center text-brand-gold font-heading tracking-widest border border-brand-gold/20 m-4">
                            AURA BAG
                        </div>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link href="/shop" className="px-12 py-4 bg-brand-gold text-brand-dark font-sans font-bold tracking-widest hover:bg-[#b5952f] transition-colors rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 inline-block">
                        EXPERIENCE THE BREW
                    </Link>
                    <button className="px-12 py-4 border border-brand-dark text-brand-dark font-sans font-bold tracking-widest hover:bg-brand-dark hover:text-brand-cream transition-all rounded-sm">
                        JOIN SUBSCRIPTION
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
