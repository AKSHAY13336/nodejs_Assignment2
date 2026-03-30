const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------- Exercise 1 -------------------
app.get('/api/exercise1', (req, res) => {
    const filePath = path.join(__dirname, 'lib', 'index.html');
    res.status(200).sendFile(filePath);
});

// ------------------- Exercise 2 -------------------
app.get('/api/exercise2', (req, res) => {
    const filePath = path.join(__dirname, 'lib', 'users.txt');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        const lines = data.trim().split('\n');

        let table = '<table border="1">';

        // Header
        const headers = lines[0].split('|').map(h => h.trim());
        table += '<tr>';
        headers.forEach(h => table += `<th>${h}</th>`);
        table += '</tr>';

        // Rows
        for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split('|').map(c => c.trim());
            table += '<tr>';
            cols.forEach(c => table += `<td>${c}</td>`);
            table += '</tr>';
        }

        table += '</table>';

        res.status(200).send(table);
    });
});

// ------------------- Exercise 3 -------------------
app.get('/api/exercise3/pages/:page', (req, res) => {
    const page = req.params.page;
    const validPages = ['home', 'about', 'contact'];

    if (!validPages.includes(page)) {
        return res.status(404).send("Page not found");
    }

    const filePath = path.join(__dirname, 'lib', `${page}.html`);
    res.status(200).sendFile(filePath);
});

// ------------------- Exercise 4 -------------------
app.use(express.static('public'));

// ------------------- Server -------------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});