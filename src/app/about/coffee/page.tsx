"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Coffee, Sprout, Truck, Globe, ThermometerSun, Leaf, Info, Filter, ArrowRight } from "lucide-react";
import MagicBento from "@/components/MagicBento";

export default function OurCoffeePage() {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/50 z-10" />
                <div className="absolute inset-0 bg-[url('/products/ethiopia.svg')] bg-cover bg-center blur-sm opacity-50 scale-105" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-6 tracking-tighter">OUR COFFEE</h1>
                        <p className="text-xl md:text-2xl font-sans text-brand-cream/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Introducing a premium 100% Arabica coffee brand that tastes delicious | Freshly roasted | Delivered at your doorstep
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quality Promise - 3 Pillars */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-7xl">
                    <MagicBento
                        cards={[
                            {
                                title: "ETHICALLY SOURCED",
                                description: "We work closely with producers to ensure that the beans are of the highest quality, grown sustainably and traded responsibly from farms in Ethiopia, Colombia, and Guatemala.",
                                label: "Sourcing",
                                icon: <Sprout size={32} className="text-brand-gold" />
                            },
                            {
                                title: "FRESHLY ROASTED",
                                description: "We specially roast your coffee in our in-house, state-of-the-art coffee roaster with specific profiles to ensure optimal flavour notes and potent aromatics.",
                                label: "Roasting",
                                icon: <ThermometerSun size={32} className="text-brand-gold" />
                            },
                            {
                                title: "SAFELY DELIVERED",
                                description: "We do our best to ensure that your coffee reaches you properly packaged, completely fresh and well in time. Freshness sealed for 6 weeks.",
                                label: "Delivery",
                                icon: <Truck size={32} className="text-brand-gold" />
                            }
                        ]}
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

            {/* Sourcing Story */}
            <section className="py-24 px-6 bg-brand-cream/5">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Sourcing</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">FROM FARM TO CUP</h2>
                        <p className="text-lg opacity-80 leading-relaxed mb-6">
                            Located in the lush greenery of <strong>Sidama, Ethiopia</strong> and the rigorous altitudes of <strong>Nariño, Colombia</strong>, our partner estates have been cultivating standard-setting coffee for generations.
                        </p>
                        <p className="text-lg opacity-80 leading-relaxed">
                            Aside from a wide range of flora and fauna, these estates are home to shade-grown coffee, planted in rich soil, manually picked and sorted, ensuring only the finest flavours and aromas reach your cup.
                        </p>
                    </div>
                    <div className="flex-1 relative h-[500px] w-full bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/products/origin-map.jpg"
                            alt="Coffee Farm Origin Map"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Roasting Process */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="flex-1">
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Process</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">THE ART & SCIENCE OF ROASTING</h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Selection</h4>
                                    <p className="opacity-70 text-sm">Rigorous green coffee bean selection and defect inspection.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Profiling</h4>
                                    <p className="opacity-70 text-sm">Developing custom heat curves to unlock the unique potential of each bean.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Small-Batch Roasting</h4>
                                    <p className="opacity-70 text-sm">Hand-roasted in small lots for absolute consistency and quality control.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[500px] w-full bg-brand-cream/5 rounded-2xl overflow-hidden shadow-2xl group">
                        <Image src="/products/process.jpg" alt="Roasting Process" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </section>

            {/* Transparency & Sustainability */}
            <section className="py-20 px-6 bg-brand-gold text-brand-dark">
                <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-brand-dark/10 p-10 rounded-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4 text-brand-dark">
                            <Info size={28} />
                            <h2 className="text-3xl font-heading font-bold">KNOW YOUR COFFEE</h2>
                        </div>
                        <p className="font-bold text-lg mb-6 opacity-80">We believe you deserve to know exactly where your coffee comes from and how it's made.</p>
                        <p className="opacity-70">
                            That's why every bag of Aura Coffee includes detailed information on the farm name, region, altitude, processing method, roast date, and tasting notes.
                        </p>
                    </div>
                    <div className="bg-brand-dark/10 p-10 rounded-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4 text-brand-dark">
                            <Leaf size={28} />
                            <h2 className="text-3xl font-heading font-bold">COFFEE THAT CARES</h2>
                        </div>
                        <p className="font-bold text-lg mb-6 opacity-80">Every sip supports sustainable farming and fair wages.</p>
                        <ul className="space-y-2 opacity-70">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-dark rounded-full" /> Fair pricing above market rates for farmers</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-dark rounded-full" /> Support for environmentally friendly processing</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-dark rounded-full" /> Compostable packaging materials</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-7xl text-center">
                    <h2 className="text-4xl font-heading font-bold mb-12">UNDERSTANDING COFFEE</h2>
                    <MagicBento
                        cards={[
                            { title: "Arabica vs. Robusta", description: "Why we only use 100% Arabica beans for superior flavor and complexity.", label: "Beans" },
                            { title: "Processing Methods", description: "How Washed, Natural, and Honey processes change the taste profile.", label: "Process" },
                            { title: "Altitude & Terroir", description: "Why high-altitude coffee grows slower and tastes sweeter.", label: "Environment" },
                            { title: "Roast Levels", description: "Understanding the spectrum from bright Light roasts to bold Dark roasts.", label: "Roast" }
                        ]}
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
                    <div className="mt-12">
                        <Link href="/learn/brewing" className="inline-flex items-center text-brand-cream font-bold tracking-widest hover:text-brand-gold transition-colors">
                            LEARN MORE IN OUR BREWING GUIDES <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Showcase CTA */}
            <section className="py-24 px-6 bg-brand-cream/5 text-center">
                <h2 className="text-4xl font-heading font-bold mb-8">EXPLORE OUR COFFEES</h2>
                <div className="mb-12">
                    <MagicBento
                        cards={[
                            { title: "Single-Origin", description: "Distinct flavor profiles from single estates.", label: "Origin" },
                            { title: "Special Blends", description: "Expertly crafted combinations for perfect balance.", label: "Blend" },
                            { title: "Decaf", description: "All the flavor, none of the caffeine.", label: "Decaf" },
                            { title: "Cold Brew Bags", description: "Smooth, bold cold brew made easy at home.", label: "Brew" }
                        ]}
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
                <Link href="/shop" className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-colors">
                    SHOP ALL COFFEE
                </Link>
            </section>
        </div>
    );
}
