const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const SoftSkill = sequelize.define(name, {
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


SoftSkill.associate = models => {

    SoftSkill.belongsToMany(models.aluno, {
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'aluno_softskill'
        },
        as: 'alunos'
    })

}

module.exports = SoftSkill;