
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const QuestaoDia = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

QuestaoDia.associate = (models) => {
    // QuestaoDia.belongsTo(models.usuario, {
    //     foreignKey: {
    //         name: 'id_usuario'
    //     },
    //     as: 'usuario'
    // })

    // QuestaoDia.belongsToMany(models.hardskill, {
    //     through: 'aluno_hardskill',
    //     timestamps: false,
    //     foreignKey: {
    //         name: 'id_aluno'
    //     },
    //     as: 'hardskills'
    // })
    
}


module.exports = QuestaoDia;