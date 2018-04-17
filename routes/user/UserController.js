const connection = require('../../connection.js')


module.exports= {
    getAllUsers : (req, res) =>{
        connection.query('SELECT * FROM User', function(error,result){
            if (error) throw error
            res.send(result)            
        })
    },
    
}