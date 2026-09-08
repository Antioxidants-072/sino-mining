const fs = require('fs');
let s = fs.readFileSync('lib/content/es.ts', 'utf8');
const lines = s.split('\n');
const out = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  // Count unescaped single quotes
  let sqCount = 0;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "'" && line[j-1] !== '\\') sqCount++;
  }
  if (sqCount % 2 === 0) {
    out.push(line);
    i++;
    continue;
  }
  // Odd: open quote. Join all subsequent lines until quotes balance.
  let merged = line;
  let j = i + 1;
  let totalSq = sqCount;
  while (j < lines.length && totalSq % 2 !== 0) {
    let lineSq = 0;
    for (let k = 0; k < lines[j].length; k++) {
      if (lines[j][k] === "'" && lines[j][k-1] !== '\\') lineSq++;
    }
    totalSq += lineSq;
    if (lineSq % 2 === 1) {
      // The next line closes the string - merge without separator
      merged += lines[j];
      out.push(merged);
      i = j + 1;
      break;
    } else {
      // Still inside string, join with literal \n
      merged += '\\n' + lines[j];
      j++;
    }
  }
  if (j >= lines.length && totalSq % 2 !== 0) {
    out.push(merged);
    i = j;
  }
}
fs.writeFileSync('lib/content/es.ts', out.join('\n'));
console.log('Fixed. Lines:', out.length);
