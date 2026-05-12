const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let books = [{
    id: '1',
    title: 'The Great Gatsby',
} ];

app.get('/books', function(req, res){
    res.json({ books });
});

app.get('/books/:bookId', function(req, res){
    const bookId = req.params.bookId;
    const book = books.find(e => e.id === bookId);
    res.json({ book });
});

app.post('/books', function(req, res){
    const book = req.body;
    books.push(book);
    res.json({book}); 
});

app.delete('/books/:bookId', function(req, res){
    const bookId = req.params.bookId;
    books = books.filter(e => e.id !== bookId);
    res.json({ message: `Book with id ${bookId} deleted successfully` });   
});



app.listen(8000, () =>{console.log(`Server is running on port 8000`)});