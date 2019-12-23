var express = require('express')
var router = express.Router()

let { userLogin } = require('../controller/userController')
let { listBooks, updateBook, addBooks, deleteBook } = require('../controller/booksController')


// user login route
router.post('/login', userLogin )

//list of books
router.get('/listBooks', listBooks )

//add books
router.post('/addBooks', addBooks )

//update book
router.put('/updateBook', updateBook )

//delete book
router.delete('/deleteBook', deleteBook )


module.exports = router