"use client";

import MagicBento, { BentoCardData } from "@/components/MagicBento";
import Prism from "@/components/Prism";
import SpotlightCard from "@/components/SpotlightCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Gem,
    Coffee,
    Gift,
    Star,
    Smartphone,
    CreditCard,
    Calendar,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- Components ---

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <section className={cn("py-20 px-6", className)}>
        <div className="container mx-auto max-w-6xl">
            {children}
        </div>
    </section>
);

const Heading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={cn("text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-brand-cream tracking-tighter", className)}>
        {children}
    </h2>
);

const Card = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={cn("bg-brand-cream/5 border border-brand-cream/10 rounded-lg p-8 backdrop-blur-sm", className)}
    >
        {children}
    </motion.div>
);

// --- Data ---

const tiers = [
    {
        name: "BRONZE",
        range: "0-499 Points",
        color: "text-amber-700",
        borderColor: "border-amber-700/50",
        bgGradient: "from-amber-900/20 to-transparent",
        benefits: [
            "Free birthday reward",
            "1 Point per $1 spent",
            "Early access to new menu items",
            "Monthly \"Free Boost Monday\"",
            "Personalized offers",
            "Points valid for 6 months"
        ]
    },
    {
        name: "SILVER",
        range: "500-2,499 Points",
        color: "text-gray-300",
        borderColor: "border-gray-300/50",
        bgGradient: "from-gray-500/20 to-transparent",
        benefits: [
            "All Bronze benefits",
            "1.2 Points per $1 spent",
            "2.4 Points with reusable cup",
            "Points never expire",
            "Birthday reward valid for 7 days",
            "4+ Double Point Days per year",
            "Priority customer service"
        ]
    },
    {
        name: "GOLD",
        range: "2,500+ Points",
        color: "text-brand-gold",
        borderColor: "border-brand-gold/50",
        bgGradient: "from-brand-gold/20 to-transparent",
        benefits: [
            "All Silver benefits",
            "1.7 Points per $1 spent",
            "3.4 Points with reusable cup",
            "Birthday reward valid for 14 days",
            "8+ Double Point Days per year",
            "Exclusive tasting events",
            "Limited-edition merchandise access",
            "Complimentary size upgrades",
            "Reserve Roastery experiences"
        ]
    }
];

const earnMethods = [
    { icon: <Coffee size={24} />, title: "Purchase", desc: "1-1.7 Points per $1 spent" },
    { icon: <Gem size={24} />, title: "Bring Your Cup", desc: "Double Points on every drink" },
    { icon: <Gift size={24} />, title: "Birthday", desc: "Bonus Points in your birthday month" },
    { icon: <CreditCard size={24} />, title: "Reload", desc: "10 Points for $30+, 25 Points for $50+" },
    { icon: <Star size={24} />, title: "Challenges", desc: "Bonus Points for completing goals" },
    { icon: <Smartphone size={24} />, title: "Referrals", desc: "Earn when friends join" }
];

const rewards = [
    { points: 25, title: "Customize", desc: "Extra shot, syrup, or alt milk", value: "$1" },
    { points: 60, title: "$2 Off", desc: "Save on any item", value: "$2" },
    { points: 100, title: "Brewed & Bakery", desc: "Hot coffee, tea, or snack", value: "$6" },
    { points: 200, title: "Handcrafted", desc: "Latte, Frappe, or Hot Breakfast", value: "$10" },
    { points: 300, title: "Lunch & Packaged", desc: "Sandwich, Box, or Coffee Beans", value: "$16" },
    { points: 400, title: "Merch", desc: "Aura Mugs, Tumblers & More", value: "$20" }
];

const faqs = [
    { q: "How do I join?", a: "Simply download the Aura app or sign up on our website. It's completely free!" },
    { q: "How long do Points last?", a: "For Bronze members, Points expire after 6 months. For Silver and Gold members, Points never expire!" },
    { q: "How do I move up tiers?", a: "Earn Points through purchases and challenges. Once you hit the threshold (500 for Silver, 2500 for Gold), you're instantly upgraded." },
    { q: "Can I share rewards?", a: "Rewards are currently non-transferable and linked to your personal account." }
];

