const fs = require('fs');
const server = require('server');
/// FILES

// Read file 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// Write file
// const textOut = `This is what we know about the avocado: ${textIn}. \nCreate on ${new Date(Date.now()).toDateString()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('Write successful!');

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('ERROR:' + err.message);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             if(err) return console.log(err.message);
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written !');
//             })
//         })
//     })
// })
// console.log('Will read file !');

// SERVER
server.createServer((req, res) =>{
    res.end('Hello World');
})