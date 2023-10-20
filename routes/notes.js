const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET request to read db.json and return notes as json
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data))
    });    
});

// POST request to add a note
notes.post('/', (req, res) => {
    // Log that a note was received
    console.info(`${req.method} request received to add new note`);
    console.log(req.body);
    const { title, text } = req.body;
    // If required properties are present
    if (title && text) {
        // Variable for saved note object
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json')

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
    };
});

// Delete note based on unique ID

notes.delete('/:id', (req, res) => {
    const notesID = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id !== notesID);

            writeToFile('./db/db.json', result)

            res.json(`Item ${notesID} has been deleted`)

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});

module.exports = notes
