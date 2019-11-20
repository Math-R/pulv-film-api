const knex = require('../../query.js')

module.exports= {
    getAllEpisodes : (req, res, next) =>{
        knex.select().from('episodes').then(result => res.send(result))
            .catch(next)
    },
    getAllEpisodesFormSerie: (req, res, next) =>{
        const {id} = req.params
        knex.where('series_id', id).select().from('episodes').then(result => res.send(result))
            .catch(next)
    },
    getEpisode: (req, res, next) =>{
        const {id} = req.params
        knex.where('id', id).select().from('episodes').then(result => res.send(result))
            .catch(next)
    },
}

