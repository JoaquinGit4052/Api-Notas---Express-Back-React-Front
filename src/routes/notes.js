const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/create', notesController.create);
router.get('/get/:userId', notesController.userNotes);
router.delete('/delete/:noteId', notesController.delete);
router.get('/all', notesController.all);

module.exports = router;