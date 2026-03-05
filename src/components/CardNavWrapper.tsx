"use client";

import { useState } from "react";
import CardNav from "./CardNav";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import LoginModal from "./LoginModal";
import { useRouter } from "next/navigation";

export default function CardNavWrapper() {
    const { toggleCart, cartCount } = useCart();
    const { user } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (auth) {
            try {
                await signOut(auth);
                router.push("/");
            } catch (error) {
                console.error("Error signing out:", error);
            }
        }
    };

    const navItems = [
        {
            label: "SHOP & MERCH",
            bgColor: "#1a1a1a",
            textColor: "#F5F5F0",
            links: [
                { label: "Shop Coffee", href: "/shop" },
                { label: "Merchandise", href: "/merchandise" },
                {
                    label: `Cart (${cartCount})`,
                    href: "#",
                    onClick: (e: React.MouseEvent) => { e.preventDefault(); toggleCart(); }
                }
            ]
        },
        {
            label: "LEARN & EXPLORE",
            bgColor: "#2a2a2a",
            textColor: "#F5F5F0",
            links: [
                { label: "Brewing Guides", href: "/learn/brewing" },
                { label: "Blog", href: "/learn/blog" },
                { label: "Quiz", href: "/learn/quiz" },
                { label: "FAQ", href: "/learn/faq" }
            ]
        },
        {
            label: "ACCOUNT",
            bgColor: "#D4AF37",
            textColor: "#0B0907",
            links: [
                { label: "Points", href: "/rewards" }, // Renamed from Rewards
                { label: "About Us", href: "/about/story" },
                ...(user ? [
                    { label: "Profile", href: "/profile" },
                    { label: "Logout", href: "#", onClick: handleLogout }
                ] : [
                    { label: "Login", href: "#", onClick: (e: React.MouseEvent) => { e.preventDefault(); setIsLoginOpen(true); } }
                ])
            ]
        }
    ];

    return (
        <>
            <CardNav
                logo="/logo.png"
                items={navItems}
                ctaLabel="POINTS"
                onCtaClick={() => router.push("/rewards")}
                baseColor="#0B0907" // Match brand dark
                menuColor="#F5F5F0" // Brand cream
                buttonBgColor="#D4AF37" // Brand gold
                buttonTextColor="#0B0907"
            />
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
