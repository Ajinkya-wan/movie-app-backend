
var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController")


router
    .get('/api/search',moviesController.getMovies);
module.exports = router;
