"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, MotionValue } from "framer-motion";

interface CoffeeCanvasProps {
    progress: MotionValue<number>;
}

export default function CoffeeCanvas({ progress }: CoffeeCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Map scroll progress (0-1) to frame index (0-39)
    const frameIndex = useTransform(progress, [0, 1], [0, 39]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            // Check if running on server (Next.js SSR)
            if (typeof window === 'undefined') return;

            const loadedImages: HTMLImageElement[] = [];
            const frameCount = 40; // Updated to match provided assets

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                // Assets are named 001.jpg, 002.jpg, etc.
                const filename = `/sequence/${String(i).padStart(3, "0")}.jpg`;
                img.src = filename;
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages().catch((err) => console.error("Failed to load images", err));
    }, []);

    // Draw to canvas
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Get current frame index rounded to integer
            const currentFrame = Math.min(
                119,
                Math.max(0, Math.floor(frameIndex.get()))
            );

            const img = images[currentFrame];

            // Set canvas size to match window or container (responsive)
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Object-fit: contain logic for mobile/desktop as per request
            if (img) {
                // Calculate scale to contain
                const scale = Math.min(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const w = img.width * scale;
                const h = img.height * scale;
                const x = (canvas.width - w) / 2;
                const y = (canvas.height - h) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, w, h);
            }
        };

        const unsubscribe = frameIndex.on("change", () => {
            requestAnimationFrame(render);
        });

        requestAnimationFrame(render);
        // Also handle resize
        window.addEventListener('resize', () => requestAnimationFrame(render));

        return () => {
            unsubscribe();
            window.removeEventListener('resize', () => requestAnimationFrame(render));
        };
    }, [isLoaded, frameIndex, images]);

    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-contain"
            // fallback if JS fails?
            />
            {/* Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-brand-gold bg-brand-dark/90 z-50">
                    <p className="text-xl font-heading tracking-widest animate-pulse">BREWING ASSETS...</p>
                </div>
            )}
        </div>
    );
}
