"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, RefreshCcw, Check, Coffee } from "lucide-react";

// Questions
const questions = [
    {
        id: 1,
        text: "How do you typically drink your coffee?",
        options: [
            { label: "Black", value: "light" },
            { label: "With milk/cream", value: "medium" },
            { label: "With sugar", value: "medium" },
            { label: "Espresso-based (Latté/Cappuccino)", value: "dark" }
        ]
    },
    {
        id: 2,
        text: "What flavor profiles do you enjoy?",
        options: [
            { label: "Fruity & Bright (Berries, Citrus)", value: "light" },
            { label: "Chocolatey & Nutty", value: "medium" },
            { label: "Bold & Intense (Smoky, Earthy)", value: "dark" },
            { label: "Smooth & Balanced", value: "medium" }
        ]
    },
    {
        id: 3,
        text: "How do you brew at home?",
        options: [
            { label: "Drip Machine", value: "medium" },
            { label: "Pour Over (V60/Chemex)", value: "light" },
            { label: "French Press", value: "dark" },
            { label: "Espresso Machine", value: "dark" },
            { label: "I don't brew at home", value: "medium" }
        ]
    },
    {
        id: 4,
        text: "What's your coffee experience level?",
        options: [
            { label: "Just starting", value: "medium" },
            { label: "Casual drinker", value: "medium" },
            { label: "Coffee Enthusiast", value: "light" },
            { label: "Home Barista / Geek", value: "light" }
        ]
    }
];

// Product Recommendations (Mock Data)
const recommendations = {
    light: [
        { name: "Ethiopia Yirgacheffe", price: "$22.00", image: "/products/ethiopia.svg", desc: "Floral, tea-like body with notes of jasmine and lemon." },
        { name: "Kenya AA", price: "$24.00", image: "/products/kenya.svg", desc: "Bright acidity with blackcurrant and grapefruit notes." }
    ],
    medium: [
        { name: "Colombia Huila", price: "$19.00", image: "/products/colombia.svg", desc: "Balanced sweetness with caramel and nut flavors." },
        { name: "House Blend", price: "$18.00", image: "/products/blend.svg", desc: "Our signature smooth roast, perfect for any brew method." }
    ],
    dark: [
        { name: "Sumatra Mandheling", price: "$20.00", image: "/products/drip.svg", desc: "Full body with earthy, spicy, and chocolate notes." }, // Using placeholder image
        { name: "Espresso Roast", price: "$20.00", image: "/products/dripper.svg", desc: "Intense and bold, designed to cut through milk." } // Using placeholder image
    ]
};

export default function CoffeeQuiz() {
    const [started, setStarted] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (value: string) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (currentQ < questions.length - 1) {
            setTimeout(() => setCurrentQ(currentQ + 1), 250);
        } else {
            setTimeout(() => setFinished(true), 250);
        }
    };

    const getResult = () => {
        // Simple logic: majority wins
        const counts = { light: 0, medium: 0, dark: 0 };
        answers.forEach(a => counts[a as keyof typeof counts]++);

        if (counts.light > counts.medium && counts.light > counts.dark) return "light";
        if (counts.dark > counts.light && counts.dark > counts.medium) return "dark";
        return "medium"; // Default to medium/balanced
    };

    const resetQuiz = () => {
        setStarted(false);
        setCurrentQ(0);
        setAnswers([]);
        setFinished(false);
    };

    // --- RENDER ---

    // 1. Start Screen
    if (!started) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center p-6 text-center">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-brand-cream/5 border border-brand-cream/10 rounded-2xl p-12 backdrop-blur-md"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-gold mb-6 tracking-tighter">FIND YOUR PERFECT MATCH</h1>
                        <p className="text-xl text-brand-cream/80 mb-10 font-sans leading-relaxed">
                            Not sure which beans to buy? Take our 2-minute quiz to discover the coffee that matches your taste profile.
                        </p>
                        <button
                            onClick={() => setStarted(true)}
                            className="bg-brand-gold text-brand-dark px-10 py-5 rounded-full font-bold text-lg tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                        >
                            START QUIZ
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 3. Results Screen
    if (finished) {
        const resultProfile = getResult();
        const recs = recommendations[resultProfile as keyof typeof recommendations];
        const profileTitles = {
            light: "THE PURIST",
            medium: "THE BALANCED BREWER",
            dark: "THE BOLD SOUL"
        };
        const profileDescs = {
            light: "You enjoy the delicate, complex flavors of coffee. You prefer brightness, fruit notes, and clarity over bitterness.",
            medium: "You appreciate a smooth, classic cup. Not too bright, not too bitter—just sweet, nutty perfection.",
            dark: "You love a coffee with a kick. Rich, intense, and full-bodied flavors are your jam, especially with milk."
        };

        return (
            <div className="min-h-screen bg-brand-dark py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-brand-gold font-bold tracking-widest mb-4">YOUR COFFEE PROFILE</h2>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-cream mb-6">{profileTitles[resultProfile as keyof typeof profileTitles]}</h1>
                        <p className="text-xl text-brand-cream/80 max-w-2xl mx-auto mb-16">{profileDescs[resultProfile as keyof typeof profileDescs]}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {recs.map((product, i) => (
                                <div key={i} className="bg-brand-cream/5 border border-brand-cream/10 rounded-xl overflow-hidden hover:bg-brand-cream/10 transition-colors group text-left flex flex-col">
                                    <div className="h-64 bg-brand-cream/5 flex items-center justify-center p-8 relative">
                                        <Image src={product.image} alt={product.name} width={200} height={200} className="object-contain group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-heading font-bold text-brand-cream mb-2">{product.name}</h3>
                                        <p className="text-brand-cream/60 mb-6 flex-grow">{product.desc}</p>
                                        <div className="flex justify-between items-center mt-auto">
                                            <span className="text-brand-gold font-bold text-xl">{product.price}</span>
                                            <Link href="/shop" className="bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors">
                                                SHOP NOW
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-brand-cream text-brand-dark rounded-xl p-10 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-grow text-left">
                                <h3 className="font-heading font-bold text-2xl mb-1">GET 10% OFF YOUR MATCH</h3>
                                <p className="opacity-80">Sign up to get a discount code sent to your inbox.</p>
                            </div>
                            <div className="flex w-full md:w-auto gap-2">
                                <input type="email" placeholder="Enter your email" className="bg-brand-dark/10 border-none rounded-lg px-4 py-3 w-full md:w-64 placeholder:text-brand-dark/40" />
                                <button className="bg-brand-dark text-brand-gold px-6 py-3 rounded-lg font-bold">SEND</button>
                            </div>
                        </div>

                        <button onClick={resetQuiz} className="mt-12 text-brand-cream/40 items-center justify-center gap-2 inline-flex hover:text-brand-gold transition-colors">
                            <RefreshCcw size={16} /> Retake Quiz
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    // 2. Question Screen
    const q = questions[currentQ];
    const progress = ((currentQ) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-brand-dark flex items-center justify-center p-6 text-brand-cream">
            <div className="max-w-2xl w-full">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="h-1 w-full bg-brand-cream/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-brand-gold"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-4 text-right text-xs font-bold text-brand-cream/40">
                        QUESTION {currentQ + 1} OF {questions.length}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQ}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                            {q.text}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {q.options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt.value)}
                                    className="group flex items-center justify-between p-6 rounded-xl border border-brand-cream/10 hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300 text-left"
                                >
                                    <span className="text-xl font-sans group-hover:text-brand-gold transition-colors">{opt.label}</span>
                                    <div className="w-6 h-6 rounded-full border border-brand-cream/20 group-hover:border-brand-gold flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
