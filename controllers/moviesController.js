const moviesService = require("../services/movies.servie");


exports.getMovies = async (req, res) => {
    try {
      let reqData = Object.assign({}, req.body);
      let criteria = reqData['searchTerm']
        let movieList = await moviesService.moviesByCriteria(criteria)
        if (movieList) {
                res.send(movieList)
        } else {
                res.send([])
        }
    } catch (error) {
            res.send("Error"),
            error
    }
};
