const moviesService = require("../services/movies.servie");
const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 5 * 60 })

exports.getMovies = async (req, res) => {
    try {
        let reqData = Object.assign({}, req.body);
        let criteria = reqData['searchTerm']
        let cachedMovies = cache.get(criteria)

        if (cachedMovies) {
            // console.log("cachedMovies")
            res.status(200).send(cachedMovies)
        } else {
            let movieList = await moviesService.moviesByCriteria(criteria)
            cache.set(criteria, movieList)
            if (movieList) {
                // console.log("New movies")
                res.status(200).send(movieList)
            } else {
                res.status(200).send([])
            }
        }
    } catch (error) {
        res.status(304).send("Error", error.message, error.code),
            error
    }
};
