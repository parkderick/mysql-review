const db = require('./index');

const dbHelpers = {
  get: callback => {
    db.query('SELECT * from Food;', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  post: (req, callback) => {
    db.query(`INSERT INTO Food (name, rating) VALUES ("${req.body.name}", ${req.body.rating});`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
}

module.exports = dbHelpers;