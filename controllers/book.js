const fs = require('fs');
const path = require('path');
let books = [
   ];

function handleGetAllBooks(req, res){
    return res.render("books",{
        books,
    });
}

function handleGetBookById(req, res){
    const bookId = req.params.bookId;
    const book = books.find(e => e.id === bookId);
    res.json({ book });
}

function handleCreateBook(req, res){
    const book = req.body;
    books.push(book);
    res.json({book}); 
}

function handleDeleteBook(req, res){
    const bookId = req.params.bookId;
    books = books.filter(e => e.id !== bookId);
    res.json({ message: `Book with id ${bookId} deleted successfully` });   
}

module.exports = {
    handleGetAllBooks,
    handleGetBookById,
    handleCreateBook,
    handleDeleteBook
};