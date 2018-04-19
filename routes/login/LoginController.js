const connection = require('../../connection')

module.exports={
    login:(req,res)=>{
        const email = req.body.email
        const password = req.body.password
        connection.query('SELECT * FROM User WHERE email=\''+email+'\' AND password=\''+password+'\'',function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    }
}