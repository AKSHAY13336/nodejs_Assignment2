const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/api/exercise2') {
        const data = fs.readFileSync(path.join(__dirname, 'lib', 'users.txt'), 'utf-8').split('\n').slice(1);

        let table = '<table border="1"><tr><th>Name</th><th>Age</th><th>Gender</th><th>City</th></tr>';
        data.forEach(line => {
            const [name, age, gender, city] = line.split('|').map(x => x.trim());
            table += `<tr><td>${name}</td><td>${age}</td><td>${gender}</td><td>${city}</td></tr>`;
        });
        table += '</table>';

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(table);
    }
}).listen(80);