export default function RewardsPage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-brand-dark overflow-hidden">

            {/* 1. Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent z-10" />
                    {/* Placeholder for Hero Video/Image - using a gradient for now if no video available */}
                    <div className="w-full h-full bg-[url('/products/bon_bon_latte.png')] bg-cover bg-center blur-sm opacity-50 scale-110" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-heading font-bold text-brand-cream mb-6 tracking-tighter"
                    >
                        AURA<span className="text-brand-gold"> POINTS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-sans text-brand-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Earn points with every sip. Unlock exclusive perks, free drinks, and premium experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="px-10 py-5 bg-brand-gold text-brand-dark font-sans font-bold text-lg tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            JOIN AURA POINTS
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* 2. How It Works */}
            <Section className="bg-brand-dark">
                <Heading>HOW IT WORKS</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { title: "Join Aura Points", desc: "Download the app and create your free account.", icon: Smartphone },
                        { title: "Earn Points", desc: "Collect Points with every order. Mobile or in-store.", icon: Gem },
                        { title: "Get Rewarded", desc: "Redeem Points for drinks, food, and merch.", icon: Gift }
                    ].map((step, i) => (
                        <Card key={i} delay={i * 0.2} className="flex flex-col items-center border-none bg-transparent">
                            <div className="w-20 h-20 rounded-full bg-brand-cream/5 flex items-center justify-center mb-6 text-brand-gold border border-brand-gold/20">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-cream mb-3 font-heading tracking-wide">{step.title}</h3>
                            <p className="text-brand-cream/60 font-sans">{step.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 3. Membership Tiers - Remove PixelCard Animation */}
            <Section className="bg-brand-cream/5">
                <Heading>CHOOSE YOUR LEVEL</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, i) => (
                        <Card key={i} delay={i * 0.1} className={cn("relative overflow-hidden border-2 h-full", tier.borderColor)}>
                            <div className={cn("absolute inset-0 bg-gradient-to-b opacity-20 pointer-events-none", tier.bgGradient)} />
                            <div className="relative z-10">
                                <h3 className={cn("text-3xl font-heading font-bold mb-1 tracking-tighter", tier.name === 'GOLD' ? 'text-brand-gold' : 'text-brand-cream')}>{tier.name}</h3>
                                <p className={cn("text-sm font-bold tracking-widest mb-6 uppercase opacity-80", tier.color)}>{tier.range}</p>
                                <ul className="space-y-4">
                                    {tier.benefits.map((benefit, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-brand-cream/80">
                                            <Star size={16} className={cn("mt-1 shrink-0", tier.color)} />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 4. Ways to Earn */}
            <Section>
                <Heading>WAYS TO EARN POINTS</Heading>
                {/* Reusing MagicBento/Spotlight for consistency or just cards? User didn't specify special anim here, using previous MagicBento setup */}
                <MagicBento
                    cards={earnMethods.map(m => ({
                        title: m.title,
                        description: m.desc,
                        label: "EARN",
                        icon: m.icon
                    }))}
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </Section>

            {/* 5. Redeem Your Points - Wrapped in SpotlightCard */}
            <Section className="bg-gradient-to-b from-transparent to-brand-dark/50">
                <Heading>REDEEM YOUR POINTS</Heading>
                <MagicBento
                    cards={rewards.map((r) => ({
                        title: r.title,
                        description: r.desc,
                        label: `${r.points} POINTS • VALUE ${r.value}`,
                        icon: <GemIcon count={Math.ceil(r.points / 100)} />
                    }))}
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </Section>

            {/* 6. App Features - Added Prism Background */}
            <Section className="bg-brand-gold text-brand-dark overflow-hidden relative">
                {/* Prism Animation Background */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                    <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
                        <Prism
                            height={3.5}
                            baseWidth={5.5}
                            animationType="rotate"
                            glow={1}
                            noise={0.5}
                            transparent
                            scale={3.6}
                            hueShift={0}
                            colorFrequency={1}
                            hoverStrength={2}
                            inertia={0.05}
                            bloom={1}
                            timeScale={0.5}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="lg:w-1/2 ">
                        <Heading className="text-left text-brand-dark mb-6">THE AURA APP</Heading>
                        <p className="text-xl font-sans mb-8 opacity-80 leading-relaxed">
                            The fastest way to your morning ritual. Skip the line, customize your drink, and track your Points all in one place.
                        </p>
                        <ul className="space-y-4 font-sans font-bold text-lg">
                            {[
                                "Mobile ordering & payment",
                                "Track your Points balance",
                                "Find nearby Aura locations",
                                "Customize favorite drinks",
                                "Access exclusive rewards",
                                "Send digital gift cards"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-dark/10 flex items-center justify-center">
                                        <Smartphone size={16} className="text-brand-dark" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 relative">
                        {/* Mobile App Placeholder UI */}
                        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-brand-dark relative flex flex-col">
                                {/* App Header */}
                                <div className="p-6 pt-12 flex justify-between items-center bg-brand-cream/5">
                                    <span className="font-heading text-brand-gold">AURA</span>
                                    <div className="w-8 h-8 rounded-full bg-brand-gold/20" />
                                </div>
                                {/* App Content Mockup */}
                                <div className="p-6 space-y-4">
                                    <div className="text-brand-cream font-heading text-2xl">Good Morning,<br />User</div>
                                    <div className="bg-gradient-to-r from-brand-gold to-yellow-600 rounded-lg p-4 text-brand-dark shadow-lg">
                                        <div className="text-xs font-bold opacity-70 mb-1">CURRENT BALANCE</div>
                                        <div className="text-3xl font-heading font-bold flex items-center gap-2">
                                            1,250 <Gem size={20} />
                                        </div>
                                        <div className="mt-2 text-xs font-bold border-t border-brand-dark/10 pt-2 flex justify-between">
                                            <span>SILVER TIER</span>
                                            <span>1,250 / 2,500</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-32 bg-brand-cream/5 rounded-lg border border-brand-cream/10 p-3 flex flex-col justify-end">
                                            <Coffee size={20} className="text-brand-gold mb-2" />
                                            <span className="text-xs font-bold text-brand-cream">ORDER</span>
                                        </div>
                                        <div className="h-32 bg-brand-cream/5 rounded-lg border border-brand-cream/10 p-3 flex flex-col justify-end">
                                            <div className="text-brand-gold mb-2 font-heading">SCAN</div>
                                            <span className="text-xs font-bold text-brand-cream">IN STORE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 7. FAQ - Reverted to Accordion (Removed MagicBento) */}
            <Section className="max-w-3xl mx-auto">
                <Heading>FREQUENTLY ASKED</Heading>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-brand-cream/10 rounded-lg overflow-hidden bg-brand-cream/5">
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-brand-cream/5 transition-colors"
                            >
                                <span className="font-bold text-lg text-brand-cream">{faq.q}</span>
                                {faqOpen === i ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="text-brand-cream/50" />}
                            </button>
                            {faqOpen === i && (
                                <div className="p-6 pt-0 text-brand-cream/70 leading-relaxed animate-in slide-in-from-top-2">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* 8. Final CTA - Added Prism Background */}
            <section className="py-32 px-6 text-center bg-brand-gold text-brand-dark relative overflow-hidden">
                {/* Prism Animation Background */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                    <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
                        <Prism
                            height={3.5}
                            baseWidth={5.5}
                            animationType="rotate"
                            glow={1}
                            noise={0.5}
                            transparent
                            scale={3.6}
                            hueShift={0}
                            colorFrequency={1}
                            hoverStrength={2}
                            inertia={0.05}
                            bloom={1}
                            timeScale={0.5}
                        />
                    </div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter">START EARNING TODAY</h2>
                    <p className="text-xl font-sans font-bold mb-10 max-w-xl mx-auto opacity-80">
                        It's free to join and free to earn. Download the app to get started.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-brand-dark text-brand-gold font-bold tracking-widest rounded-lg hover:bg-white hover:text-brand-dark transition-all shadow-xl">
                            DOWNLOAD FOR IOS
                        </button>
                        <button className="px-8 py-4 bg-brand-dark text-brand-gold font-bold tracking-widest rounded-lg hover:bg-white hover:text-brand-dark transition-all shadow-xl">
                            DOWNLOAD FOR ANDROID
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

// Helper for visuals
function GemIcon({ count }: { count: number }) {
    return (
        <div className="flex gap-1 relative z-10">
            {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                <Gem key={i} size={24} className="text-brand-dark/50" fill="currentColor" />
            ))}
            {count > 3 && <span className="text-brand-dark/50 font-bold text-xl ml-1">+</span>}
        </div>
    )
}
