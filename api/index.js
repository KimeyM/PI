//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios'); //para llamar a la api
const server = require('./src/app.js'); 
const { conn, Country, Activity } = require('./src/db.js'); //traigo los models desde db
// const {activitiesBulk} = require("./activitiesBulk"); //traigo este archivo

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => { //sera asincrona
  try {
    let res = await Country.findAll() //busca todo lo que hay en Country, pongo await para que continue luego de completar la busqueda, la cual no se cuanto demorara
    if(res.length === 0){ //si esta vacio: try(intenta), catch(si no)
      try {
        let response = await axios.get("http://restcountries.com/v3.1/all") //llamo a la api
        let api = response.data //deposito en api los datos obtenidos en el llamado anterior
        api && api.map(async country => //si existe api, mapearlo(crear un nuevo arreglo)
        await Country.findOrCreate({ //busca y si no existe crea Country, el await va porquee no se cuanto va a tardar en buscar, asi que lo espero
          where: { //con la siguiente informacion
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.continents ? country.continents[0] : "Continent not found",
            capital: country.capital ? country.capital[0] : "Capital not found",
            subregion: country.subregion ? country.subregion : "Subregion not found",
            area: country.area,
            population: country.population || 0
          }
        }))
      } catch (err) { //si no lo logra
        console.error(err) //muestra error
      }
    }
  } catch (err) { //si no logra nada de lo anterior
    console.error(err) //muestra error
  }
  //NO SE POR QUE CREO EL ARCHIVO ACTIVITIESBULK NI ESTA FUNCION. EN TEORIA LAS ACTIVIDADES ESTAN VACIAS Y SE PUEDEN IR CREANDO NADA MAS
  // try { //intenta
  //   activitiesBulk.map(async (el) => { //mapear activitiesBulk, de manera asincrona
  //     let newActivity = await Activity.create({ //crea nueva activity con la siguiente informacion y espera el tiempo necesario 
  //       name: el.name,
  //       duration: el.duration,
  //       difficulty: el.difficulty,
  //       season: el.season,
  //     })
  //     await newActivity.addCountry(el.countryId) //agrega la newactivity al country(pasando id del country como parametro)
  //   })
  // } catch (err) { //si no lo logra muestra error
  //   console.error(err)
  // }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});