const fs = require('fs');

// Read file 
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
// Write file
const textOut = `This is what we know about the avocado: ${textIn}. \nCreate on ${new Date(Date.now()).toDateString()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('Write successful!');
