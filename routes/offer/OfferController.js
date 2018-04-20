const connection = require('../../connection')

module.exports={
    getAllOffers:(req,res)=>{
        connection.query('SELECT * FROM Offer ',function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    },
    getOfferCandidates:(req,res)=>{
        const {id}= req.params
        let query = 'SELECT c.id_candidate, u.name, u.surname, count(cs.id_skill) as skill_connus ,(SELECT count(id_skill) FROM offer_skill os WHERE id_offer = '+id+' ) as skill_demandés FROM user u RIGHT JOIN candidate c ON u.id_user= c.id_user RIGHT JOIN candidate_skill cs ON c.id_candidate = cs.id_candidate WHERE cs.id_skill IN (SELECT id_skill FROM offer_skill os WHERE id_offer ='+id+') GROUP BY c.id_candidate order by skill_connus DESC'
        connection.query(query, function(error,result){
            if(error)throw error
            res.status(200).send(result)
        })
    }
}