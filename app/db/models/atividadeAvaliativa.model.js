const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const AtividadeAvaliativa = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }


}, {
    sequelize,
    tableName: name,
})


AtividadeAvaliativa.associate = models => {

    AtividadeAvaliativa.belongsToMany(models.aluno, {
        through: 'hardskill_atividade_avaliativa',
        timestamps: false,
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'hardskills'
    })

    AtividadeAvaliativa.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })

    AtividadeAvaliativa.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'grupos'
    })

    AtividadeAvaliativa.hasMany(models.avaliacaorotacao, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'avaliacao360'
    })

}

module.exports = AtividadeAvaliativa;