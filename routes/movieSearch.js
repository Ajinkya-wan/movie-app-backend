
var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController")

// router.get('/', function(req, res, next) {
// res.send('API is working properly');
// });


router.post('/',moviesController.getMovies);

module.exports = router;
