const fs = require('fs');
let s = fs.readFileSync('lib/content/es.ts', 'utf8');
const lines = s.split('\n');
let result = [];
let buffer = '';
let openQuote = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let sqCount = 0;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "'" && line[j-1] !== '\\') sqCount++;
  }
  if (sqCount % 2 === 1) {
    if (openQuote) {
      buffer += line + '\\n';
    } else {
      buffer = line;
      openQuote = true;
    }
  } else {
    if (openQuote) {
      result.push(buffer + line);
      buffer = '';
      openQuote = false;
    } else {
      result.push(line);
    }
  }
}
if (openQuote && buffer) result.push(buffer);
fs.writeFileSync('lib/content/es.ts', result.join('\n'));
console.log('Fixed. Lines:', result.length);
