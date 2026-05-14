const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

router.get('/books', bookController.handleGetAllBooks);
router.get('/books/:bookId', bookController.handleGetBookById);
router.post('/books', bookController.handleCreateBook);
router.delete('/books/:bookId', bookController.handleDeleteBook);


module.exports = router;