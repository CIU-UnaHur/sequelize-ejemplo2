const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Libro extends Model {}

Libro.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'libro'
})

module.exports = Libro