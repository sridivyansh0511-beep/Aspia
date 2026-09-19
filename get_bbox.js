const fs = require('fs');
const svg = fs.readFileSync('public/a-world-class--ultra-minimalist-logo-design-for-a--2-2.svg', 'utf8');
const paths = svg.match(/d="([^"]+)"/g).map(s => s.slice(3, -1));
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

paths.forEach(p => {
  // Regex to match any number including decimals
  const matches = p.match(/-?[0-9]*\.?[0-9]+/g);
  if (matches) {
    for (let i = 0; i < matches.length; i += 2) {
      const x = parseFloat(matches[i]);
      const y = parseFloat(matches[i+1]);
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
});
console.log(`Min X: ${minX}, Min Y: ${minY}`);
console.log(`Max X: ${maxX}, Max Y: ${maxY}`);
console.log(`ViewBox: ${Math.floor(minX)} ${Math.floor(minY)} ${Math.ceil(maxX - minX)} ${Math.ceil(maxY - minY)}`);
