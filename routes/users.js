var express = require('express');
var router = express.Router();

var locations = [
  {
    user: 'aaa',
    coordinates: {
      latitude: 43.8462588,
      longitude: 18.4330765,
    },
  },
  {
    user: 'bbb',
    coordinates: {
      latitude: 44.8462588,
      longitude: 18.4330765,
    },
  },
  /*{
    user: 'ccc',
    coordinates: {
      latitude: 45.8462365,
      longitude: 18.4330778,
    },
  },*/
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    locationsSet: locations
  });
});

/* POST  */
router.post('/', function(req, res, next) {
  //napraviomo objekat od podataka koje smo postali na rutu i talav objekat dodajemo u lisu
  var location = {

    user: req.body.user,
    coordinate: {
      latitude: req.body.latitude,
      longitude: req.body.longitude
    },
    time: req.body.time
  };
  locations.push(location);
  res.send({
    success: true
  })
});

module.exports = router;
