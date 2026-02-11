const fs = require('fs');
const path = require('path');

const PRODUCTS_DIR = path.join(__dirname, '../public/products');

if (!fs.existsSync(PRODUCTS_DIR)) {
    fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
}

const products = [
    { filename: 'ethiopia.jpg', color: '#1B4332', text: 'ETHIOPIA' },
    { filename: 'colombia.jpg', color: '#D4AF37', text: 'COLOMBIA' },
    { filename: 'kenya.jpg', color: '#8B4513', text: 'KENYA' },
    { filename: 'blend.jpg', color: '#0B0907', text: 'BLEND' },
    { filename: 'drip.jpg', color: '#2C3E50', text: 'DRIP BAGS' },
    { filename: 'dripper.jpg', color: '#5D4037', text: 'DRIPPER' },
];

products.forEach((product) => {
    const svg = `
  <svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${product.color}"/>
    <rect width="100%" height="100%" fill="black" opacity="0.2"/>
    <text x="50%" y="50%" font-family="sans-serif" font-size="30" fill="white" text-anchor="middle" dy=".3em" style="font-weight:bold; letter-spacing: 4px;">${product.text}</text>
    <rect x="20" y="20" width="360" height="460" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>
  </svg>
  `;

    // Save as SVG even though we call it .jpg in the db, browsers can handle it or we can rename in db. 
    // Actually, to be safe, let's just save as .jpg if we had a converter, but we don't.
    // We will save as .svg and I will update the DB script? 
    // No, the DB script is already run.
    // I will save as .svg and update the code to handle it?
    // Easier: Save as .svg, but name the file .jpg. Browsers often sniff content type, but it's risky.
    // Better: Save as .svg and tell user to run a simplistic DB update? No.
    // Best: Just create SVGs and rename the files in the DB script?
    // Let's just output them as .svg and I will update the local fallback data to .svg, 
    // AND I will explicitly ask the user to run a small SQL update to fix extensions if they want.
    // OR, I can just save the file as `ethiopia.jpg` but with SVG content. 
    // Most modern browsers will NOT render SVG content in an img tag if the extension is .jpg.

    // modification: I'll just change the SQL script for future runs, but for now I need to fix the data.
    // Actually, I can just write a quick component in Next.js that handles image errors?
    // No, let's just make the filenames match.

    // Okay, I will save them as .svg.
    // And I will provide a "fix_images.sql" script for the user to run.

    fs.writeFileSync(path.join(PRODUCTS_DIR, product.filename.replace('.jpg', '.svg')), svg);
});

console.log('Product placeholders generated.');
