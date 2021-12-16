const { Router } = require('express');
const router = Router();
const {Activity, Country} = require("../db")


router.post('/', async function (req, res){
    const { id, name, difficulty, duration, season, countries } = req.body; 
  try {
     const activityCreated = await Activity.create({
      id, name, difficulty, duration, season
    })
    let countryFinded = await Country.findAll({
      where:{
        id: countries 
      }
    })
    await activityCreated.addCountry(countryFinded)
    // paisOb.addActivity(actividad); 
    res.json("Actividad guardada")
    return res.status(200).json( "Actividad Guardada", (activityCreated));
    
    //actividad.addpaisOb(Activity);
    
    
  } catch (error) {
    console.log(error);
  }
  })

// // router.get("/", (req, res) => {
// //     return Activity.findAll()
// //     .then(activities => {
// //         res.send(activities)
// //     })
// // })

// // router.post("/", async (req, res, next) => {
// //     const {name, difficulty, duration, season, countryId} = req.body
// //     try {
// //         let activity = await Activity.create({
// //             name,
// //             difficulty,
// //             duration,
// //             season,
// //         })
// //         if(countryId){
// //             await activity.addCountry(countryId)
//         }
//         return res.send(activity)
//     } catch(err) {
//         next(err)
//     }
// })

// try { //intenta
//       let newActivity = await Activity.create({ //crea nueva activity con la siguiente informacion y espera el tiempo necesario 
//         name: name,
//         duration: duration,
//         difficulty: difficulty,
//         season: season,
//       })
//       await newActivity.addCountry(countryId) //agrega la newactivity al country(pasando id del country como parametro)
//     } catch (err) { //si no lo logra muestra error
//     console.error(err)
//   }

// })
// 

module.exports = router;