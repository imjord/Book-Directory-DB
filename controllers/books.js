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

    // get a single book by id 

    getSingleBook(req,res){
        Book.findById({_id: req.params.id}).then(data=> res.json(data));
    },

    // update a book
    updateBook(req,res){
       Book.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).then(data => res.json(data))

    },

    // delete a book

    deleteBook(req,res){
        Book.deleteOne({_id: req.params.id}, {new:true}).then(data => res.json(data))
    },

    // create a book 

    postBook(req,res) {
        console.log(req.body)
    


        const newBook = new Book({
            title: req.body.title,
            author: req.body.author
        })
        console.log(req.body)
     // save in database 
     newBook.save()
     .then(data => {
         res.send(data);
     }).catch(err => {
         res.status(500).send({
             message: err.message || "error when creating book "
         })
        })
        
    }

}





module.exports = BookController;