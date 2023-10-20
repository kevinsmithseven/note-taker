const html = require('express').Router();
const path = require('path');


// GET request returning notes.html
html.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Wildcard returns index.html
html.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);


module.exports = html