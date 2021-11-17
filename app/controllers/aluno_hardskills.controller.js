
const models = require('../db/models');


exports.store = async (a,id) => {

    const model = await models.aluno.findOne({
        where: {id_usuario: id},
        include: {association: 'hardskills'}
    });

    let refsHardSkills = [];

    for (let h in a.hardskills){
        let hardSkill = a.hardskills[h];
    
       const [result] = await models.hardskill.findOrCreate({
            where: hardSkill
        });
        refsHardSkills.push(result.id);
    }
     model.addHardSkill(refsHardSkills);

    return true;
}


exports.destroy = async (id) => {
    const model = await models.aluno.findOne({
        where: {id_usuario: id},
        include: {association: 'hardskills'}
    });

    let refsHardSkills = [];


    for (let h in aluno.hardskills){
        let hardSkill = aluno.hardskills[h];
        

       const [result] = await models.hardskill.findOrCreate({
            where: hardSkill
        });

        console.log(result)
        console.log('resuld.it', result.id);
        refsHardSkills.push(result.id);
    }


    model.removeHardSkill(refsHardSkills);

    return true;
}