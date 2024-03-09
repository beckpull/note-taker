const express = require('express');
const fs = require('fs');

// Setup Express.js Server: Start by setting up an Express.js server. This server will handle HTTP requests and serve your Note Taker application.
    // Setting up Express.js Server: Use express() to create an instance of the Express.js server. Define a port for the server to listen on.

const app = express();
const PORT = 3001;

// Define Routes: Define routes for handling different HTTP requests. For example, you'll need routes to serve the landing page, notes page, handle saving notes, and retrieving existing notes.
    // Defining Routes: Define routes for handling different URLs. For example, you'll have a route for the landing page (/), notes page (/notes), and API endpoints for saving and retrieving notes (/api/notes).

app.get('/', (res, req) => {
    
})

app.get('*', (res, req) => {
    
})

app.get('/notes', (res, req) => {
    
})

app.get('/api/notes', (res, req) => {
    
})

// Create Endpoints: Implement endpoints for each route defined in the previous step. These endpoints will handle the logic for rendering HTML pages, saving notes to a JSON file, retrieving notes from the file, etc.
    // Creating Endpoints: Implement functions to handle requests to these routes. For example, when a user saves a note, you'll need an endpoint that receives the note data, saves it to a JSON file, and sends a response back.
// Integrate Frontend: Connect the frontend of the Note Taker application with the backend. Ensure that the frontend can interact with the backend endpoints for saving and retrieving notes.
    // Integrating Frontend: Ensure that the frontend HTML files are served by Express.js. You can use express.static middleware to serve static files like HTML, CSS, and JavaScript.
// Implement Frontend Functionality: Implement frontend functionality to allow users to enter new notes, save them, view existing notes, and delete notes (bonus).
    // Implementing Frontend Functionality: Write JavaScript code to handle user interactions on the frontend. For example, when the user clicks the "Save" button, send an AJAX request to the backend to save the note.
// Deploy to Heroku: Once everything is working locally, deploy the application to Heroku so that it can be accessed online.
    // Deploying to Heroku: Create a Heroku account if you don't have one already. Follow Heroku's documentation to deploy your Express.js application to Heroku.

app.listen(PORT, () => {
    console.log(`App is listening at https://localhost:${PORT}`);
})