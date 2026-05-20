const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    Bookname:{
        type: String,
        required: true,
    },
    Author:{
        type: String,
       
    },
    Price:{
        type: Number,
        required: true,
    }
})

const Books = mongoose.model('Book',BookSchema);

module.exports = Books;