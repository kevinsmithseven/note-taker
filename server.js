// Import required packages/modules
const express = require('express');
const path = require('path');
const noteData = require('./db/db.json')

// Set server port
const PORT = 3001;

// Import Express framework
const app = express();

// Middleware for parsing application/json
app.use(express.json());
// Middleware for urlencoded data
app.use(express.urlencoded({ extended: true }));
// enable static file serving
app.use(express.static('public'));

// GET request returning notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// GET request to read db.json and return notes as json
app.get('/api/notes', (req, res) => res.json(noteData));







// Wildcard returns index.html
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Event listener for port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

