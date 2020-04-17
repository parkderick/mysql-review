const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ReviewDB'
})

db.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected!");
  }
});

module.exports = db;

// TODO: establish connection