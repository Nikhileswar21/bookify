const Book = require('../models/book');
let books = [
   ];

async function handleGetAllBooks(req, res){
    const bookInDb = await Book.find();
    return res.render("books",{
        books: bookInDb,
    });
}

async function handleGetBookById(req, res){
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    console.log(`book retrieved with id ${bookId}`);
    res.render("book", {book});
    
}

async function handleCreateBook(req, res){
    const book = req.body;
    await Book.create(book);
    res.status(201).json("success"); 
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