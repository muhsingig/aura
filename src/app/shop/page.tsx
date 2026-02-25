"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductModal, { Product } from "@/components/ProductModal";
import { appSupabase } from "@/lib/supabase";
import TiltedCard from "@/components/TiltedCard";

// Fallback data if Supabase isn't connected
const fallbackProducts: Product[] = [
    {
        id: "p1",
        title: "BON BON LATTE",
        description: "A delightful Spanish-inspired treat. Layers of sweetened condensed milk and bold espresso, topped with silky steamed milk and a drizzle of caramel.",
        price: 450.00,
        image: "/products/bon_bon_latte.png",
        notes: ["Sweet", "Creamy", "Indulgent"]
    },
    {
        id: "p2",
        title: "CARAMEL MACCHIATO",
        description: "A rich, velvety blend with deep espresso notes, finished with a smooth vanilla aroma and a buttery caramel drizzle profile.",
        price: 440.00,
        image: "/products/caramel_macchiato.png",
        notes: ["Caramel", "Vanilla", "Espresso"]
    },
    {
        id: "p3",
        title: "DOUBLE CHOC FRAPPE",
        description: "The ultimate chocolate lover's dream. Rich cocoa blended with ice, milk, and chocolate chips, finished with whipped cream and chocolate sauce.",
        price: 470.00,
        image: "/products/double_choc_frappe.png",
        notes: ["Deep Chocolate", "Icy", "Decadent"]
    },
    {
        id: "p4",
        title: "MATCHA LATTE",
        description: "Premium ceremonial grade matcha whisked to perfection with steamed milk. A harmonious balance of earthy, grassy notes and creamy sweetness.",
        price: 400.00,
        image: "/products/matcha_latte.png",
        notes: ["Earthy", "Antioxidant", "Smooth"]
    },
    {
        id: "p5",
        title: "TIRAMISU LATTE",
        description: "Your favorite dessert in a cup. Espresso combined with flavors of mascarpone, cocoa, and ladyfingers, topped with a dusting of cocoa powder.",
        price: 480.00,
        image: "/products/tiramisu_latte.png",
        notes: ["Dessert", "Cocoa", "Mascarpone"]
    },
    {
        id: "p6",
        title: "CAPPUCCINO",
        description: "A classic Italian staple. Equal parts espresso, steamed milk, and velvety milk foam, dusted with chocolate or cinnamon.",
        price: 330.00,
        image: "/products/cappuccino.png",
        notes: ["Classic", "Foamy", "Balanced"]
    },
    {
        id: "p7",
        title: "COLD BREW",
        description: "Steeped for 24 hours to extract the smoothest, richest flavor. Serve over ice for a refreshing, bold coffee experience.",
        price: 250.00,
        image: "/products/cold_brew.png",
        notes: ["Smooth", "Bold", "Refreshing"]
    },
    {
        id: "p8",
        title: "STRAWBERRY CHEESECAKE FRAPPE",
        description: "A decadent blend of wild strawberries and creamy cheesecake, topped with whipped cream and biscuit crumble. A dessert in every sip.",
        price: 550.00,
        image: "/products/strawberry_cheesecake_frappe.png",
        notes: ["Fruity", "Creamy", "Indulgent"]
    },
    {
        id: "p9",
        title: "ICED MOCHA",
        description: "Rich espresso combined with bittersweet mocha sauce and milk, served over ice. Topped with sweetened whipped cream.",
        price: 350.00,
        image: "/products/iced_mocha.png",
        notes: ["Chocolatey", "Bold", "Icy"]
    },
    {
        id: "p10",
        title: "STRAWBERRY MATCHA LATTE",
        description: "Premium earthy matcha layered over sweet strawberry puree and milk. A beautiful and delicious fusion of flavors.",
        price: 500.00,
        image: "/products/strawberry_matcha_latte.png",
        notes: ["Earthy", "Sweet", "Fusion"]
    },
    {
        id: "p11",
        title: "LOTUS BISCOFF FRAPPE",
        description: "A creamy masterpiece blending the unique caramelized taste of Lotus Biscoff cookies with rich coffee and milk, topped with whipped cream and cookie crumbles.",
        price: 480.00,
        image: "/products/lotus_biscoff_frappe.png",
        notes: ["Caramelized", "Crunchy", "Premium"]
    },
    {
        id: "p12",
        title: "PISTACHIO LATTE",
        description: "Smooth espresso combined with sweet pistachio sauce and steamed milk, finished with a salted brown butter topping.",
        price: 490.00,
        image: "/products/pistachio_latte.png",
        notes: ["Nutty", "Smooth", "Sweet"]
    }
];

export default function Shop() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>(fallbackProducts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await appSupabase
                    .from('products')
                    .select('*');

                if (error) {
                    console.error("Error fetching products:", error);
                } else if (data && data.length > 0) {
                    setProducts(data);
                }
            } catch (err) {
                console.error("Error talking to product service:", err);
                // On any failure, keep using the fallback products silently.
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-brand-dark pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <header className="mb-20 text-center">
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-4 tracking-tighter">
                        THE COLLECTION
                    </h1>
                    <p className="text-brand-gold font-sans tracking-widest uppercase text-sm">
                        Curated for the Ritual
                    </p>
                </header>

                {loading ? (
                    <div className="flex justify-center items-center h-64 text-brand-gold font-heading tracking-widest animate-pulse">
                        LOADING COLLECTION...
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedProduct(product)}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[3/4] bg-brand-cream/5 relative overflow-hidden mb-6 rounded-sm">
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                                    {/* Product Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-brand-cream/5">
                                        <TiltedCard
                                            imageSrc={product.image}
                                            altText={product.title}
                                            captionText={product.title}
                                            containerHeight="100%"
                                            containerWidth="100%"
                                            imageHeight="100%"
                                            imageWidth="100%"
                                            rotateAmplitude={12}
                                            scaleOnHover={1.15}
                                            showMobileWarning={false}
                                            showTooltip={false}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500" />
                                            }
                                        />
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex gap-2 pointer-events-none z-20">
                                        {product.notes.slice(0, 2).map(note => (
                                            <span key={note} className="text-[10px] uppercase tracking-widest border border-brand-cream/20 text-brand-cream/60 px-2 py-1 rounded-full group-hover:border-brand-gold/50 group-hover:text-brand-gold transition-colors">
                                                {note}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-brand-cream/50 font-sans text-sm mt-1 mb-4 line-clamp-2 max-w-xs">
                                            {product.description}
                                        </p>
                                    </div>
                                    <span className="font-sans font-bold text-brand-gold">
                                        ₹{product.price}
                                    </span>
                                </div>

                                <div className="w-full h-[1px] bg-brand-cream/10 group-hover:bg-brand-gold/50 transition-colors mt-2" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
}
