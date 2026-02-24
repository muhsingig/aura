"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Instagram, Facebook, Twitter, Linkedin, Coffee } from "lucide-react";
import Link from "next/link";
import MagicBento from "@/components/MagicBento";
import ElectricBorder from "@/components/ElectricBorder";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-cream font-sans">

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/40 z-10" />
                <div className="absolute inset-0 bg-[url('/products/bon_bon_latte.png')] bg-cover bg-center blur-sm opacity-60" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-brand-cream mb-6 tracking-tighter">GET IN TOUCH</h1>
                        <p className="text-xl md:text-2xl font-sans text-brand-cream/90 max-w-3xl mx-auto leading-relaxed font-light">
                            We'd love to hear from you. Here's how to reach us.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Methods & Info */}
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-12">CONTACT US</h2>

                        <div className="mb-16">
                            <ElectricBorder
                                color="#ffc800"
                                speed={0.1}
                                chaos={0.01}
                                thickness={2}
                                style={{ borderRadius: 24 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-brand-cream/5 p-8 rounded-[24px] border border-brand-cream/10">
                                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-cream/10">
                                        <Mail className="text-brand-gold mb-4" size={28} />
                                        <h3 className="font-bold text-xl mb-2">General Inquiries</h3>
                                        <p className="text-brand-cream/60 text-sm mb-4">For general questions about Aura.</p>
                                        <a href="mailto:hello@auracoffee.com" className="text-brand-gold font-bold hover:underline">hello@auracoffee.com</a>
                                    </div>
                                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-cream/10">
                                        <MessageSquare className="text-brand-gold mb-4" size={28} />
                                        <h3 className="font-bold text-xl mb-2">Customer Support</h3>
                                        <p className="text-brand-cream/60 text-sm mb-4">Order status, returns, and exchanges.</p>
                                        <a href="mailto:support@auracoffee.com" className="text-brand-gold font-bold hover:underline">support@auracoffee.com</a>
                                    </div>
                                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-cream/10">
                                        <Coffee className="text-brand-gold mb-4" size={28} />
                                        <h3 className="font-bold text-xl mb-2">Wholesale</h3>
                                        <p className="text-brand-cream/60 text-sm mb-4">Partner with us to serve Aura.</p>
                                        <a href="mailto:wholesale@auracoffee.com" className="text-brand-gold font-bold hover:underline">wholesale@auracoffee.com</a>
                                    </div>
                                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-cream/10">
                                        <Phone className="text-brand-gold mb-4" size={28} />
                                        <h3 className="font-bold text-xl mb-2">Call Us</h3>
                                        <p className="text-brand-cream/60 text-sm mb-4">Mon-Fri, 9am - 5pm EST.</p>
                                        <a href="tel:+15550000000" className="text-brand-gold font-bold hover:underline">+1 (555) 000-0000</a>
                                    </div>
                                </div>
                            </ElectricBorder>
                        </div>

                        {/* Location */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-heading font-bold mb-6">HEADQUARTERS</h3>
                            <div className="flex items-start gap-4 opacity-80">
                                <MapPin className="mt-1 text-brand-gold" />
                                <p className="text-lg leading-relaxed">
                                    123 Roast Blvd<br />
                                    Coffee District<br />
                                    Seattle, WA 98101
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/about/story" className="text-brand-cream font-bold border-b border-brand-gold pb-1 hover:opacity-80">
                                    View all cafe locations
                                </Link>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-2xl font-heading font-bold mb-6">CONNECT WITH US</h3>
                            <div className="flex gap-6">
                                <a href="#" className="w-12 h-12 bg-brand-cream/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="w-12 h-12 bg-brand-cream/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="w-12 h-12 bg-brand-cream/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="w-12 h-12 bg-brand-cream/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>


                    {/* Custom Contact Form → submits to Google Form via fetch */}
                    <div className="relative">
                        <ElectricBorder
                            color="#ffc800"
                            speed={0.1}
                            chaos={0.01}
                            thickness={2}
                            style={{ borderRadius: 24 }}
                        >
                            <div className="bg-brand-cream/5 p-10 rounded-3xl border border-brand-cream/10">
                                <h3 className="text-3xl font-heading font-bold mb-8">SEND A MESSAGE</h3>
                                <form
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        const form = e.currentTarget;
                                        const btn = form.querySelector('button[type=submit]') as HTMLButtonElement;

                                        // Show sending state
                                        if (btn) {
                                            btn.textContent = 'SENDING...';
                                            btn.disabled = true;
                                        }

                                        const formData = new FormData(form);
                                        const params = new URLSearchParams();
                                        formData.forEach((value, key) => {
                                            params.append(key, value as string);
                                        });

                                        try {
                                            await fetch(
                                                'https://docs.google.com/forms/d/e/1FAIpQLSdWs4YnDe56FwHYb-vVSm_eT91YVNu64unscSFQx4j7fbjROQ/formResponse',
                                                {
                                                    method: 'POST',
                                                    body: params,
                                                    mode: 'no-cors',
                                                }
                                            );
                                        } catch (err) {
                                            // no-cors will always succeed for form submissions
                                        }

                                        // Show success
                                        form.reset();
                                        if (btn) {
                                            btn.textContent = '✓ MESSAGE SENT!';
                                            btn.disabled = false;
                                            btn.classList.add('bg-green-600');
                                            btn.classList.remove('bg-brand-gold');
                                            setTimeout(() => {
                                                btn.textContent = 'SEND MESSAGE';
                                                btn.classList.remove('bg-green-600');
                                                btn.classList.add('bg-brand-gold');
                                            }, 3000);
                                        }
                                    }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold tracking-widest opacity-60">NAME</label>
                                            <input
                                                type="text"
                                                name="entry.795368653"
                                                required
                                                className="w-full bg-brand-dark border border-brand-cream/20 rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold tracking-widest opacity-60">EMAIL</label>
                                            <input
                                                type="email"
                                                name="entry.1131498052"
                                                required
                                                className="w-full bg-brand-dark border border-brand-cream/20 rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors"
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold tracking-widest opacity-60">SUBJECT</label>
                                        <select
                                            name="entry.108611783"
                                            required
                                            className="w-full bg-brand-dark border border-brand-cream/20 rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors appearance-none text-brand-cream/80"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Order Support">Order Support</option>
                                            <option value="Wholesale">Wholesale</option>
                                            <option value="Careers">Careers</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold tracking-widest opacity-60">MESSAGE</label>
                                        <textarea
                                            name="entry.294570227"
                                            rows={6}
                                            required
                                            className="w-full bg-brand-dark border border-brand-cream/20 rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-brand-gold text-brand-dark font-bold text-lg py-4 rounded-lg hover:bg-white transition-colors"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                        </ElectricBorder>
                    </div>

                </div>

                {/* FAQ Snippet */}
                <div className="mt-24 border-t border-brand-cream/10 pt-16 text-center">
                    <h2 className="text-2xl font-heading font-bold mb-4">LOOKING FOR QUICK ANSWERS?</h2>
                    <p className="opacity-60 mb-8">Check out our FAQ page for information on shipping, returns, and more.</p>
                    <Link href="/learn/faq" className="inline-flex items-center text-brand-gold font-bold tracking-widest hover:gap-2 transition-all">
                        VISIT FAQ <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
