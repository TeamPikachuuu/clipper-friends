const db = require('../models/hairmodels');

const hairController = {};

hairController.getInfo = (req, res, next) => {
    // write code here
    //use db.query
    // ` ${ }   `
    console.log('hit')
    let username = 'eminthrv'
    //let username = req.params.id;
    const queryString = `SELECT * FROM hair WHERE username = ${username}`
    console.log(username)
    return db
      .query(queryString)
      .then(resp => {
        console.log(resp)
        res.locals.getInfo = resp
        // db.release()
        return next()
      })
      .catch(e => {
        next({
          log: 'error in middleware getInfo',
          msg: { err: 'check middleware getInfo' }
        })
      })
  };

module.exports =  hairController