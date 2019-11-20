const knex = require('../../query.js')

module.exports= {
    getAllUsers : (req, res) =>{
        /*connection.query('SELECT * FROM User', function(error,result){
            if (error) throw error
            res.status(200).send(result)
        })*/
        knex.select().from('movies')
    },
}

