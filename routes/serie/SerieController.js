const knex = require('../../query.js')

module.exports= {
    getAllSeries : (req, res, next) =>{
        knex.select().from('series').then(result => res.send(result))
            .catch(next)
    },
    getSerie: (req, res, next) =>{
        const {id} = req.params
        knex.where('id', id).select().from('series').then(result => res.send(result))
            .catch(next)
    },
    getAllSeriesByNames: (req, res, next) =>{
        const {col} = req.params
        knex('series').orderBy(col, 'asc').then(result => res.send(result))
        .catch(next)
},
}

