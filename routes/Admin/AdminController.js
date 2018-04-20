const connection = require('../../connection')

module.exports={
    getAllAdmins:(req,res)=>{
        connection.query('SELECT * FROM Administrator ',function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    },
    getAdmin: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM Administrator WHERE id_user ='+id+'',
            function(error,result){
                console.log('mon erreur',error)
                console.log('mon res', result)
                if (error){
                    res.status(405).send('Bad request')
                }
                else if(result.length <1){
                    res.status(204).send('No content')
                }
                else{
                    res.status(200).send(result)
                }
            }
        )
    }
}