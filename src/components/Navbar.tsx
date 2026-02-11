"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import LoginModal from "./LoginModal";
import GooeyNav from "./GooeyNav";

export default function Navbar() {
    const { toggleCart, cartCount } = useCart();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        if (!supabase) return;

        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            if (session?.user) fetchProfile(session.user.id);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchProfile(session.user.id);
            } else {
                setProfile(null);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId: string) => {
        if (!supabase) return;
        const { data } = await supabase
            .from('profiles')
            .select('username, full_name')
            .eq('id', userId)
            .single();

        if (data) setProfile(data);
    };

    const handleLogout = async () => {
        if (supabase) {
            await supabase.auth.signOut();
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full p-6 z-40 flex justify-between items-center mix-blend-difference text-brand-cream">
                {/* Logo */}
                <Link href="/" className="relative w-32 h-12 block hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="AURA"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <div className="font-sans font-bold tracking-widest text-sm relative z-40">
                    <GooeyNav
                        items={[
                            {
                                label: "SHOP",
                                href: "/shop"
                            },
                            ...(user ? [
                                {
                                    label: (profile?.username || profile?.full_name || user.email?.split('@')[0] || "USER").toUpperCase().slice(0, 10),
                                    href: "/profile"
                                },
                                {
                                    label: "LOGOUT",
                                    onClick: handleLogout
                                }
                            ] : [
                                {
                                    label: "LOGIN",
                                    onClick: () => setIsLoginOpen(true)
                                }
                            ]),
                            {
                                label: `CART${cartCount > 0 ? ` (${cartCount})` : ''}`,
                                onClick: toggleCart
                            }
                        ]}
                    />
                </div>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
