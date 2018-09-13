var express = require('express');
var router = express.Router();
var authentication = require('../middlewares/authentication')
var { createQuote, deleteQuote, getAllQuote } = require('../controllers/quotes')

/* GET users listing. */
router.get('/', getAllQuote)

router.post('/', authentication, createQuote)
router.delete('/:id', authentication, deleteQuote)


module.exports = router;
