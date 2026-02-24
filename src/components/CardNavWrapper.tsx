"use client";

import { useState, useEffect } from "react";
import CardNav from "./CardNav";
import { useCart } from "@/context/CartContext";
import { appSupabase } from "@/lib/supabase";
import LoginModal from "./LoginModal";
import { useRouter } from "next/navigation";

export default function CardNavWrapper() {
    const { toggleCart, cartCount } = useCart();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        if (!appSupabase) return;

        // Check active session
        appSupabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            if (session?.user) fetchProfile(session.user.id);
        });

        // Listen for auth changes
        const { data: { subscription } } = appSupabase.auth.onAuthStateChange((_event, session) => {
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
        if (!appSupabase) return;
        const { data } = await appSupabase
            .from('profiles')
            .select('username, full_name')
            .eq('id', userId)
            .single();

        if (data) setProfile(data);
    };

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (appSupabase) {
            await appSupabase.auth.signOut();
            router.push("/");
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
