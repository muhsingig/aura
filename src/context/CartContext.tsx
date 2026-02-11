"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
}

interface CartContextType {
    cart: CartItem[];
    isCartOpen: boolean;
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    toggleCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load cart from local storage
    useEffect(() => {
        const savedCart = localStorage.getItem("aura-cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
        setIsMounted(true);
    }, []);

    // Save cart to local storage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("aura-cart", JSON.stringify(cart));
        }
    }, [cart, isMounted]);

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) =>
            prev.map((i) => {
                if (i.id === id) {
                    const newQty = Math.max(0, i.quantity + delta);
                    return { ...i, quantity: newQty };
                }
                return i;
            }).filter((i) => i.quantity > 0)
        );
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                isCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
