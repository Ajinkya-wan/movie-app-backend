
var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController")


router.post('/',moviesController.getMovies);

module.exports = router;
