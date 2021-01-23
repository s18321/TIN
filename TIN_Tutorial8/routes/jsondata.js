
module.exports = router;
var express = require('express');
var router = express.Router();
let json;
module.exports = router;

router.post('/', function(req, res){
    json=req.body;
    res.render('jsondata', {
      title: "Review your data.",
      firstName:  req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
  });
  console.log('Recived POST request with json data in /jsondata.');
  });
  
  router.get('/', function (req, res) {
  if(json!=undefined){
    res.render('jsondata', {
        title: "Review your data.",
        firstName: json.firstName,
        lastName: json.lastName,
        phoneNumber: json.phoneNumber
      });
  }else{
    res.render('jsondata', {
        title: "Problem with the json.",
        firstName: 'undefined',
        lastName: 'undefined',
        phoneNumber: 'undefined'
      });
  }
  console.log('Recived GET request in /jsondata.');
  });
module.exports = router;