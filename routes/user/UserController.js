const connection = require('../../connection.js')


module.exports= {
    getAllUsers : (req, res) =>{
        connection.query('SELECT * FROM User', function(error,result){
            if (error) throw error
            res.status(200).send(result)            
        })
    },
    getUser: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM User WHERE id_user ='+id+'',
            function(error,result){
                if (error)throw error
                res.status(200).send(result)
            }
        )
    }
    
}