const db = require('../models/hairmodels');

const hairController = {};

hairController.getInfo = (req, res, next) => {
    // write code here
    //use db.query
    const queryString = 'SELECT a.*, b.name as species, c.name as homeworld FROM people a FULL OUTER JOIN species b ON a.species_id = b._id FULL OUTER JOIN planets c ON a.homeworld_id = c._id'
  
    return db
      .query(queryString)
      .then(resp => {
        console.log(resp)
        res.locals.getCharacters = resp.rows
        // db.release()
        return next()
      })
      .catch(e => {
        next({
          log: 'error in middleware getCharacters',
          msg: { err: 'check middleware getCharacters' }
        })
      })
  };