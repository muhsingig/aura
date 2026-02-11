import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import './GooeyNav.css';

interface NavItem {
    label: string;
    href?: string;
    onClick?: () => void;
    subItems?: NavItem[];
}

interface GooeyNavProps {
    items: NavItem[];
    animationTime?: number;
    particleCount?: number;
    initialActiveIndex?: number;
}

const GooeyNav = ({
    items,
    animationTime = 600,
    particleCount = 12,
    initialActiveIndex = 0
}: GooeyNavProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    const filterRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

    // Animation constants
    const particleDistances = [40, 60];
    const particleR = 40;
    const timeVariance = 200;
    const colors = [1, 2, 3];

    const noise = (n = 1) => n / 2 - Math.random() * n;

    const getXY = (distance: number, pointIndex: number, totalPoints: number) => {
        const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    };

    const createParticle = (i: number, t: number, d: number[], r: number) => {
        let rotate = noise(r / 10);
        return {
            start: getXY(d[0], particleCount - i, particleCount),
            end: getXY(d[1] + noise(7), particleCount - i, particleCount),
            time: t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    };

    const makeParticles = (element: HTMLElement) => {
        const d = particleDistances;
        const r = particleR;
        const bubbleTime = animationTime * 2 + timeVariance;
        element.style.setProperty('--time', `${bubbleTime}ms`);

        for (let i = 0; i < particleCount; i++) {
            const t = animationTime * 2 + noise(timeVariance * 2);
            const p = createParticle(i, t, d, r);
            element.classList.remove('active');

            setTimeout(() => {
                const particle = document.createElement('span');
                const point = document.createElement('span');
                particle.classList.add('particle');
                particle.style.setProperty('--start-x', `${p.start[0]}px`);
                particle.style.setProperty('--start-y', `${p.start[1]}px`);
                particle.style.setProperty('--end-x', `${p.end[0]}px`);
                particle.style.setProperty('--end-y', `${p.end[1]}px`);
                particle.style.setProperty('--time', `${p.time}ms`);
                particle.style.setProperty('--scale', `${p.scale}`);
                particle.style.setProperty('--color', `var(--color-${p.color}, #D4AF37)`);
                particle.style.setProperty('--rotate', `${p.rotate}deg`);

                point.classList.add('point');
                particle.appendChild(point);
                element.appendChild(particle);
                requestAnimationFrame(() => {
                    element.classList.add('active');
                });
                setTimeout(() => {
                    try {
                        if (element.contains(particle)) {
                            element.removeChild(particle);
                        }
                    } catch {
                        // Do nothing
                    }
                }, t);
            }, 30);
        }
    };

    const updateEffectPosition = (element: HTMLElement) => {
        if (!containerRef.current || !filterRef.current || !textRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const pos = element.getBoundingClientRect();

        const styles = {
            left: `${pos.x - containerRect.x}px`,
            top: `${pos.y - containerRect.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`
        };
        Object.assign(filterRef.current.style, styles);
        Object.assign(textRef.current.style, styles);
        textRef.current.innerText = element.innerText;
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, index: number) => {
        // Note: Do not e.preventDefault() if it's a link unless we want to stop nav (but we might want local nav)
        // For local actions (onClick), we might prevent default?

        // e.currentTarget refers to the <a> or <button> tag
        const clickTarget = e.currentTarget;
        // The visual logic assumes 'li' is the container, but let's check the original code
        // Original: const liEl = e.currentTarget; (where onClick was on the <a>)
        // Actually original code put onClick on <a>.

        // We want the positioning to be relative to the <li>? No, the original updated based on the <a>/<li>
        // "const liEl = e.currentTarget;" -> actually it was on <a> in the original JSX: <a onClick={...}> 
        // And updateEffectPosition(liEl). So the blob matches the <a> tag size.

        setActiveIndex(index);
        updateEffectPosition(clickTarget as HTMLElement);

        if (filterRef.current) {
            const particles = filterRef.current.querySelectorAll('.particle');
            particles.forEach(p => filterRef.current?.removeChild(p));
        }

        if (textRef.current) {
            textRef.current.classList.remove('active');
            void textRef.current.offsetWidth; // trigger reflow
            textRef.current.classList.add('active');
        }

        if (filterRef.current) {
            makeParticles(filterRef.current);
        }
    };

    useEffect(() => {
        if (!navRef.current || !containerRef.current) return;
        // We need to find the active element relative to the items
        // The structure is nav > ul > li > (a or button)
        const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
        const activeEl = activeLi?.querySelector('a, button') as HTMLElement;

        if (activeEl) {
            updateEffectPosition(activeEl);
            textRef.current?.classList.add('active');
        }

        const resizeObserver = new ResizeObserver(() => {
            const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
            const currentActiveEl = currentActiveLi?.querySelector('a, button') as HTMLElement;
            if (currentActiveEl) {
                updateEffectPosition(currentActiveEl);
            }
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [activeIndex, items]); // Added items dependency to re-calc if menu changes



    return (
        <div className="gooey-nav-container" ref={containerRef}>
            {/* SVG Filter for the Gooey Effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>

            {/* Goo Layer - Filter applied here */}
            <div className="goo-layer">
                {/* The blob background match */}
                <span className="effect filter" ref={filterRef} />
            </div>

            <nav>
                <ul ref={navRef}>
                    {items.map((item, index) => (
                        <li key={index} className="group">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    onClick={(e) => {
                                        handleClick(e, index);
                                        item.onClick?.();
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        handleClick(e, index);
                                        item.onClick?.();
                                    }}
                                >
                                    {item.label}
                                </button>
                            )}

                            {/* Dropdown */}
                            {item.subItems && (
                                <div className="nav-dropdown">
                                    {item.subItems.map((sub, subIndex) => (
                                        <Link key={subIndex} href={sub.href || '#'} onClick={sub.onClick}>
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            {/* The text overlay match - Outside goo layer to remain sharp */}
            <span className="effect text" ref={textRef} />
        </div>
    );
};

export default GooeyNav;
