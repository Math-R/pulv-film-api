const connection = require('../../connection')

module.exports={
    getAllRecruiters:(req,res)=>{
        connection.query('SELECT * FROM Recruiter ',function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    },
    getRecruiter: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM Recruiter WHERE id_user ='+id+'',
            function(error,result){
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