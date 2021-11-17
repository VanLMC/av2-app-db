
const models = require('../db/models');
const sequelize = require('../db/index').getConnection();

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
        const [results, metadata] = await sequelize.query(`INSERT INTO aluno_hardskill VALUES  (${model.id_usuario}, ${result.id})`);
    }


    return true;
}


exports.destroy = async (aluno, id) => {
    // const model = await models.aluno.findOne({
    //     where: {id_usuario: id},
    //     include: {association: 'hardskills'}
    // });

    let refsHardSkills = [];
    console.log(aluno.hardskills);

    for (let h in aluno.hardskills){
        let hardSkill = aluno.hardskills[h];
        

       const [result] = await models.hardskill.findOrCreate({
            where: hardSkill
        });

        console.log(result)
        console.log('resuld.it', result.id);
        const [results, metadata] = await sequelize.query(`
        DELETE FROM aluno_hardskill 
        WHERE aluno_hardskill.id_hardskill = ${result.id} 
        and aluno_hardskill.id_aluno = ${id}`);
    }



    return true;
}