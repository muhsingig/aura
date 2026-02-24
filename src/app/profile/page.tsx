"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { appSupabase } from "@/lib/supabase";
import Lanyard from "@/components/Lanyard";

export default function Profile() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [profile, setProfile] = useState<any>(null);
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [website, setWebsite] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const getProfile = async () => {
            try {
                // Safety check in case the Supabase client is not initialized
                if (!appSupabase) {
                    console.error("Supabase client is not configured");
                    router.push("/");
                    return;
                }

                const { data: { session } } = await appSupabase.auth.getSession();

                if (!session) {
                    router.push("/");
                    return;
                }

                setUser(session.user);

                const { data, error, status } = await appSupabase
                    .from('profiles')
                    .select(`id, username, full_name, website, avatar_url`)
                    .eq('id', session.user.id)
                    .single();

                if (error && status !== 406) {
                    throw error;
                }

                if (data) {
                    setProfile(data);
                    setFullName(data.full_name || "");
                    setUsername(data.username || "");
                    setWebsite(data.website || "");
                }
            } catch (error) {
                console.error("Error loading profile:", error);
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, [router]);

    const updateProfile = async () => {
        try {
            setUploading(true);

            if (!appSupabase) {
                throw new Error("Supabase client is not configured");
            }

            const { data: { session } } = await appSupabase.auth.getSession();
            if (!session) throw new Error('No user on the session!');

            const updates = {
                id: session.user.id,
                full_name: fullName,
                username,
                website,
                updated_at: new Date().toISOString(),
            };

            const { error } = await appSupabase.from('profiles').upsert(updates);

            if (error) {
                throw error;
            }
            alert('Profile updated!');
            setProfile(updates);
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile!');
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-gold font-heading tracking-widest animate-pulse">LOADING PROFILE...</div>;

    return (
        <div className="min-h-screen bg-brand-dark overflow-hidden relative">
            <div className="absolute top-24 left-0 w-full text-center z-10 pointer-events-none">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-cream/10 tracking-tighter uppercase">
                    WELCOME {fullName || username || user?.email?.split('@')[0]}
                </h1>
                <p className="text-brand-gold font-sans tracking-widest text-sm mt-2 opacity-60">
                    Interact with your digital pass
                </p>
            </div>

            <Lanyard userId={fullName || username || user?.email || "MEMBER"} />

            {/* Edit Profile Controls */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-20 flex flex-col items-center gap-4">
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-8 py-3 bg-brand-dark/80 backdrop-blur-md border border-brand-gold/30 text-brand-gold font-heading tracking-widest text-sm rounded shadow-lg hover:bg-brand-gold hover:text-brand-dark transition-all transform hover:scale-105"
                    >
                        EDIT PROFILE
                    </button>
                ) : (
                    <div className="bg-brand-dark/90 backdrop-blur-md p-6 rounded-lg border border-brand-gold/20 shadow-xl w-full animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-brand-gold font-heading text-xl text-center">EDIT PROFILE</h2>
                            <button onClick={() => setIsEditing(false)} className="text-brand-cream/50 hover:text-brand-cream">
                                ✕
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-brand-cream/50 text-[10px] uppercase tracking-widest mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded px-3 py-2 text-brand-cream text-sm focus:outline-none focus:border-brand-gold/50"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-brand-cream/50 text-[10px] uppercase tracking-widest mb-1">Username (for Lanyard)</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded px-3 py-2 text-brand-cream text-sm focus:outline-none focus:border-brand-gold/50"
                                    placeholder="Public Username"
                                />
                            </div>
                            {/* <div>
                                <label className="block text-brand-cream/50 text-[10px] uppercase tracking-widest mb-1">Website</label>
                                <input 
                                    type="text" 
                                    value={website} 
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded px-3 py-2 text-brand-cream text-sm focus:outline-none focus:border-brand-gold/50"
                                    placeholder="https://..."
                                />
                            </div> */}
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 py-3 border border-brand-cream/10 text-brand-cream/60 font-bold font-sans tracking-widest text-xs rounded hover:bg-brand-cream/5 transition-colors"
                                >
                                    CANCEL
                                </button>
                                <button
                                    onClick={async () => {
                                        await updateProfile();
                                        setIsEditing(false);
                                    }}
                                    disabled={uploading}
                                    className="flex-1 py-3 bg-brand-gold text-brand-dark font-bold font-sans tracking-widest text-xs rounded hover:bg-brand-cream transition-colors disabled:opacity-50"
                                >
                                    {uploading ? 'SAVING...' : 'SAVE'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <button
                onClick={() => router.push('/')}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-cream/50 hover:text-brand-gold transition-colors font-sans text-xs tracking-widest uppercase z-20"
            >
                Back to Home
            </button>
        </div>
    );
}
