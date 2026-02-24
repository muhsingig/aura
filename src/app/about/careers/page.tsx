"use client";

import { motion } from "framer-motion";
import { Users, Heart, Zap, Coffee, ArrowRight, CheckCircle, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import MagicBento from "@/components/MagicBento";

const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
    { icon: Zap, title: "Growth Opportunities", desc: "Professional development budget and clear career pathways." },
    { icon: Coffee, title: "Free Coffee", desc: "Unlimited coffee at work and a free bag to take home every week." },
    { icon: Users, title: "Inclusive Culture", desc: "A supportive environment where everyone's voice is heard and valued." }
];

const jobs = [
    { title: "Senior Barista", location: "Downtown Cafe", type: "Full-Time", dept: "Retail" },
    { title: "Roastery Assistant", location: "HQ Roastery", type: "Full-Time", dept: "Production" },
    { title: "Cafe Manager", location: "Northside", type: "Full-Time", dept: "Retail" },
    { title: "Marketing Intern", location: "Remote / HQ", type: "Part-Time", dept: "Marketing" }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/60 z-10" />
                <div className="absolute inset-0 bg-[url('/products/bon_bon_latte.png')] bg-cover bg-center blur-sm opacity-60" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-6 tracking-tighter">JOIN THE AURA FAMILY</h1>
                        <p className="text-xl md:text-2xl font-sans text-brand-cream/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Be part of something special. Build a career you love in the world of specialty coffee.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Work Here */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Benefits</span>
                        <h2 className="text-4xl font-heading font-bold mt-2">WHY WORK AT AURA?</h2>
                    </div>

                    <MagicBento
                        cards={benefits.map(b => ({
                            title: b.title,
                            description: b.desc,
                            icon: <b.icon size={24} />
                        }))}
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

            {/* Application Process */}
            <section className="py-24 px-6 bg-brand-cream/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Process</span>
                            <h2 className="text-4xl font-heading font-bold mt-2 mb-6">HOW TO JOIN US</h2>
                            <div className="space-y-6">
                                {[
                                    "Browse open positions and find your match.",
                                    "Submit your application online with your resume.",
                                    "Brief phone or video screening with HR.",
                                    "In-person interview and coffee tasting.",
                                    "Welcome to the team!"
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-brand-dark border border-brand-gold text-brand-gold flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                            {i + 1}
                                        </div>
                                        <p className="opacity-80 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative h-[500px] w-full bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/products/team3.jpg"
                                alt="Aura Coffee Team 3"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 px-6 bg-brand-dark">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold">OPEN POSITIONS</h2>
                        <p className="opacity-60 mt-4">Browse our current openings. Filter by department or location.</p>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-brand-cream/5 p-6 rounded-xl border border-brand-cream/10 hover:border-brand-gold/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-brand-cream/10">
                                <div>
                                    <h3 className="text-xl font-bold font-heading group-hover:text-brand-gold transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 mt-2 text-sm opacity-60">
                                        <div className="flex items-center gap-1"><MapPin size={14} /> {job.location}</div>
                                        <div className="flex items-center gap-1"><Clock size={14} /> {job.type}</div>
                                        <div className="flex items-center gap-1"><Users size={14} /> {job.dept}</div>
                                    </div>
                                </div>
                                <button className="px-6 py-2 rounded-full border border-brand-cream/20 font-bold text-sm tracking-widest hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all whitespace-nowrap">
                                    APPLY NOW
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-brand-gold/10 p-8 rounded-2xl border border-brand-gold/20">
                        <h3 className="text-xl font-bold font-heading mb-2">Don't see a fit?</h3>
                        <p className="opacity-70 mb-6">We're always looking for talented people. Send us your resume.</p>
                        <a href="mailto:careers@auracoffee.com" className="inline-flex items-center text-brand-gold font-bold tracking-widest hover:gap-2 transition-all">
                            EMAIL HR <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-brand-cream/5">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Testimonials</span>
                        <h2 className="text-4xl font-heading font-bold mt-2">HEAR FROM OUR TEAM</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah J.", role: "Head Barista", quote: "The training program here is incredible. I've learned more about coffee in 6 months than I did in 3 years elsewhere." },
                            { name: "Michael T.", role: "Roaster", quote: "I love the freedom to experiment with roast profiles. Aura truly values craftsmanship and innovation." },
                            { name: "Elena R.", role: "Store Manager", quote: "The community focus is real. We know our regulars by name, and it feels like a big family." }
                        ].map((t, i) => (
                            <div key={i} className="bg-brand-dark p-8 rounded-xl border border-brand-cream/10">
                                <div className="mb-6 text-brand-gold">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                </div>
                                <p className="text-lg leading-relaxed mb-6 font-light italic">"{t.quote}"</p>
                                <div>
                                    <div className="font-bold font-heading">{t.name}</div>
                                    <div className="text-xs font-bold tracking-widest opacity-60 uppercase">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
