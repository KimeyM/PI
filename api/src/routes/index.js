const { Router } = require('express');
const { Activity, conn } = require('../db')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoute = require("./countries")
const activitiesRoute = require("./activities")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRoute);
router.use("/activity", activitiesRoute);

// router.post('/activity', async function (req, res){
//     const { id, name, difficulty, duration, season, Pais } = req.body; 
//     console.log( "-------Empieza-----")
//   try {
//      const actividad = await Activity.create({
//       id, name, difficulty, duration, season
//     })
//     console.log( "-------Parte 1-----")
//     let paisOb = await Country.findAll({
//       where:{
//         id: Pais 
//       }
//     })
//     // paisOb = paisOb[0].dataValues
//     console.log( "-------Parte 2-----")
//     paisOb.addActivity(actividad); 
//      res.json("Actividad guardada")
//     console.log("333333333333333333333333333333333")
//     return res.status(200).json( "Actividad Guardada", (Activity));
    
//     //actividad.addpaisOb(Activity);
    
    
//   } catch (error) {
//     console.log("no funcionoooooo", error);
//   }
//   })

module.exports = router;
