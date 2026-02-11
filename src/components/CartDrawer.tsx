"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { BorderBeam } from "./magicui/border-beam";

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-brand-cream text-brand-dark z-50 shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-brand-dark/10 flex justify-between items-center bg-brand-cream">
                            <h2 className="text-2xl font-heading font-bold">YOUR RITUAL</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-brand-dark/5 rounded-full transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="text-center py-20 opacity-50 font-sans">
                                    <p>Your brewing kit is empty.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 bg-brand-dark/5 rounded-sm overflow-hidden flex-shrink-0 relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                                                <p className="font-sans font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="text-sm text-brand-dark/60 mb-3">{item.variant}</p>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center border border-brand-dark/20 rounded-sm">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 flex items-center justify-center hover:bg-brand-dark/5"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 flex items-center justify-center hover:bg-brand-dark/5"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs text-red-500 hover:text-red-700 underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="p-6 border-t border-brand-dark/10 bg-brand-cream">
                            <div className="flex justify-between items-center mb-6 text-xl font-heading font-bold">
                                <span>TOTAL</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="relative overflow-hidden w-full py-4 bg-brand-gold text-brand-dark font-sans font-bold tracking-widest hover:bg-[#b5952f] transition-colors shadow-lg group">
                                <span className="relative z-10">CHECKOUT</span>
                                <BorderBeam size={100} duration={8} delay={9} colorFrom="#ffffff" colorTo="#ffffff" />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
