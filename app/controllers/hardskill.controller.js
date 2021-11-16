

const models = require('../db/models');

exports.index = async () => {
    const result = await models.hardskill.findAll();
    return result;
}


exports.show = async (id) => {
    const result = await models.hardskill.findByPk(id);
    if(!result){
        return {message: "hardskill nao encontrada"};
    }
    return result;
}


exports.store = async (hardskill) => {
    const result = await models.hardskill.create(hardskill);
    return result;
}


exports.update = async (id, hardskill) => {
    const result = await models.hardskill.update(hardskill, {where: {id: id}});
    return result;
}

exports.destroy = async (id) => {
    const result = await models.hardskill.destroy({where: {id: id}});
    return result;
}