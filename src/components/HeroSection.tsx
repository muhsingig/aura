"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion, MotionValue } from "framer-motion";
import CoffeeCanvas from "./CoffeeCanvas";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001,
    });

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-brand-dark">
            <CoffeeCanvas progress={smoothProgress} />

            {/* Overlays */}
            <div className="absolute inset-0 pointer-events-none">
                <OverlaySection
                    progress={smoothProgress}
                    range={[0.0, 0.2]}
                    title="ROOTED IN RITUAL"
                    subtitle="Sourced from the high-altitude cloud forests of Ethiopia"
                />
                <OverlaySection
                    progress={smoothProgress}
                    range={[0.25, 0.5]}
                    title="MICRO-BATCH PRECISION"
                    subtitle="Roasted at 205°C to unlock hidden notes of jasmine and stone fruit."
                />
                <OverlaySection
                    progress={smoothProgress}
                    range={[0.55, 0.8]}
                    title="SENSORY AWAKENING"
                    subtitle="The perfect extraction, every single morning."
                />
                <OverlaySection
                    progress={smoothProgress}
                    range={[0.85, 0.95]}
                    title="AURA COFFEE"
                    subtitle="Your daily performance perfected."
                    isFinal={true}
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/50 text-sm tracking-widest animate-bounce pointer-events-none z-10"
            >
                SCROLL TO BREW
            </motion.div>
        </div>
    );
}

function OverlaySection({
    progress,
    range,
    title,
    subtitle,
    isFinal = false
}: {
    progress: MotionValue<number>;
    range: [number, number];
    title: string;
    subtitle: string;
    isFinal?: boolean;
}) {
    const [start, end] = range;
    // Fade in at start, fade out at end.
    // We want: 0 -> start (0 opacity), start -> start+0.05 (100 opacity), end-0.05 -> end (0 opacity)

    // Create a small buffer for fade in/out
    const fadeInStart = start;
    const fadeInEnd = Math.min(start + 0.05, end);
    const fadeOutStart = Math.max(start, end - 0.05);
    const fadeOutEnd = end;

    const opacity = useTransform(
        progress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [start, end],
        [50, -50]
    );

    return (
        <motion.div
            style={{ opacity, y: isFinal ? 0 : y }} // Don't move the final one off-screen too much if we want it to stay? Or maybe just fade.
            className={`fixed top-1/2 left-0 w-full -translate-y-1/2 flex flex-col items-center justify-center text-center p-4 z-10 ${isFinal ? '' : 'mix-blend-difference'}`}
        >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-brand-cream tracking-tight mb-4">
                {title}
            </h2>
            <p className="text-lg md:text-2xl font-sans text-brand-gold max-w-2xl">
                {subtitle}
            </p>
        </motion.div>
    );
}
