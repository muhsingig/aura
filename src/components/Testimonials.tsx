"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        quote: "The cleanest energy I've ever felt. No jitters, just focus.",
        author: "Alex H., Tech Lead",
        rating: 5,
    },
    {
        quote: "Tasting notes are incredibly precise. Stone fruit is undeniable.",
        author: "Sarah J., Sommelier",
        rating: 5,
    },
    {
        quote: "Finally, luxury coffee that actually respects the planet.",
        author: "Marcus T., Architect",
        rating: 5,
    },
    {
        quote: "My morning ritual has never been this elevated.",
        author: "Elena R., Designer",
        rating: 5,
    },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="py-32 bg-brand-dark overflow-hidden relative">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-heading text-brand-cream">
                    THE <span className="text-brand-gold">RITUAL</span> SHARED
                </h2>
            </div>

            <div className="flex w-[200%]">
                <motion.div style={{ x }} className="flex gap-8 px-8 w-full">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[400px] p-8 bg-brand-cream/5 border border-brand-gold/20 backdrop-blur-sm rounded-sm"
                        >
                            <div className="flex text-brand-gold mb-4">
                                {"★".repeat(t.rating)}
                            </div>
                            <p className="text-xl font-heading text-brand-cream mb-6">
                                "{t.quote}"
                            </p>
                            <p className="font-sans text-brand-cream/60 text-sm tracking-widest uppercase">
                                {t.author}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
