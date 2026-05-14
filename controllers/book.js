let books = [{
    id: '1',
    title: 'The Great Gatsby',
},
{
    id : '2',
    title: "To Kill a Mockingbird"
} ];

function handleGetAllBooks(req, res){
    res.json({ books });
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