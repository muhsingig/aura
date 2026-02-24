import { brewingMethods } from "@/lib/brewing-data";
import BrewingGuideClient from "./BrewingGuideClient";
import { notFound } from "next/navigation";

// Pre-generate all brewing method slugs for static export
export async function generateStaticParams() {
    return brewingMethods.map((method) => ({
        slug: method.slug,
    }));
}

export const dynamicParams = false;

export default async function BrewingGuideDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const method = brewingMethods.find((m) => m.slug === slug);

    if (!method) {
        notFound();
    }

    // Create a serializable version of the method by excluding the icon component (which is a function and not serializable)
    const { icon, ...serializableMethod } = method;

    return <BrewingGuideClient method={serializableMethod} />;
}
