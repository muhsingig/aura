"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Coffee, Users, Lightbulb, Heart, MapPin, ArrowRight } from "lucide-react";

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/40 z-10" />
                <div className="absolute inset-0 bg-[url('/products/bon_bon_latte.png')] bg-cover bg-center blur-sm opacity-60 scale-105" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-6 tracking-tighter">OUR STORY</h1>
                        <p className="text-2xl font-sans text-brand-cream/90 max-w-2xl mx-auto leading-relaxed font-light">
                            From 2010 to today: See the story of our growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8"
                    >
                        "We are committed to serving you fresh, delicious coffee that has been sourced ethically and sustainably."
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl opacity-70 leading-relaxed"
                    >
                        We believe that our passion for perfecting brews joins our eye for detail to create an absolutely delightful cup of coffee every time.
                    </motion.p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-6 bg-brand-cream/5">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Our Pillars</span>
                        <h2 className="text-4xl font-heading font-bold mt-2">WHAT WE STAND FOR</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "HAPPINESS & DELIGHT",
                                desc: "Every cup of coffee is uniquely delightful and personal. We love bringing that moment of delight to our customers."
                            },
                            {
                                icon: Users,
                                title: "COMMUNITY",
                                desc: "Our community of customers is our family. And we strive to serve our family with passion and care everyday."
                            },
                            {
                                icon: Lightbulb,
                                title: "INNOVATION",
                                desc: "We believe in constant innovation to design coffees for both the experienced and novice palate."
                            },
                            {
                                icon: Coffee,
                                title: "INCLUSIVITY",
                                desc: "We believe our coffees are for everyone. Everyone's welcome at Aura Coffee."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-brand-dark border border-brand-cream/10 p-8 rounded-xl hover:border-brand-gold/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                                <p className="text-brand-cream/60 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Promise */}
            <section className="py-32 px-6 bg-[url('/products/bon_bon_latte.png')] bg-fixed bg-cover bg-center relative">
                <div className="absolute inset-0 bg-brand-dark/80" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="w-16 h-1 bg-brand-gold mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8 text-brand-cream">
                        "Whether you want to try a coffee that surprises you, to find your favourite blend or to grab a quick cuppa, we'll make that happen every day, every time."
                    </h2>
                    <div className="w-16 h-1 bg-brand-gold mx-auto mt-8" />
                </div>
            </section>

            {/* Image Gallery */}
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-[400px] md:h-[600px] bg-brand-cream/5 relative group overflow-hidden">
                    <Image src="/products/dripper.svg" alt="Brewing" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end p-10">
                        <h3 className="text-2xl font-heading font-bold">MASTERFUL BREWING</h3>
                    </div>
                </div>
                <div className="h-[400px] md:h-[600px] bg-brand-cream/5 relative group overflow-hidden">
                    <Image src="/products/ethiopia.svg" alt="Roasting" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end p-10">
                        <h3 className="text-2xl font-heading font-bold">ETHICAL SOURCING</h3>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">The People</span>
                            <h2 className="text-5xl font-heading font-bold mt-2 mb-6">OUR TEAM</h2>
                            <p className="text-xl opacity-70 leading-relaxed mb-8">
                                We work in harmony to bring the most delicious, fresh and high-quality coffee to your cup. Our baristas, roasters and servers are always excited to ensure that you have the most wonderful experience at Aura Coffee.
                            </p>
                            <Link href="/about/careers" className="inline-flex items-center text-brand-gold font-bold tracking-widest hover:gap-2 transition-all">
                                JOIN THE FAMILY <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="bg-brand-cream/5 rounded-2xl h-64 w-full animate-pulse" /> {/* Placeholder for team photo */}
                            <div className="bg-brand-cream/5 rounded-2xl h-64 w-full mt-8 animate-pulse" /> {/* Placeholder for team photo */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Cafes */}
            <section className="py-24 px-6 bg-brand-cream/5">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-heading font-bold mb-4">OUR CAFES</h2>
                        <p className="text-xl opacity-70 max-w-2xl mx-auto">12+ cafes in 5 cities. Spaces buzzing with big ideas, bright conversations and the best coffee.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-brand-dark rounded-xl overflow-hidden shadow-xl">
                                <div className="h-64 bg-brand-cream/10 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-cream/20 font-bold">CAFE INTERIOR {i}</div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold font-heading mb-2">AURA DOWNTOWN</h3>
                                    <p className="text-sm opacity-60 mb-4">123 Coffee Lane, City Center</p>
                                    <p className="text-xs font-bold tracking-widest text-brand-gold uppercase">OPEN 7AM - 8PM</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform">
                            VISIT OUR CAFES
                        </button>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                    "We want our coffee to be a<br />part of your day, every day."
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/shop" className="bg-brand-cream text-brand-dark px-10 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-colors">
                        SHOP COFFEE
                    </Link>
                </div>
            </section>
        </div>
    );
}
