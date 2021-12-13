const { Router } = require('express');
const { Op, Sequelize } = require('sequelize');
const {Country, Activity} = require("../db");
const router = Router(); 


// GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
router.get('/', (req, res) => {
    return Country.findAll({ //enconrtar todo lo de country
        order: [['name', 'ASC']], //ordernarlo por nombre asc
        attributes: ['name'] //solo me pide listado de paises(paso solo el nombre)
    })
    .then(countries => { //una vez que lo tenga lo guardo en countries
        res.send(countries) //y como response mando lo recibido
    })
});


// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get('/:id', async (req, res) => { //funcion asincrona
    try {
        const { id } = req.params //saco id de los params
        const countryID = await Country.findByPk(id.toUpperCase(), { //busco por primary key, convierto lo que me pasan en mayus para que funcione siempre, no se cuanto tarde
            include:{ model: Activity } //incluyo el model activity para que muestre las actividades pertenecientes a este pais
        })
        res.send(countryID) //como response paso el country encontrado por id con sus datoscorrespondients, incluso las activities
    } catch (error) {
        console.log(error);
    }
});


// GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
router.get('/?name', async (req, res) => {
    try {
        const { name } = req.query
        const countryName = Country.findOne({ where: { name: name } })
        res.send(countryName)
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;