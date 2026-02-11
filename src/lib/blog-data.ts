export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "What is Third Wave Coffee?",
        excerpt: "Discover the movement that treats coffee as an artisanal foodstuff, like wine, rather than a commodity.",
        category: "Education",
        author: "Alex Rivera",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        image: "/products/bon_bon_latte.png", // Placeholder
        slug: "what-is-third-wave-coffee"
    },
    {
        id: "2",
        title: "5 Common Pour Over Mistakes",
        excerpt: "Struggling with your V60? Here are the most common pitfalls and how to fix them for a better brew.",
        category: "Brewing",
        author: "Sarah Chen",
        date: "Oct 08, 2025",
        readTime: "4 min read",
        image: "/products/dripper.svg",
        slug: "common-pour-over-mistakes"
    },
    {
        id: "3",
        title: "Tracing Aura's Journey: From Farm to Cup",
        excerpt: "An inside look at how we source our beans directly from sustainable farms in Colombia and Ethiopia.",
        category: "Sourcing",
        author: "Marcus Thorne",
        date: "Sep 28, 2025",
        readTime: "8 min read",
        image: "/products/colombia.svg",
        slug: "farm-to-cup-journey"
    },
    {
        id: "4",
        title: "Cold Brew vs. Iced Coffee: What's the Difference?",
        excerpt: "They might look the same, but the brewing process makes a world of difference in flavor and acidity.",
        category: "Education",
        author: "Alex Rivera",
        date: "Sep 15, 2025",
        readTime: "3 min read",
        image: "/products/double_choc_frappe.png",
        slug: "cold-brew-vs-iced-coffee"
    },
    {
        id: "5",
        title: "The Ultimate Guide to Coffee Roasting",
        excerpt: "Understanding the difference between light, medium, and dark roasts and how they affect flavor.",
        category: "Education",
        author: "Master Roaster Ken",
        date: "Sep 01, 2025",
        readTime: "6 min read",
        image: "/products/blend.svg",
        slug: "guide-to-coffee-roasting"
    },
    {
        id: "6",
        title: "Sustainable Packaging: Our Promise",
        excerpt: "How we're reducing waste with compostable bags and recyclable shipping materials.",
        category: "Sustainability",
        author: "Emma Green",
        date: "Aug 20, 2025",
        readTime: "4 min read",
        image: "/products/ethiopia.svg",
        slug: "sustainable-packaging"
    }
];

export const categories = ["All", "Education", "Brewing", "Sourcing", "Sustainability", "Recipes"];
