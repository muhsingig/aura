"use client";

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './CardNav.css';

interface NavLink {
    label: string;
    href: string;
    ariaLabel?: string;
    onClick?: (e: React.MouseEvent) => void;
}

interface NavItem {
    label: string;
    bgColor: string;
    textColor: string;
    links: NavLink[];
}

interface CardNavProps {
    logo?: string;
    logoAlt?: string;
    items: NavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
}

const CardNav = ({
    logo = "/logo.png", // Default logo if not provided
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
    baseColor = '#fff',
    menuColor,
    buttonBgColor,
    buttonTextColor,
    ctaLabel = "Points",
    onCtaClick
}: CardNavProps) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPointerEvents = contentEl.style.pointerEvents;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;
                const wasDisplay = contentEl.style.display;

                // Ensure we can measure it
                contentEl.style.visibility = 'hidden';
                contentEl.style.display = 'grid'; // Ensure it's not 'none' from CSS if that was happening
                contentEl.style.position = 'absolute';
                contentEl.style.height = 'auto';

                const contentHeight = contentEl.scrollHeight;

                // Restore
                contentEl.style.visibility = wasVisible;
                contentEl.style.pointerEvents = wasPointerEvents;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;
                contentEl.style.display = wasDisplay;

                const topBar = 60;
                const padding = 32; // 1rem top + 1rem bottom approx
                return topBar + contentHeight + padding;
            }
        }
        // Desktop measurement could be dynamic too, but keeping user's default logic implies specific layout
        // Let's make it dynamic for desktop too if possible, but fallback to 260 safe
        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (contentEl) {
            return 60 + contentEl.scrollHeight + 32;
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ease, items]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                // Recreate timeline with new height
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1); // Jump to end since it's open
                    tlRef.current = newTl;
                }
            } else {
                // Recreate timeline for future opening
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play();
        } else {
            setIsHamburgerOpen(false);
            tl.reverse();
            tl.eventCallback('onReverseComplete', () => {
                setIsExpanded(false);
                // Clean up callback
                tl.eventCallback('onReverseComplete', null);
            });
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
                <div className="card-nav-top">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: menuColor || '#000' }}
                    >
                        <div className="hamburger-line" />
                        <div className="hamburger-line" />
                    </div>

                    <div className="logo-container">
                        {/* If logo is an image URL */}
                        <img src={logo} alt={logoAlt} className="logo" />
                        {/* If logo was a component/text, we'd handle it differently, but prompt implies img src */}
                    </div>

                    <button
                        type="button"
                        className="card-nav-cta-button"
                        onClick={onCtaClick}
                        style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    >
                        {ctaLabel}
                    </button>
                </div>

                <div className="card-nav-content" aria-hidden={!isExpanded}>
                    {(items || []).slice(0, 3).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label">{item.label}</div>
                            <div className="nav-card-links">
                                {item.links?.map((lnk, i) => (
                                    <a
                                        key={`${lnk.label}-${i}`}
                                        className="nav-card-link"
                                        href={lnk.href}
                                        aria-label={lnk.ariaLabel}
                                        onClick={lnk.onClick}
                                    >
                                        <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                        {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
