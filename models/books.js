const {Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: {
        type: String,
       
    },
    author: {
        type: String,
      
    }
});

const Book = new model('Book', BookSchema);

module.exports = Book;