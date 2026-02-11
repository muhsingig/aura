"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { BorderBeam } from "./magicui/border-beam";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        if (!supabase) {
            setError("Supabase is not configured.");
            setLoading(false);
            return;
        }

        try {
            if (isSignUp) {
                const { error, data } = await supabase.auth.signUp({
                    email,
                    password,
                });
                if (error) throw error;
                if (data.user && data.session) {
                    setMessage("Account created successfully!");
                    onClose();
                } else {
                    setMessage("Check your email for the confirmation link!");
                }
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                setMessage("Logged in successfully!");
                onClose();
            }
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-brand-cream text-brand-dark p-8 rounded-sm shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <h2 className="text-3xl font-heading font-bold text-center mb-2">
                            {isSignUp ? "JOIN THE RITUAL" : "WELCOME BACK"}
                        </h2>
                        <p className="text-center text-brand-dark/60 font-sans text-sm tracking-wide mb-8">
                            {isSignUp ? "Create an account to track your orders" : "Sign in to access your account"}
                        </p>

                        {/* Form */}
                        <form onSubmit={handleAuth} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-dark/80">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-brand-dark/5 border border-brand-dark/10 p-3 outline-none focus:border-brand-gold transition-colors font-sans"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-dark/80">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-brand-dark/5 border border-brand-dark/10 p-3 outline-none focus:border-brand-gold transition-colors font-sans"
                                    required
                                    minLength={6}
                                />
                            </div>

                            {error && (
                                <div className="text-red-500 text-xs font-bold text-center bg-red-50 p-2 border border-red-100">
                                    {error}
                                </div>
                            )}
                            {message && (
                                <div className="text-green-600 text-xs font-bold text-center bg-green-50 p-2 border border-green-100">
                                    {message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="relative overflow-hidden w-full py-3 bg-brand-dark text-brand-cream font-sans font-bold tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 group"
                            >
                                <span className="relative z-10">{loading ? "PROCESSING..." : (isSignUp ? "CREATE ACCOUNT" : "SIGN IN")}</span>
                                <BorderBeam size={80} duration={8} delay={4} />
                            </button>
                        </form>

                        {/* Footer / Toggle */}
                        <div className="mt-6 text-center text-sm font-sans">
                            <span className="text-brand-dark/60">
                                {isSignUp ? "Already have an account?" : "Don't have an account yet?"}
                            </span>
                            <button
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setError(null);
                                    setMessage(null);
                                }}
                                className="ml-2 font-bold text-brand-dark hover:text-brand-gold transition-colors underline decoration-brand-gold/50 underline-offset-4"
                            >
                                {isSignUp ? "Sign In" : "Sign Up"}
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-brand-dark/40 hover:text-brand-dark transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
