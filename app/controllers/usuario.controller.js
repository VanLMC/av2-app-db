const models = require('../db/models');



exports.index = async () => {
    const result = await models.usuario.findAll({include: ['aluno']});
    return result;
}


exports.show = async (id) => {
    const result = await models.usuario.findByPk(id);
    if(!result){
        return {message: "usuario nao encontrado"};
    }
    return result;
}


exports.store = async (usuario) => {
    const result = await models.usuario.create(usuario,{
        include: ['aluno', 'questoes']
    });
    return result;
}


exports.update = async (id, usuario) => {
    const result = await models.usuario.update(usuario, {where: {id: id}});
    return result;
}

exports.destroy = async (id) => {
    const result = await models.usuario.destroy({where: {id: id}});
    return result;
}