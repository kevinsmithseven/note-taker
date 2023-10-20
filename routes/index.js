const express = require('express');

const notesRouter = require('./notes');
const htmlRouter = require('./html');

const app = express();

app.use('/api/notes', notesRouter);
app.use(htmlRouter)

module.exports = app;