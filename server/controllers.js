const dbHelpers = require('../database/dbHelpers');

module.exports = {
  getStuff: (req, res) => {
    dbHelpers.get((err, result) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(result);
      }
    })
  },
  postStuff: (req, res) => {
    dbHelpers.post(req, (err, result) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(201).json(result);
      }
    })
  }
}