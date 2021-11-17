
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const AtividadeAvaliativa = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

AtividadeAvaliativa.associate = (models) => {
    // AtividadeAvaliativa.belongsTo(models.usuario, {
    //     foreignKey: {
    //         name: 'id_usuario'
    //     },
    //     as: 'usuario'
    // })

    // AtividadeAvaliativa.belongsToMany(models.hardskill, {
    //     through: 'aluno_hardskill',
    //     timestamps: false,
    //     foreignKey: {
    //         name: 'id_aluno'
    //     },
    //     as: 'hardskills'
    // })
    
}


module.exports = AtividadeAvaliativa;