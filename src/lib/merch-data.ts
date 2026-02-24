export interface MerchProduct {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    category: "Drinkware" | "Apparel" | "Bags & Accessories" | "Brewing Equipment" | "Home & Lifestyle";
    images: string[];
    features: string[];
    colors?: string[];
    sizes?: string[];
    isNew?: boolean;
    isBestSeller?: boolean;
    rating: number;
    reviews: number;
}

export const merchProducts: MerchProduct[] = [
    // DRINKWARE
    {
        id: "m-cup-001",
        name: "Aura Travel Mug",
        tagline: "Durable and stylish, ensures spill-free sips.",
        description: "Your ultimate travel buddy. Double-wall insulated stainless steel keeps your coffee hot for 6 hours or cold for 12. Leak-proof and fits standard cup holders.",
        price: 1299,
        category: "Drinkware",
        images: ["/products/merch/aura-mug.png"],
        features: ["Double-wall insulation", "Leak-proof lid", "BPA-free", "16oz Capacity"],
        colors: ["Matte Black", "Brushed Steel", "Rose Gold", "Forest Green"],
        isBestSeller: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: "m-cup-002",
        name: "Aura Acrylic Sipper",
        tagline: "Sip in style with an eye-catching companion.",
        description: "Lightweight, clear acrylic construction lets you show off your beverage. Includes a reusable straw and spill-resistant lid.",
        price: 799,
        category: "Drinkware",
        images: ["/products/merch/aura-acrylic-sipper.png"],
        features: ["Double-wall acrylic", "Reusable straw", "24oz Capacity"],
        colors: ["Clear", "Rose", "Navy", "Sage"],
        isNew: true,
        rating: 4.5,
        reviews: 32
    },
    {
        id: "m-cup-003",
        name: "Aura Classic Mug",
        tagline: "Start your morning ritual right.",
        description: "Premium ceramic with a comfortable handle and perfect balance. Microwave and dishwasher safe.",
        price: 499,
        category: "Drinkware",
        images: ["/products/merch/aura-classic-mug.png"],
        features: ["Premium ceramic", "Dishwasher safe", "12oz Capacity"],
        colors: ["Minimalist Logo", "Origin Map", "Botanical"],
        rating: 4.9,
        reviews: 450
    },
    {
        id: "m-cup-004",
        name: "Double-Wall Glass Mug",
        tagline: "Watch your layers come to life.",
        description: "Heat-resistant borosilicate glass that keeps your hands cool and your coffee hot.",
        price: 699,
        category: "Drinkware",
        images: ["/products/merch/glass-mug.png"],
        features: ["Borosilicate glass", "Heat-resistant", "12oz Capacity"],
        rating: 4.7,
        reviews: 89
    },

    // APPAREL
    {
        id: "m-app-001",
        name: "Aura Coffee Tee",
        tagline: "Wear your love for coffee.",
        description: "Soft, organic cotton blend tee with varied designs. Pre-shrunk and fits true to size.",
        price: 999,
        category: "Apparel",
        images: ["/products/merch/tee-black.png"],
        features: ["100% Organic Cotton", "Unisex sizing", "Soft wash"],
        colors: ["Black", "White", "Heather Grey", "Clay"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        isBestSeller: true,
        rating: 4.6,
        reviews: 210
    },
    {
        id: "m-app-002",
        name: "Aura Comfort Hoodie",
        tagline: "Cozy cafe vibes, anywhere.",
        description: "Premium fleece blend with a front pocket and adjustable hood. Perfect for chilly mornings.",
        price: 2499,
        category: "Apparel",
        images: ["/products/merch/hoodie-cream.png"],
        features: ["Premium fleece", "Ribbed cuffs", "Relaxed fit"],
        colors: ["Black", "Charcoal", "Cream", "Burgundy"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 156
    },
    {
        id: "m-app-003",
        name: "Aura Dad Cap",
        tagline: "Casual style for coffee lovers.",
        description: "100% cotton twill with an adjustable strap and embroidered logo.",
        price: 799,
        category: "Apparel",
        images: ["/products/merch/cap-tan.png"],
        features: ["Cotton twill", "Adjustable strap", "Embroidered logo"],
        colors: ["Black", "Navy", "Tan", "White"],
        rating: 4.5,
        reviews: 78
    },

    // BAGS & ACCESSORIES
    {
        id: "m-bag-001",
        name: "Aura Canvas Tote",
        tagline: "Carry your essentials in style.",
        description: "Heavy-duty canvas tote with reinforced handles. Spacious enough for a laptop and your daily brew.",
        price: 599,
        category: "Bags & Accessories",
        images: ["/products/merch/tote-bag.png"],
        features: ["Heavy-duty canvas", "Reinforced handles", "Eco-friendly"],
        isNew: true,
        rating: 4.7,
        reviews: 45
    },
    {
        id: "m-bag-002",
        name: "Aura Coffee Keychain",
        tagline: "A little piece of Aura.",
        description: "Durable enamel pin keychain. The perfect small gift for yourself or a friend.",
        price: 299,
        category: "Bags & Accessories",
        images: ["/products/merch/keychain.png"],
        features: ["Enamel design", "Durable ring"],
        colors: ["Portafilter", "Logo Cup", "Bean Bag"],
        rating: 4.8,
        reviews: 205
    },

    // BREWING EQUIPMENT
    {
        id: "m-brew-001",
        name: "Aura Pour Over Kit",
        tagline: "Master the slow brew.",
        description: "Complete kit including ceramic dripper, glass carafe, and filters. Everything you need for a clean, flavorful cup.",
        price: 2999,
        category: "Brewing Equipment",
        images: ["/products/merch/pour-over.png"],
        features: ["Ceramic dripper", "Borosilicate carafe", "Includes filters"],
        rating: 4.9,
        reviews: 88
    },
    {
        id: "m-brew-002",
        name: "Aura French Press",
        tagline: "Rich, full-bodied coffee made easy.",
        description: "Classic design with a stainless steel plunger and heat-resistant glass. Makes 3-4 cups.",
        price: 1899,
        category: "Brewing Equipment",
        images: ["/products/merch/french-press.png"],
        features: ["34oz Capacity", "Stainless steel filter", "Easy to clean"],
        colors: ["Black", "Copper"],
        isBestSeller: true,
        rating: 4.7,
        reviews: 134
    },
    {
        id: "m-brew-003",
        name: "Manual Burr Grinder",
        tagline: "Consistent grind, anywhere.",
        description: "Ceramic burrs ensure a consistent grind for better extraction. Compact and travel-friendly.",
        price: 1499,
        category: "Brewing Equipment",
        images: ["/products/merch/grinder.png"],
        features: ["Ceramic burrs", "Adjustable settings", "Compact"],
        rating: 4.6,
        reviews: 92
    },

    // HOME & LIFESTYLE
    {
        id: "m-home-001",
        name: "Coffee-Scented Candle",
        tagline: "The aroma of a cafe at home.",
        description: "Hand-poured soy wax candle with notes of fresh roasted coffee, vanilla, and cream. 40+ hours burn time.",
        price: 899,
        category: "Home & Lifestyle",
        images: ["/products/merch/candle.png"],
        features: ["Soy wax", "40+ hr burn", "Reusable glass"],
        colors: ["Morning Brew", "Espresso Bar", "Cafe Vibes"],
        isNew: true,
        rating: 4.8,
        reviews: 67
    },
    {
        id: "m-home-002",
        name: "Aura Cork Coasters",
        tagline: "Protect your surfaces in style.",
        description: "Set of 4 natural cork coasters with minimalist Aura branding.",
        price: 399,
        category: "Home & Lifestyle",
        images: ["/products/merch/coasters.jpg"],
        features: ["Natural cork", "Set of 4", "Heat resistant"],
        rating: 4.9,
        reviews: 112
    }
];

export const merchCategories = [
    "All",
    "Drinkware",
    "Apparel",
    "Bags & Accessories",
    "Brewing Equipment",
    "Home & Lifestyle"
];
