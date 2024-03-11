// Define router as instance of express.Router()
const router = require('express').Router();

// Import notes.js for /notes route handling
const notesRouter = require('./notes');

// Define /notes route as what will be handled by notes.js functionaliity
router.use('/notes', notesRouter);

// Export router
module.exports = router;