"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Direct Trade 2.0",
        description: "Verified blockchain traceability for every farm.",
        icon: (
            <svg className="w-12 h-12 text-brand-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Adaptive Roasting",
        description: "AI-profiled roasts that ensure 100% flavor consistency.",
        icon: (
            <svg className="w-12 h-12 text-brand-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        title: "Compostable Luxury",
        description: "100% plastic-free, nitrogen-flushed packaging.",
        icon: (
            <svg className="w-12 h-12 text-brand-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

export default function Features() {
    return (
        <section className="py-32 bg-brand-cream text-brand-dark">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-8 border border-brand-dark/10 hover:border-brand-gold/50 transition-colors duration-500 rounded-sm"
                        >
                            <div className="p-4 bg-brand-dark/5 rounded-full mb-6 relative overflow-hidden group">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                            <p className="font-sans text-brand-dark/70 max-w-xs">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
