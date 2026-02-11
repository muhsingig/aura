import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      {/* 
         HeroSection handles the scroll-linked canvas.
         It has a height of 400vh internally.
       */}
      <HeroSection />

      <Features />

      <Testimonials />

      <CallToAction />

      <footer className="py-8 text-center text-brand-cream/30 text-xs font-sans">
        &copy; {new Date().getFullYear()} AURA COFFEE. CRAFTED IN PRECISION.
      </footer>
    </main>
  );
}
