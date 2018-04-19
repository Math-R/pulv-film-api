const connection = require('../../connection.js')
const joi = require('joi')

module.exports= {
    getAllBusiness : (req, res) =>{
        connection.query('SELECT * FROM Business', function(error,result){
            if (error) throw error
            res.status(200).send(result)     
        })
    },
    getBusiness: (req, res) =>{
        const {id} = req.params
        connection.query(
            'SELECT * FROM Business WHERE id_business ='+id+'',
            function(error,result){
                if (error){
                    res.status(404).send('There is no such business here !')
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
    deleteBusiness:(req, res) =>{
        const {id}=req.params
        connection.query('DELETE FROM Business WHERE id_business ='+id+'', function(error,result){
            if(error){
                res.status(404).send('Business not found')
            }else{
                res.status(200).send('Business deleted')}
        })
    },
    createBusiness:(req,res) =>{
        const data = req.body
        connection.query('INSERT INTO Business SET?',data,
            function(error,result){
                if(error)throw error
                res.status(200).send(result)
            }
        )
    }
}
    
