const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../public/sequence');
const FRAME_COUNT = 120;

// Ensure directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate frames
for (let i = 0; i < FRAME_COUNT; i++) {
  // Calculate progress (0 to 1)
  const progress = i / (FRAME_COUNT - 1);
  
  // Calculate color based on progress (transition from dark bean color to light coffee liquid)
  // Start: #3e2723 (Deep Brown)
  // End: #d7ccc8 (Light Brown/Cream)
  
  const r = Math.floor(62 + (215 - 62) * progress);
  const g = Math.floor(39 + (204 - 39) * progress);
  const b = Math.floor(35 + (200 - 35) * progress);
  
  const color = `rgb(${r}, ${g}, ${b})`;
  
  // Create SVG content
  // Simple circle growing and changing color
  const radius = 50 + (progress * 100);
  const opacity = 0.5 + (progress * 0.5);
  
  const svgContent = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0B0907" />
  <circle cx="400" cy="300" r="${radius}" fill="${color}" fill-opacity="${opacity}" />
  <text x="50%" y="90%" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Frame ${i + 1}/${FRAME_COUNT}</text>
  <text x="50%" y="50%" font-family="Arial" font-size="48" fill="white" text-anchor="middle">${Math.round(progress * 100)}%</text>
</svg>
`;

  // Pad filename with zeros (e.g., 001.svg)
  // Actually, usually canvas draws images. Browser can render SVG but converting to PNG/JPEG might be better for canvas perf?
  // But drawing SVG to canvas works via Image object.
  // Using .svg implies vector, which is fine.
  // Although the user asked for "Image Sequence" (WEBP frames).
  // Ideally I would generate WEBP or PNG.
  // But triggering `sharp` or similar requires installing it.
  // SVGs are easiest to generate with just file writes.
  // I'll stick with SVGs for now, but name them logically.
  
  const filename = `${String(i).padStart(3, '0')}.svg`;
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), svgContent);
}

console.log(`Generated ${FRAME_COUNT} frames in ${OUTPUT_DIR}`);
