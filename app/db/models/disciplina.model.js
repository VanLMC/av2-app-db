
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Disciplina = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Disciplina.associate = (models) => {
    // Disciplina.belongsTo(models.usuario, {
    //     foreignKey: {
    //         name: 'id_usuario'
    //     },
    //     as: 'usuario'
    // })

    // Disciplina.belongsToMany(models.hardskill, {
    //     through: 'aluno_hardskill',
    //     timestamps: false,
    //     foreignKey: {
    //         name: 'id_aluno'
    //     },
    //     as: 'hardskills'
    // })
    
}


module.exports = Disciplina;