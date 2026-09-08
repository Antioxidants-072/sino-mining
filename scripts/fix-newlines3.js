const fs = require('fs');
let s = fs.readFileSync('lib/content/es.ts', 'utf8');
const lines = s.split('\n');
const out = [];
let inString = false;
let buffer = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!inString) {
    // Check if this line ends in middle of string
    let sqCount = 0;
    for (let j = 0; j < line.length; j++) {
      if (line[j] === "'" && line[j-1] !== '\\') sqCount++;
    }
    if (sqCount % 2 === 1) {
      // odd - starts a string and doesn't close on this line
      buffer = line;
      inString = true;
    } else {
      out.push(line);
    }
  } else {
    // We're inside a string - look for the closing quote
    let sqCount = 0;
    let firstQuoteIdx = -1;
    for (let j = 0; j < line.length; j++) {
      if (line[j] === "'" && line[j-1] !== '\\') {
        sqCount++;
        if (firstQuoteIdx === -1) firstQuoteIdx = j;
      }
    }
    if (sqCount === 0) {
      // No quote on this line, must be continuation
      buffer += '\\n' + line;
    } else {
      // Has at least one quote
      // Check if this line just contains content before closing quote
      // E.g. `m³'` has 1 quote (closes)
      // E.g. `'m³', 'kg'` has 2 quotes (closes and opens new)
      if (sqCount % 2 === 1) {
        // Odd - this line closes the string
        buffer += '\\n' + line;
        out.push(buffer);
        buffer = '';
        inString = false;
      } else {
        // Even - this line closes then opens (e.g. 'm³', 'kg' has sq=2)
        // Find where first quote is; everything before closes, after is new
        const before = line.substring(0, firstQuoteIdx);
        const after = line.substring(firstQuoteIdx);
        buffer += '\\n' + before + "'"; // close the previous string
        out.push(buffer);
        buffer = after; // start new string on this line (might also be open)
        // Check if `after` ends in middle of new string
        let afterSq = 0;
        for (let j = 0; j < after.length; j++) {
          if (after[j] === "'" && after[j-1] !== '\\') afterSq++;
        }
        if (afterSq % 2 === 1) {
          inString = true;
        } else {
          out.push(after);
          buffer = '';
          inString = false;
        }
      }
    }
  }
}
if (buffer) out.push(buffer);
fs.writeFileSync('lib/content/es.ts', out.join('\n'));
console.log('Fixed. Lines:', out.length);
