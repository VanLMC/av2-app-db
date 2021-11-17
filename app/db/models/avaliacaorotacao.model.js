
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const AvaliacaoRotacao = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

AvaliacaoRotacao.associate = (models) => {
    AvaliacaoRotacao.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })   

    AvaliacaoRotacao.belongsTo(models.atividadeAvaliativa, {
        foreignKey: {
            name: 'id_atividade_avaliativa'
        },
        as: 'atividade avaliativa'
    })   
}


module.exports = AvaliacaoRotacao;