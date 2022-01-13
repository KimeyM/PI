const { Router } = require('express');
const { Op } = require('sequelize');
const { Country, Activity } = require('../db');
const router = Router(); 

router.get('/', async (req, res) => {
    try { 
        const { name } = req.query; 
        if(!name){ 
            const allCountries = await Country.findAll({ 
                order: [['name', 'ASC']],
                include: {
                    model: Activity
                }
            });
            res.send(allCountries);
        }else if(name){
            const countrySearch = await Country.findAll({ 
                where: { 
                    name:   {[Op.iLike]: `%${name}%`}, 
                },
                include: { 
                    model: Activity 
                }
            });
            if(countrySearch.length > 0){ 
                res.json(countrySearch); 
            } else { 
                res.status(404).send('Country not found');
            };
        };
    } catch (error) {
        console.error(error)
    } ;
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const countryID = await Country.findByPk(id.toUpperCase(), { 
            include: {
                model: Activity
            }
        });
        res.send(countryID); 
    } catch (error) {
        console.error(error);
    };
});

// router.get('/activities', async (req, res) => {
//     const { activity } = req.query
//     const countries = []
//     const countryactivity = await Country.findAll({
//         include: {
//             model: Activity,
//             where: {
//                 name: activity
//             }
//         }
//     })
//     res.send(countryactivity)
// })


module.exports = router;