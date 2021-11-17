const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Hardskill = sequelize.define(name, {
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


Hardskill.associate = models => {

    Hardskill.belongsToMany(models.aluno, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'alunos'
    })

    Hardskill.belongsToMany(models.aluno, {
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'disciplinas'
    })

    Hardskill.belongsToMany(models.aluno, {
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'turmas'
    })

    Hardskill.belongsToMany(models.aluno, {
        through: 'hardskill_atividade_avaliativa',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'Atividade avaliativa'
    })

    Hardskill.hasMany(models.questao, {
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'questoes'
    })

}

module.exports = Hardskill;