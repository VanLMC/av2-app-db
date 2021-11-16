const models = require('../db/models');



exports.index = async () => {
    const result = await models.questao.findAll({include: ['usuario']});
    return result;
}


exports.show = async (id) => {
    const result = await models.questao.findByPk(id);
    if(!result){
        return {message: "questao nao encontrada"};
    }
    return result;
}


exports.store = async (questao) => {
    const result = await models.questao.create(questao);
    return result;
}


exports.update = async (id, questao) => {
    const result = await models.questao.update(questao, {where: {id: id}});
    return result;
}

exports.destroy = async (id) => {
    const result = await models.questao.destroy({where: {id: id}});
    return result;
}