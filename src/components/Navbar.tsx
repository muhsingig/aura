"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import LoginModal from "./LoginModal";
import GooeyNav from "./GooeyNav";

export default function Navbar() {
    const { toggleCart, cartCount } = useCart();
    const { user } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLogout = async () => {
        if (auth) {
            try {
                await signOut(auth);
            } catch (error) {
                console.error("Error signing out:", error);
            }
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full p-6 z-40 flex justify-between items-center mix-blend-difference text-brand-cream">
                {/* Logo */}
                <Link href="/" className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] block hover:opacity-80 transition-opacity scale-125 transform origin-left">
                    <Image
                        src="/logo.png"
                        alt="AURA"
                        fill
                        className="object-contain"
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
                            {
                                label: "LEARN",
                                href: "/learn/brewing",
                                subItems: [
                                    { label: "Brewing Guides", href: "/learn/brewing" },
                                    { label: "Coffee Blog", href: "/learn/blog" },
                                    { label: "FAQ", href: "/learn/faq" },
                                    { label: "Coffee Quiz", href: "/learn/quiz" }
                                ]
                            },
                            {
                                label: "MERCH",
                                href: "/merchandise"
                            },
                            {
                                label: "ABOUT",
                                href: "/about/story",
                                subItems: [
                                    { label: "Our Story", href: "/about/story" },
                                    { label: "Our Coffee", href: "/about/coffee" },
                                    { label: "Careers", href: "/about/careers" },
                                    { label: "Newsroom", href: "/about/newsroom" },
                                    { label: "Contact", href: "/about/contact" }
                                ]
                            },
                            {
                                label: "REWARDS",
                                href: "/rewards"
                            },
                            ...(user ? [
                                {
                                    label: (user.displayName || user.email?.split('@')[0] || "USER").toUpperCase().slice(0, 10),
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
