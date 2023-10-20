// Import required packages/modules
const express = require('express');
const routes = require('./routes')

// Set server port
const PORT = process.env.PORT || 3001;

// Import Express framework
const app = express();

// Middleware for parsing application/json
app.use(express.json());
// Middleware for urlencoded data
app.use(express.urlencoded({ extended: true }));
// Enable static file serving
app.use(express.static('public'));

app.use(routes)


// Event listener for port
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

