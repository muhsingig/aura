import React, { useEffect, useRef } from 'react';

/**
 * ElectricBorder - An animated glowing border wrapper.
 * (Inspired by @BalintFerenczy)
 */
interface ElectricBorderProps {
    children: React.ReactNode;
    color?: string;
    speed?: number;
    chaos?: number;
    thickness?: number;
    style?: React.CSSProperties;
    className?: string;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
    children,
    color = '#c59e49',
    speed = 0.1,
    chaos = 0.01,
    thickness = 2,
    style = {},
    className = '',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let time = 0;
        let animationFrameId: number;

        const resize = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Create a glowing, chaotic border effect
            ctx.lineWidth = thickness;
            ctx.strokeStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();

            const perimeter = (width + height) * 2;
            const step = 5; // Path resolution

            // Calculate animated offset
            const offset = (time * speed * 200) % perimeter;

            let currentDist = 0;

            const addPoint = (x: number, y: number, length: number) => {
                if (currentDist > perimeter) return;

                // Apply chaos
                const jitterX = (Math.random() - 0.5) * chaos * 100 * Math.sin(time + currentDist * 0.01);
                const jitterY = (Math.random() - 0.5) * chaos * 100 * Math.cos(time + currentDist * 0.01);

                // We only draw a segment of the border based on time
                const distFromOffset = Math.abs(currentDist - offset);
                const tailLength = perimeter * 0.3; // 30% of perimeter

                const isVisible = currentDist >= offset - tailLength && currentDist <= offset;
                const isWrapVisible = offset - tailLength < 0 && currentDist > perimeter + (offset - tailLength);

                if (isVisible || isWrapVisible) {
                    const opacity = isWrapVisible
                        ? (currentDist - (perimeter + (offset - tailLength))) / tailLength
                        : (currentDist - (offset - tailLength)) / tailLength;

                    ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
                    ctx.lineTo(x + jitterX, y + jitterY);
                } else {
                    ctx.moveTo(x + jitterX, y + jitterY);
                }

                currentDist += length;
            };

            // Traverse top edge
            for (let x = 0; x <= width; x += step) addPoint(x, 0, step);
            // Right edge
            for (let y = 0; y <= height; y += step) addPoint(width, y, step);
            // Bottom edge
            for (let x = width; x >= 0; x -= step) addPoint(x, height, step);
            // Left edge
            for (let y = height; y >= 0; y -= step) addPoint(0, y, step);

            ctx.stroke();

            // Draw secondary glow
            ctx.lineWidth = thickness * 0.5;
            ctx.shadowBlur = 20;
            ctx.stroke();

            time += speed;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, speed, chaos, thickness]);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block ${className}`}
            style={{ ...style }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-10"
                style={{ borderRadius: style.borderRadius }}
            />
            <div className="relative z-0">
                {children}
            </div>
        </div>
    );
};

export default ElectricBorder;
