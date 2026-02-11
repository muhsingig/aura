"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { BorderBeam } from "./magicui/border-beam";

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    notes: string[];
}

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const { addToCart } = useCart();

    if (!product) return null;

    return (
        <AnimatePresence>
            {product && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-brand-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-brand-cream text-brand-dark rounded-sm max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
                        >
                            {/* Product Image Side */}
                            <div className="bg-brand-dark/5 p-12 flex items-center justify-center relative">
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {product.notes.map(note => (
                                        <span key={note} className="text-[10px] uppercase tracking-widest border border-brand-dark/20 px-2 py-1 rounded-full">
                                            {note}
                                        </span>
                                    ))}
                                </div>
                                {/* Product Image */}
                                <div className="w-64 h-80 bg-brand-dark shadow-2xl relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-gold font-heading tracking-widest border border-brand-gold/20 m-4 z-0">
                                        {product.title}
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="absolute inset-0 w-full h-full object-cover z-10"
                                    />
                                </div>
                            </div>

                            {/* Details Side */}
                            <div className="p-12 flex flex-col justify-center">
                                <h2 className="text-4xl font-heading font-bold mb-2">{product.title}</h2>
                                <h3 className="text-2xl font-sans font-bold text-brand-gold mb-6">₹{product.price.toFixed(2)}</h3>

                                <p className="font-sans text-brand-dark/70 mb-8 leading-relaxed">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() => {
                                        addToCart({
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            image: product.image
                                        });
                                        onClose();
                                    }}
                                    className="relative overflow-hidden w-full py-4 bg-brand-dark text-brand-cream font-sans font-bold tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-lg group"
                                >
                                    <span className="relative z-10">ADD TO CART</span>
                                    <BorderBeam size={100} duration={8} delay={9} />
                                </button>

                                <button
                                    onClick={onClose}
                                    className="mt-4 text-center text-xs tracking-widest uppercase text-brand-dark/40 hover:text-brand-dark"
                                >
                                    Close details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
