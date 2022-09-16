const fs = require('fs');

const outText = fs.readFileSync('/txt/input.txt', 'utf-8');
console.log(outText);