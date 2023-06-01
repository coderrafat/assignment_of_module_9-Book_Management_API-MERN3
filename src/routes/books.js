const { createBook, getBooks, getSingleBook, deleteSingleBook, updateSingleBook } = require('../controllers/books');
const router = require('express').Router();




//Get all book..
router.get('/books', getBooks);

//get a specific one book by ID in database..
router.get('/books/:id', getSingleBook);

//Create a new book in Database..
router.post('/createbook', createBook);

//update a single book by id
router.put('/books/update/:id', updateSingleBook);

//delete a single book by id
router.delete('/books/delete/:id', deleteSingleBook)



module.exports = router;