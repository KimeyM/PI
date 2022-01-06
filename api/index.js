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
const { conn, Country, Activity } = require('./src/db.js');

// // Syncing all the models at once.
//   conn.sync({ force: true }).then(async () => { 
//     try {
//       let res = await Country.findAll();
//       if(res.length === 0){
//         try {
//           let response = await axios.get('http://restcountries.com/v3.1/all');
//           let api = response.data;
//           api && api.map(async country => 
//           await Country.findOrCreate({ 
//             where: { 
//               id: country.cca3,
//               name: country.name.common,
//               flag: country.flags.png,
//               continent: country.region,
//               capital: country.capital ? country.capital[0] : 'Capital not found',
//               subregion: country.subregion ? country.subregion : 'Subregion not found',
//               area: country.area,
//               population: country.population || 0
//             }
//           }));
//         } catch (err) { 
//           console.error(err);
//         };
//       };
//     } catch (err) { 
//       console.error(err);
//     };
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });

conn.authenticate().then(() => { 
  server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
      });
    });
