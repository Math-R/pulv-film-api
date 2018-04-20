const connection = require('../../connection.js')

module.export = {
    getSkill:(req,res) => {
        const {id} = req.params
        const sql = 'SELECT s.id_skill, s.name, c.id_candidate FROM Skill s LEFT JOIN Candidate_Skill cs ON s.id_skill = cs.id_skill LEFT JOIN Candidate c ON cs.id_candidate = c.id_candidate WHERE c.id_candidate = '+id+' GROUP BY c.id_candidate'
    }
}