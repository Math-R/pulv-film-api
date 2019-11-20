const knex = require('../../query.js')

module.exports = {
    getInfoByNames: (req, res, next) => {
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
}

