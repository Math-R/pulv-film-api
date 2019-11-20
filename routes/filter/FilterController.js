const knex = require('../../query.js')

module.exports= {
    getInfoByNames: (req, res, next) =>{
        const {col,  table} = req.params
        knex(table).orderBy(col, 'asc').then(result => res.send(result))
            .catch(next)
    },
}

