const express = require('express');
// Import notes and html modules
const notesRouter = require('./notes');
const htmlRouter = require('./html');

const app = express();

//Attach notesRouter to /api/notes and htmlRouter to root
app.use('/api/notes', notesRouter);
app.use(htmlRouter)

module.exports = app;