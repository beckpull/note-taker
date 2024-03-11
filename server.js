const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

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

app.listen(PORT, () =>
    console.log(`App is listeneing at https://note-taker-uxz2.onrender.com`)
);