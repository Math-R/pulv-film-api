const knex = require('../../query.js')

module.exports = {
    getOrder: (req, res, next) => {
        let {table, col, order} = req.params
        if (!col) {
            col = 'id'
        }
        if (!order) {
            order = 'asc'
        }
        knex(table).orderBy(col, order).then(result => res.send(result))
            .catch(next)
    },
    getInfoWithSearch: (req, res, next) => {
        let {table, search, col} = req.params
        if (!col) {
            col = 'name'
        }
        knex(table).where(col, 'like', '%'+search+'%').then(result => res.send(result))
            .catch(next)
    },
}

