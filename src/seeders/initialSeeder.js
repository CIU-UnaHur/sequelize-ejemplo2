const { Autor, Libro } = require('../models')

async function initialAutoresLibros(){
    try {
        const autor1 = await Autor.create({nombre: 'Juan Gomez', nacionalidad: 'Argentina'})
        const autor2 = await Autor.create({nombre: 'Pablo Perez', nacionalidad: 'Chile'})
        const autor3 = await Autor.create({nombre: 'Lucas Gomez', nacionalidad: 'Argentina'})

        const libro1 = await Libro.create({ titulo: 'Cien Años de Soledad', fechaPublicacion: new Date('1967-06-05') })
        const libro2 = await Libro.create({ titulo: 'La Casa de los Espíritus', fechaPublicacion: new Date('1982-03-01') })

        await autor1.addLibro(libro1)
        await autor2.addLibros([libro1, libro2])             

        console.log('Los datos y las relaciones fueron creados exitosamente')
    } catch (error) {
        console.log('Error al crear los datos: ', error)
    }
}

module.exports = initialAutoresLibros