
import { Coffee, Wind, Sun, Droplets, Clock, TrendingUp, Filter, CupSoda } from "lucide-react";

export interface BrewingMethod {
    slug: string;
    name: string;
    icon: any;
    tagline: string;
    difficulty: "Beginner" | "Beginner-Intermediate" | "Intermediate" | "Advanced";
    time: string;
    bestFor: string;
    description: string;
    color: string;
    equipment: string[];
    ratio: string;
    grind: string;
    steps: { title: string; desc: string }[];
    tips: string[];
}

export const brewingMethods: BrewingMethod[] = [
    {
        slug: "pour-over",
        name: "Pour Over",
        icon: Filter,
        tagline: "For smooth and bright coffee, ideal for medium and light roasts",
        difficulty: "Intermediate",
        time: "3-4 minutes",
        bestFor: "Single-origin coffees, highlighting nuanced flavors",
        description: "The pour-over method involves pouring hot water through coffee grounds in a filter. The water drains through the coffee and filter into a carafe or mug. Pour-over is known for producing a clean cup that brings out subtle flavors.",
        color: "text-amber-500",
        equipment: ["V60 or Kalita Wave Dripper", "Paper Filters", "Gooseneck Kettle", "Scale"],
        ratio: "1:16 (Coffee to Water)",
        grind: "Medium-Fine",
        steps: [
            { title: "Rinse & Heat", desc: "Place filter in dripper and rinse with hot water to remove paper taste and warm the vessel. Discard water." },
            { title: "Add Coffee", desc: "Add 20g of medium-fine ground coffee to filter. Shake gently to level." },
            { title: "Bloom", desc: "Start timer. Pour 40g of water over grounds. Let sit for 30s to release gases." },
            { title: "Pour", desc: "Pour remaining water (320g total) in slow, concentric circles. Avoid touching the sides." },
            { title: "Draw Down", desc: "Allow water to drain completely. Total brew time should be 3-4 minutes." }
        ],
        tips: ["Use a gooseneck kettle for precise pouring control.", "If drawdown is too slow, try a coarser grind."]
    },
    {
        slug: "french-press",
        name: "French Press",
        icon: Coffee,
        tagline: "An easy-to-use brew method for full-bodied, robust coffee",
        difficulty: "Beginner",
        time: "4 minutes",
        bestFor: "Bold, rich coffee; medium to dark roasts",
        description: "The French Press is a full immersion brew method, meaning the coffee grounds steep in water for the entire brew time. This results in a heavy-bodied cup with rich texture.",
        color: "text-amber-700",
        equipment: ["French Press", "Scale", "Kettle"],
        ratio: "1:15",
        grind: "Coarse",
        steps: [
            { title: "Add Coffee", desc: "Add 30g of coarse ground coffee to the French Press." },
            { title: "Add Water", desc: "Pour 450g of hot water (200°F) over the grounds, ensuring all are wet." },
            { title: "Steep", desc: "Place plunger on top (don't press yet) to retain heat. Wait 4 minutes." },
            { title: "Press", desc: "Gently press the plunger down. If it's hard to press, your grind is too fine." },
            { title: "Serve", desc: "Pour immediately to stop extraction. Don't let it sit on the grounds." }
        ],
        tips: ["Decant coffee immediately after pressing to avoid bitterness.", "Scoop off the foam 'crust' before pressing for a cleaner cup."]
    },
    {
        slug: "cold-brew",
        name: "Cold Brew",
        icon: CupSoda,
        tagline: "For bold, refreshing coffee brewed cold from start to finish",
        difficulty: "Beginner",
        time: "12-24 hours",
        bestFor: "Smooth, low-acid coffee; hot summer days",
        description: "Cold brew is made by steeping coarse grounds in cold water for an extended period. Creating a concentrate that can be diluted with water or milk.",
        color: "text-blue-400",
        equipment: ["Mason Jar or Cold Brew Pitcher", "Filter/Cheesecloth"],
        ratio: "1:5 (Concentrate)",
        grind: "Coarse",
        steps: [
            { title: "Combine", desc: "Mix 1 cup coarse ground coffee with 5 cups cold water." },
            { title: "Steep", desc: "Cover and let sit at room temperature or fridge for 12-24 hours." },
            { title: "Strain", desc: "Filter out the grounds using a fine mesh sieve or cheesecloth." },
            { title: "Serve", desc: "Dilute concentrate 1:1 with water or milk and serve over ice." }
        ],
        tips: ["Cold brew stays fresh in the fridge for up to 2 weeks.", "Use older beans; cold brew is forgiving with freshness."]
    },
    {
        slug: "aeropress",
        name: "AeroPress",
        icon: Wind,
        tagline: "Espresso-style coffee without a high-maintenance machine",
        difficulty: "Beginner-Intermediate",
        time: "2-3 minutes",
        bestFor: "Clean, concentrated coffee; travel-friendly brewing",
        description: "The AeroPress uses air pressure to push water through coffee grounds. It's incredibly versatile, durable, and capable of making everything from espresso-style shots to cold brew.",
        color: "text-red-500",
        equipment: ["AeroPress", "Filters", "Kettle"],
        ratio: "1:16 (Standard)",
        grind: "Medium-Fine",
        steps: [
            { title: "Setup", desc: "Insert filter into cap and rinse. Assemble AeroPress (Standard or Inverted)." },
            { title: "Add Coffee", desc: "Add 17g coffee. Add hot water to level 4 marking." },
            { title: "Stir", desc: "Stir gently for 10 seconds." },
            { title: "Press", desc: "Insert plunger and press gently until you hear a hiss (approx 30s)." }
        ],
        tips: ["Try the 'Inverted Method' for more immersion time.", "Stop pressing when you hear the hiss to avoid bitterness."]
    },
    {
        slug: "moka-pot",
        name: "Moka Pot",
        icon: TrendingUp,
        tagline: "Rich, bold coffee with Italian tradition",
        difficulty: "Intermediate",
        time: "5 minutes",
        bestFor: "Strong, espresso-style coffee",
        description: "A stove-top coffee maker that produces coffee by passing boiling water pressurized by steam through ground coffee.",
        color: "text-zinc-400",
        equipment: ["Moka Pot", "Stove"],
        ratio: "Fill basket loosely",
        grind: "Fine (but coarser than espresso)",
        steps: [
            { title: "Fill Base", desc: "Fill bottom chamber with water up to valve." },
            { title: "Add Coffee", desc: "Fill basket with coffee, level but do NOT tamp." },
            { title: "Heat", desc: "Screw on top. Place on medium heat." },
            { title: "Brew", desc: "Remove from heat when you hear gurgling and flow slows." }
        ],
        tips: ["Use hot water in the base to speed up brewing and prevent burning coffee.", "Cool the base under tap water to stop extraction instantly."]
    },
    {
        slug: "chemex",
        name: "Chemex",
        icon: Droplets,
        tagline: "For connoisseurs looking for a delicate, sophisticated brew",
        difficulty: "Intermediate",
        time: "4-5 minutes",
        bestFor: "Clean, complex flavors; serving a group",
        description: "An elegant, one-piece, hourglass-shaped vessel made of heat-resistant glass. It uses thick proprietary filters that remove more oils/sediment.",
        color: "text-amber-800",
        equipment: ["Chemex", "Chemex Bonded Filters", "Scale"],
        ratio: "1:16",
        grind: "Medium-Coarse",
        steps: [
            { title: "Prep", desc: "Place 3-layer side of filter toward spout. Rinse." },
            { title: "Bloom", desc: "Add coffee. Pour double weight of water to bloom." },
            { title: "Pour", desc: "Pour water in steady stream. Keep level high." },
            { title: "Finish", desc: "Lift filter when dripping slows. Swirl and serve." }
        ],
        tips: ["Grind slightly coarser than V60.", "The thick filter is key to the clean taste."]
    },
    {
        slug: "drip-machine",
        name: "Drip Coffee Maker",
        icon: Coffee,
        tagline: "A simple method that highlights every subtle nuance",
        difficulty: "Beginner",
        time: "5-6 minutes",
        bestFor: "Everyday brewing; consistent results",
        description: "The classic automatic coffee maker. Water is heated and dripped over grounds in a basket filter.",
        color: "text-gray-400",
        equipment: ["Quality Coffee Maker", "Filter"],
        ratio: "1:16",
        grind: "Medium",
        steps: [
            { title: "Fill Tank", desc: "Add fresh, filtered water to reservoir." },
            { title: "Add Coffee", desc: "Place filter in basket. Add medium ground coffee." },
            { title: "Brew", desc: "Press start. Let the machine do the work." },
            { title: "Enjoy", desc: "Pour immediately after brewing finishes." }
        ],
        tips: ["Clean your machine regularly to remove oil buildup.", "If possible, bloom the coffee manually with a little hot water first."]
    },
    {
        slug: "espresso",
        name: "Espresso Machine",
        icon: Clock, // Placeholder
        tagline: "The foundation of café favorites",
        difficulty: "Advanced",
        time: "2-3 minutes",
        bestFor: "Milk-based drinks; intense coffee",
        description: "Hot water is forced through finely ground coffee at high pressure (9 bars).",
        color: "text-orange-600",
        equipment: ["Espresso Machine", "Grinder", "Tamper"],
        ratio: "1:2 (18g in, 36g out)",
        grind: "Fine",
        steps: [
            { title: "Grind & Dose", desc: "Grind 18g into portafilter." },
            { title: "Distribute & Tamp", desc: "Level grounds. Tamp with 30lbs pressure." },
            { title: "Lock & Pull", desc: "Insert portafilter. Start pump. Aim for 25-30s shot time." }
        ],
        tips: ["Consistency is key. Weigh every shot.", "Flush the grouphead before inserting portafilter."]
    }
];
