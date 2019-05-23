var axios = require('axios')

exports.moviesByCriteria = async (criteria) => {
    // console.log(criteria)
     let result
    const url = `http://www.omdbapi.com/?s=${criteria}&apikey=7698ad04`;
     await axios.get(url)
    .then(res => {
        result = res['data']['Search']
    })

     return result
}
