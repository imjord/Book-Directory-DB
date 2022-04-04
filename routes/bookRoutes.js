const router = require('express').Router();
const {getAllBooks, postBook} = require('../controllers/books');

router.get('/', getAllBooks).post('/',postBook);


module.exports = router;