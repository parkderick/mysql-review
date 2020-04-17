const db = require('./index');

const seed = [
  {
    name: 'Taco Bell',
    rating: 5
  },
  {
    name: 'In N Out',
    rating: 8
  },
  {
    name: 'Raising Canes',
    rating: 9
  },
  {
    name: 'Howling Wings',
    rating: 10
  },
  {
    name: 'Popeyes',
    rating: 7
  }
];


function seedME() {
  seed.forEach((fastfood, index) => {
    db.query(`INSERT INTO Food (name, rating) VALUES ("${fastfood.name}", ${fastfood.rating});`, (err, result) => {
      if (err) {
        console.log('Seed failed')
      } else {
        console.log('Seed success')
      }
    });
  })
  db.end();
};

seedME();