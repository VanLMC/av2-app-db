
const models = require('../db/models');


exports.store = async (a,id) => {

    const model = await models.aluno.findOne({
        where: {id_usuario: id},
        include: {association: 'hardskills'}
    });

    // console.log('logs')
    // console.log(model)
    // console.log(model.addHardSkill)

    let refsHardSkills = [];

    for (let h in a.hardskills){
        let hardSkill = a.hardskills[h];
    
       const [result] = await models.hardskill.findOrCreate({
            where: hardSkill
        });
        refsHardSkills.push(result.id);
    }
     model.addHardSkill(refsHardSkills);

    // try{
    //      //console.log('refsHardSkills')
    //     // console.log(model.prototype)
       
    // }
    // catch(err){
    //     return false;
    // }
    

    return true;
}


// exports.destroy = async (id) => {
//     const model = await models.aluno.findOne({
//         where: {id_usuario: id},
//         include: {association: 'hardskills'}
//     });

//     let refsHardSkills = [];


//     for (let h in aluno.hardskills){
//         let hardSkill = aluno.hardskills[h];
        

//        const [result] = await models.hardskill.findOrCreate({
//             where: hardSkill
//         });

//         console.log(result)
//         console.log('resuld.it', result.id);
//         refsHardSkills.push(result.id);
//     }


//     model.removeHardSkill(refsHardSkills);

//     return true;
// }