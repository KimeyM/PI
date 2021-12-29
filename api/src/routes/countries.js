const { Router } = require('express');
const { Op } = require('sequelize');
const {Country, Activity} = require("../db");
const router = Router(); 

// GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado

// GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
router.get('/', async (req, res) => { //funcion asincrona
    try { //intenta
        const { name } = req.query; //traigo el name de req.query porque la consigna indica la ruta /countries?name="..."
        if(!name){ //si no se pasa ningun name, es decir /countries
        const allCountries = await Country.findAll({ //enconrtar todo lo de country
            order: [['name', 'ASC']], //ordernarlo por nombre de manera asc
            // attributes: ['name', 'flag', 'continent'] 
        })
        res.send(allCountries) //como response paso lo encontrado arriba
    }else if(name){ //en caso de tener nombre
        const countrySearch = await Country.findAll({ //encontrar en todo lo de country
            where: { //donde:
                name:   {[Op.iLike]: `%${name}%`}, //name se aproximadamente parecido a lo que se pasa
                //[Op.iLike]: '%hat',   // ILIKE '%hat' (case insensitive)
                //
            },
            include: { //incluyendo
                model: Activity //el model activity
            }
        })
        if(countrySearch.length > 0){ //si en la ultima busqueda se encontro algo
            res.json(countrySearch); // responder con lo que se encontro
        } else { //si no
            res.status(404).send("Country not found"); //error y msje
        }
    }
    } catch (error) {console.error(error)} //en caso de no pode hacer dnada de lo que sta dentro del try, con
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

module.exports = router;