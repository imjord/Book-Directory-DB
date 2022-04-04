const Book = require('../models/books');

const BookController = {

    // get all books 
    getAllBooks(req,res){
        Book.find().then(books => {
            res.send(books);
    
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error when retriving book"
            })
        })
    },

    // create a book 

    postBook(req,res) {
        console.log(req.body)
          // validate body request 
    // if(!req.body.author){
    //     return res.status(400).send({
    //         message: "Book cannot be empty!"
    //     })
    // }


        const newBook = new Book({
            title: req.body.title,
            author: req.body.author
        })

     // save in database 
     newBook.save()
     .then(data => {
         res.json(data);
     }).catch(err => {
         res.status(500).send({
             message: err.message || "error when creating book "
         })
        })
        
    }

}


module.exports = BookController;