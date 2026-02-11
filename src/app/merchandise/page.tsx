"use client";

import { useState } from "react";
// import { motion } from "framer-motion"; // Removed for debugging
import { merchProducts, merchCategories, MerchProduct } from "@/lib/merch-data";
import { Search, ShoppingBag, Star, Heart, Gift, Leaf } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

// --- Components ---

const MerchCard = ({ product }: { product: MerchProduct }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart({
            id: product.id,
            title: product.name,
            price: product.price,
            image: product.images[0] || '/products/merch_placeholder.jpg'
        });
    };

    return (
        <div
            className="group relative bg-brand-dark border border-brand-cream/5 rounded-sm overflow-hidden hover:border-brand-gold/30 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="aspect-[3/4] relative overflow-hidden bg-brand-cream/5">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-brand-gold text-brand-dark text-xs font-bold px-2 py-1 tracking-widest uppercase">New</span>
                    )}
                    {product.isBestSeller && (
                        <span className="bg-brand-cream text-brand-dark text-xs font-bold px-2 py-1 tracking-widest uppercase">Best Seller</span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-20 p-2 text-brand-cream/50 hover:text-brand-gold transition-colors">
                    <Heart size={20} />
                </button>

                {/* Main Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    {/* Using placeholders for now since real images might not exist yet */}
                    <div className="w-full h-full bg-brand-cream/10 flex items-center justify-center text-brand-cream/20 font-bold text-xl relative">
                        {/* Fallback text if image load fails or is placeholder */}
                        <span>{product.name}</span>
                        {/* If we had real images: */}
                        {/* <Image src={isHovered && product.images[1] ? product.images[1] : product.images[0]} alt={product.name} fill className="object-cover" /> */}
                    </div>
                </div>

                {/* Quick Add Overlay */}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-brand-gold text-brand-dark font-bold py-3 uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                    <ShoppingBag size={16} /> Add to Cart
                </button>
            </div>


            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-heading font-bold text-brand-cream group-hover:text-brand-gold transition-colors">{product.name}</h3>
                    <span className="font-sans font-bold text-brand-gold">₹{product.price}</span>
                </div>
                <p className="text-sm text-brand-cream/60 line-clamp-1 mb-3">{product.tagline}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-xs text-brand-cream/40">
                    <Star size={12} className="text-brand-gold fill-brand-gold" />
                    <span className="text-brand-gold">{product.rating}</span>
                    <span>({product.reviews})</span>
                </div>
            </div>
        </div>
    );
};

// --- Main Page ---

export default function MerchandisePage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
    const [sortBy, setSortBy] = useState("featured");

    // Filter Logic
    const filteredProducts = merchProducts.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
        if (sortBy === "price_low") return a.price - b.price;
        if (sortBy === "price_high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // Featured (default order)
    });

    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 bg-brand-dark/40 z-10" />
                <div className="absolute inset-0 bg-[url('/products/merch_hero_placeholder.jpg')] bg-cover bg-center blur-sm opacity-60 scale-105 bg-brand-cream/10" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-6 tracking-tighter">AURA MERCHANDISE</h1>
                        <p className="text-xl md:text-2xl font-sans text-brand-cream/90 max-w-3xl mx-auto leading-relaxed font-light">
                            Take your love for coffee beyond the cup. Thoughtfully designed pieces that let you carry a little bit of the coffee world with you, every day.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar / Filters */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-12">
                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:border-brand-gold transition-colors"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-cream/30" size={18} />
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="font-heading font-bold text-xl mb-6">CATEGORIES</h3>
                            <ul className="space-y-3">
                                {merchCategories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`text-left w-full hover:text-brand-gold transition-colors ${selectedCategory === cat ? 'text-brand-gold font-bold' : 'text-brand-cream/60'}`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Range (Simplified for Demo) */}
                        <div>
                            <h3 className="font-heading font-bold text-xl mb-6">PRICE</h3>
                            <div className="space-y-3 text-brand-cream/60">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="price" className="accent-brand-gold" onChange={() => setPriceRange([0, 1000])} /> Under ₹1000
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="price" className="accent-brand-gold" onChange={() => setPriceRange([1000, 2500])} /> ₹1000 - ₹2500
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="price" className="accent-brand-gold" onChange={() => setPriceRange([2500, 10000])} /> Over ₹2500
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="price" className="accent-brand-gold" onChange={() => setPriceRange([0, 10000])} defaultChecked /> All Prices
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Sort & Count Header */}
                        <div className="flex justify-between items-center mb-8">
                            <p className="text-brand-cream/50 text-sm">Showing {filteredProducts.length} products</p>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-brand-cream/5 border border-brand-cream/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-gold"
                            >
                                <option value="featured">Featured</option>
                                <option value="price_low">Price: Low to High</option>
                                <option value="price_high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>

                        {/* Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProducts.map((product) => (
                                    <MerchCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-brand-cream/5 rounded-2xl border border-brand-cream/10">
                                <Search size={48} className="mx-auto text-brand-cream/20 mb-4" />
                                <h3 className="text-xl font-bold mb-2">No products found</h3>
                                <p className="text-brand-cream/60">Try adjusting your filters or search term.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Featured Sections - Outside main container for full width */}

            {/* Gift Guide */}
            <section className="py-24 px-6 bg-brand-gold text-brand-dark">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4 opacity-80">
                            <Gift size={32} />
                            <span className="font-bold tracking-widest uppercase">The Gifting Suite</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">FIND THE PERFECT GIFT</h2>
                        <p className="text-lg opacity-80 mb-8 max-w-xl">
                            Whether for a coffee connoisseur or a casual sipper, we have something special. Explore our curated gift bundles and accessories.
                        </p>
                        <button className="bg-brand-dark text-brand-gold px-8 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform">
                            SHOP GIFTS
                        </button>
                    </div>
                    <div className="flex-1 w-full bg-brand-dark/10 h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Placeholder for Gift Image */}
                        <div className="text-brand-dark/20 font-heading font-bold text-4xl">GIFT BUNDLE VISUAL</div>
                    </div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="py-24 px-6 bg-brand-dark border-t border-brand-cream/10">
                <div className="container mx-auto max-w-4xl text-center">
                    <Leaf size={48} className="text-brand-gold mx-auto mb-6" />
                    <h2 className="text-3xl font-heading font-bold mb-6">MERCHANDISE THAT MATTERS</h2>
                    <p className="text-brand-cream/60 text-lg leading-relaxed mb-12">
                        We believe in products that last. Our merchandise is crafted with sustainable materials, reusable designs, and ethical manufacturing practices. Using reusable cups in our cafes earns you bonus rewards.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-bold tracking-widest uppercase text-brand-gold">
                        <div className="p-4 border border-brand-cream/10 rounded-lg">Eco-Friendly Materials</div>
                        <div className="p-4 border border-brand-cream/10 rounded-lg">Ethical Manufacturing</div>
                        <div className="p-4 border border-brand-cream/10 rounded-lg">Supports Communities</div>
                    </div>
                </div>
            </section>

        </div>
    );
}
