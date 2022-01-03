const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db')

router.post('/', async function (req, res) {
  const { id, name, difficulty, duration, season, countries } = req.body; 
  try {
     const activityCreated = await Activity.create({
      id, name, difficulty, duration, season
    });
    let countryFinded = await Country.findAll({
      where: {
        id: countries 
      }
    });
    await activityCreated.addCountry(countryFinded);
    res.json('Activity created!');
    return res.status(200).json( 'Activity created!', (activityCreated));
  } catch (error) {
    console.error(error);
  };
});

router.get('/', async (req, res) => {
  try {
      const activity = await Activity.findAll();
      res.json(activity);
  } catch (error) {
      console.error(error);
  };
});

module.exports = router;