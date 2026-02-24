"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import MagicBento from "./MagicBento";

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
                <h2 className="text-4xl md:text-5xl font-heading text-brand-cream tracking-tighter">
                    THE <span className="text-brand-gold">RITUAL</span> SHARED
                </h2>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <MagicBento
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </div>
        </section>
    );
}
