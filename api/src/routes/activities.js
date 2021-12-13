const { Router } = require('express');
const router = Router();
const {Activity, Country} = require("../db")

/*
POST /activity:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos
*/































// router.get("/", (req, res) => {
//     return Activity.findAll()
//     .then(activities => {
//         res.send(activities)
//     })
// })

// router.post("/", async (req, res, next) => {
//     const {name, difficulty, duration, season, countryId} = req.body
//     try {
//         let activity = await Activity.create({
//             name,
//             difficulty,
//             duration,
//             season,
//         })
//         if(countryId){
//             await activity.addCountry(countryId)
//         }
//         return res.send(activity)
//     } catch(err) {
//         next(err)
//     }
// })


module.exports = router;