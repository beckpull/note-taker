const api = require('express').Router();
const data = require('../db/db.json');
// const { v4: uuidv4 } = require('uuid');
const { readFile, appendFile } = require('fs/promises');
const { readFromFile } = require('../../../local-github-files-edited/11-Express/01-Activities/28-Stu_Mini-Project/Main/helpers/fsUtils');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
api.get('/',(req, res) => {
    readFile(data).then((data) => res.json(JSON.parse(data)));
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client and give each note a unique id when it's saved.

api.post('/', (req, res) => {
    console.log(req.body);
})