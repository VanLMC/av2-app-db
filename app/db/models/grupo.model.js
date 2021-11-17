
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Grupo = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Grupo.associate = (models) => {

    Grupo.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'tarefas'
    })

    Grupo.belongsToMany(models.aluno, {
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'alunos'
    })

    Grupo.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })

    Grupo.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'atividade avaliativa'
    })

}


module.exports = Grupo;