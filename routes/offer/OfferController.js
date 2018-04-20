const connection = require('../../connection')

module.exports={
    getAllOffers:(req,res)=>{
        connection.query('SELECT * FROM Offer ',function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    }
}