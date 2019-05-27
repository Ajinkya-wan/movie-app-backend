var axios = require('axios')

exports.moviesByCriteria = async (criteria) => {
    let result =[]
    const url = `http://www.omdbapi.com/?s=${criteria}&apikey=7698ad04`;
     await axios.get(url+"&page=1")
    .then(res => {
        result = res['data']['Search']
    })
        if(result) {
            await axios.get(url+"&page=2")
                .then(res => {
                    res['data']['Search'].forEach(async results => {
                        await result.push(results)
                    })

                })
        }
     return result
}
