const knex = require('../../query.js')

module.exports= {
    getSerieGenre: (req, res, next) =>{
        const {id} = req.params
        let genres_id = []
        knex.where('series_id', id)
            .select('genres_id')
            .from('series_genres')
            .then(result => {
                result.forEach(ele => {
                    genres_id.push(ele['genres_id'])
                })
                knex.select()
                    .from('genres')
                    .whereIn('id', genres_id)
                    .then(result => res.send(result))
                    .catch(next)
            })
            .catch(next)
    },
    getMovieGenre: (req, res, next) =>{
        const {id} = req.params
        let genres_id = []
        knex.where('movies_id', id)
            .select('genres_id')
            .from('movies_genres')
            .then(result => {
                result.forEach(ele => {
                    genres_id.push(ele['genres_id'])
                })
                knex.select()
                    .from('genres')
                    .whereIn('id', genres_id)
                    .then(result => res.send(result))
                    .catch(next)
            })
            .catch(next)
    },
    getGenre: (req, res, next) =>{
        const {id, table} = req.params
        if (table){
            let table_id = []
            knex.where('genres_id', id)
                .select(table+'_id')
                .from(table+'_genres')
                .then(result => {
                    result.forEach(ele => {
                        table_id.push(ele[table+'_id'])
                    })
                    knex.select()
                        .from(table)
                        .whereIn('id', table_id)
                        .then(result => res.send(result))
                        .catch(next)
                })
                .catch(next)
        } else {
            knex.where('id', id).select().from('genres').then(result => res.send(result))
                .catch(next)
        }
    },
    getAllGenre: (req, res, next) =>{
        knex.select().from('genres').then(result => res.send(result))
            .catch(next)
    },
}

