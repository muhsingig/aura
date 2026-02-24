"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PrismProps {
    height?: number;
    baseWidth?: number;
    animationType?: "rotate" | "float" | "static";
    glow?: number;
    noise?: number;
    transparent?: boolean;
    scale?: number;
    hueShift?: number;
    colorFrequency?: number;
    hoverStrength?: number;
    inertia?: number;
    bloom?: number;
    timeScale?: number;
    className?: string;
}

export default function Prism({
    height = 3.5,
    baseWidth = 5.5,
    animationType = "rotate",
    glow = 1,
    noise = 0.5,
    transparent = true,
    scale = 1,
    hueShift = 0,
    colorFrequency = 1,
    hoverStrength = 2,
    inertia = 0.05,
    bloom = 1,
    timeScale = 0.5,
    className
}: PrismProps) {
    return (
        <div className={cn("w-full h-full flex items-center justify-center perspective-1000", className)}>
            <motion.div
                className="relative preserve-3d"
                style={{
                    width: `${baseWidth * 20}px`,
                    height: `${height * 40}px`,
                }}
                animate={animationType === "rotate" ? {
                    rotateY: [0, 360],
                    rotateX: [10, -10, 10]
                } : {}}
                transition={{
                    rotateY: { duration: 10 / timeScale, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 5 / timeScale, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
                }}
            >
                {/* Prism Faces - Simplified Triangular Prism Placeholder */}
                {/* Front Face */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-sm"
                    style={{ transform: `translateZ(${baseWidth * 10}px)` }}
                />
                {/* Back Face */}
                <div
                    className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent border border-white/20 backdrop-blur-sm"
                    style={{ transform: `rotateY(120deg) translateZ(${baseWidth * 10}px)` }}
                />
                {/* Third Face */}
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent border border-white/20 backdrop-blur-sm"
                    style={{ transform: `rotateY(240deg) translateZ(${baseWidth * 10}px)` }}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full scale-150 animate-pulse" />
            </motion.div>
        </div>
    );
}
