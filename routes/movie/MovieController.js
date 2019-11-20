const knex = require('../../query.js')

module.exports= {
    getAllMovies : (req, res, next) =>{
        knex.select().from('movies').then(result => res.send(result))
            .catch(next)
    },
    getMovie : (req, res, next) =>{
        const {id} = req.params
        knex.where('id', id).select().from('movies').then(result => res.send(result))
            .catch(next)
    },
}

