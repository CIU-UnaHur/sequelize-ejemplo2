const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Autor extends Model {}

Autor.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'autor',
    tableName: 'autores'
})

module.exports = Autor