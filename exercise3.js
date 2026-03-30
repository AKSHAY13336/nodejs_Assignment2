const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    let file = '';

    if (req.url === '/api/exercise3/pages/home') file = 'home.html';
    if (req.url === '/api/exercise3/pages/about') file = 'about.html';
    if (req.url === '/api/exercise3/pages/contact') file = 'contact.html';

    if (file) {
        const data = fs.readFileSync(path.join(__dirname, 'lib', file));
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    }
}).listen(80);
