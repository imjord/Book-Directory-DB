const router = require('express').Router();
const {getAllBooks, postBook, updateBook, deleteBook, getSingleBook} = require('../controllers/books');

router.get('/', getAllBooks).post('/',postBook);

router.get('/:id', getSingleBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);


module.exports = router;