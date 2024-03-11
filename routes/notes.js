// Import necessary packages and configure new instance of Express.js Router
const notes = require('express').Router();
// NPM Package to generate random ID using letters and numbers
const generateUniqueId = require('generate-unique-id');
// fsUtils package from Express.js module 11 classwork (copy/pasted)
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
notes.get('/',(req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET /api/notes/noteID should read the db.json file and return the note with the ID requested if it exists.
notes.get('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
       const filtered = json.filter((note) => note.id === noteID);
       return filtered.length > 0 ? res.json(filtered) : res.json(`No note with ID ${noteID}`);
    });
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client and give each note a unique id when it's saved.
notes.post('/', (req, res) => {
    console.log(req.body);
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
        console.log(newNote);
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully. Note ID is: ${newNote.id}`);
    } else res.errored('No note to add.');
});

// DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
notes.delete('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
    .then((notes) => JSON.parse(notes))
    .then((notes) => {
        const newNotes = notes.filter((note) => note.id !== noteID);
        writeToFile('./db/db.json', newNotes);
        res.json(`Note with ID ${noteID} has been deleted.`)
    })
})

module.exports = notes;