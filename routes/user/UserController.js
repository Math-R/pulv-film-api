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
    },
    deleteUser:(req, res) =>{
        const {id}=req.params
        connection.query('DELETE FROM User WHERE id_user ='+id+'', function(error,result){
            if(error){
                res.status(404).send('User not found')
            }else{
                res.status(200).send('User deleted')}
        })
    },
    createUser:(req,res) =>{
        const data = req.body
        connection.query('INSERT INTO User SET?',data,
            function(error,result){
                if(error)throw error
                res.status(200).send(result)
            }
        )
    },
    ChoiceUserCandidate:(req,res) => {
        const {id}=req.params
        connection.query('INSERT INTO Candidate (id_user) VALUES ('+id+')',
            function(error, result) {
                if(error)throw error
                res.status(200).send(result)
            }
        )
    },
    ChoiceUserRecruiter:(req,res) => {
        const data = req.body
        connection.query('INSERT INTO Recruiter SET?',data,
            function(error,result) {
                if(error)throw error
                res.status(200).send(result)
            }
        )
    }
}

