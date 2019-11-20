const knex = require('../../query.js')

module.exports= {
    getAllUsers : (req, res, next) =>{
        knex.select().from('movies').then(result => res.send(result))
            .catch(next)
    },
}

