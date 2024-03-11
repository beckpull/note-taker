// Import necessary packages and files
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

// Define port - either the port found in the processing enviornment or 3001 if none found
const PORT = process.env.PORT || 3001;

// Start new instance of Express.js
const app = express();

// My custom middleware to make console logs for each request a different color for easier viewing
app.use(clog);

// Rest of the middleware used, first two for JSON data amd third for /api route handling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Define 'public' folder as base folder - therefore making index.html our default page.
app.use(express.static('public'));

// First route handler for /notes to go to notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

// In case user types an incorrect note ID or other portion of URL, this will bring them back to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

// Added this so I could use Postman to post new notes as well -> posting straight into API route.
app.post('/api/notes', (req, res) => {
    // console.log(req.body);
    const{ title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: generateUniqueId({
                length: 4,
                useLetters: true,
                useNumbers: true
            }),
        }
        // console.log(newNote);
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully. Note ID is: ${newNote.id}`);
    } else res.errored('No note to add.');

});


// Initialize app to listen at specified port/Render URL
app.listen(PORT, () =>
    console.log(`App is listening at https://note-taker-uxz2.onrender.com & https://localhost:${PORT}`)
);