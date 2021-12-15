const { Router } = require('express');
const router = Router();
const {Activity, Country} = require("../db")

/*
POST /activity:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos
*/
// router.post("/", async (req, res) => {
//     try {
//         const { name, difficulty, duration, season, countries } = req.body
//         const actCreated = await Activity.create({
//             id, name, difficulty, duration, season
//           })
//           let paisOb = await Country.findAll({
//             where:{
//               id: countries 
//             }
//           })
//     } catch (error) {console.error(error)}
// })


module.exports = router;