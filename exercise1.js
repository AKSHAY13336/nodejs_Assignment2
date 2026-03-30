const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/api/exercise1') {
        const data = fs.readFileSync(path.join(__dirname, 'lib', 'index.html'));
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    }
}).listen(80);
