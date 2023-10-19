// Import required packages/modules
const express = require('express');
const path = require('path');
const noteData = require('./db/db.json')
const uuid = require('uuid')

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
app.get('/api/notes', (req, res) => {
    console.info(`GET /api/notes`);
    res.status(200).json(noteData)
});

// POST request to add a note
app.post('/api/notes', (req, res) => {
    // Log that a note was received
    console.info(`${req.method} request received to add new note`);

    const { title, text } = req.body;
    // If required properties are present
    if (title && text) {
        // Variable for saved note object
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        // res.json returns data including a status message indicating success
        res.status(201).json(response);
    } else {
        // Throws an error if either the title or text is missing
        res.status(500).json('Error in posting note');
    }
});







// Wildcard returns index.html
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Event listener for port
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

