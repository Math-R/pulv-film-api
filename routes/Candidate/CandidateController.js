const connection = require('../../connection')

module.exports={
    getAllCandidates:(req,res)=>{
        connection.query('SELECT * FROM Candidate ',function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    },
    getCandidate: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM Candidate WHERE id_user ='+id+'',
            function(error,result){
                if (error){
                    res.status(405).send('There is no such user here !')
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