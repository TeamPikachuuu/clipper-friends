const db = require('../models/hairmodels');

const hairController = {};

hairController.getInfo = (req, res, next) => {
  // write code here
  //use db.query
  // ` ${ }   `

  let username = req.params.id;
  //let username = req.params.id;
  const queryString = `SELECT * FROM hair WHERE username = '${username}'`;
  console.log(req.params.id);
  return db
    .query(queryString)
    .then((resp) => {
        let objResult = {
            user_id: resp.rows[0].user_id,
            name: resp.rows[0].name,
            username: resp.rows[0].username,
            headshoturl: resp.rows[0].headshoturl,
            hs_toplength: resp.rows[0].hs_toplength,
            hs_sidefade: resp.rows[0].hs_sidefade,
            hs_back: resp.rows[0].hs_back,
            hs_texture: resp.rows[0].hs_texture,
            hs_sideburns: resp.rows[0].hs_sideburns,
            aiurl: resp.rows[0].aiurl
        }
        // console.log("justworkyoumotherfuckingpieceofshjit" + resp.rows[0])
      resp = JSON.stringify(resp)
      console.log('objResult', objResult)
      //console.log('response ' + resp);
      res.locals.getInfo = objResult;
      // db.release()
      return next();
    })
    .catch((e) => {
      next({
        log: 'error in middleware getInfo',
        msg: { err: 'check middleware getInfo' },
      });
    });
};

hairController.addInfo = (req, res, next) => {
    let queryString = `INSERT INTO hair (name, username, headshoturl, hs_toplength, hs_sidelength, hs_sidefade, hs_back, hs_texture, hs_sideburns, aiurl)
                       VALUES ( '${req.body.name}', '${req.body.username}','${req.body.headshoturl}' ,${req.body.hs_toplength},${req.body.hs_sidelength}, ${req.body.hs_sidefade}, '${req.body.hs_back}', '${req.body.hs_texture}', ${req.body.hs_sideburns}, '${req.body.aiurl}');`
      //`INSERT INTO PEOPLE VALUES(507, '${req.body.name}', ${req.body.mass}, '${req.body.hair_color}', '${req.body.skin_color}','${req.body.eye_color}', ${req.body.birth_year}, '${req.body.gender}', 1, 1, ${req.body.height})`
    return db
      .query(queryString)
      .then(resp => {
        console.log("hit")
        return next()
      })
      .catch(err => {
        next({
          log: 'error in middleware addCharacters',
          msg: { err: 'check middleware addCharacters' }
        })
      })
  };
  

module.exports = hairController;
