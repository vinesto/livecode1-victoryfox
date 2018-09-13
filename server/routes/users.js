var express = require('express');
var router = express.Router();
var { register, login } = require('../controllers/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', register)
router.post('/login', login)

module.exports = router;
