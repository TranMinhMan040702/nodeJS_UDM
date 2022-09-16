const fs = require('fs');
const http = require('http');
const url = require('url');
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
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const server = http.createServer((req, res) =>{
    const url = req.url;

    // Overview page
    if (url === '/' || url === '/overview') {
        
        const cardHTML = dataObj.map(el => replaceTemplate(tempCard, el));
        res.end('Hello OVERVIEW');
    
    // Product page
    } else if (url === '/product') {
        res.end('Hello PRODUCT');

    // API
    } else if (url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })
        res.end(data);
    
    // Not found
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not found</h1>');
    }
})

server.listen('8000', '127.0.0.1');