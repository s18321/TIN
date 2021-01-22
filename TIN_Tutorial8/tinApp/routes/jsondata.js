
module.exports = router;
var express = require('express');
var router = express.Router();
let json;
module.exports = router;

router.post('/', function(req, res){
    json=req.body;
    res.render('jsondata', {
      title: "Data obtained from json.",
      firstName:  req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
  });
  console.log('Received POST data using JSON!');
  });
  
  router.get('/', function (req, res) {
  if(json!=undefined){
    res.render('jsondata', {
        title: "Data obtained from json.",
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
  });
module.exports = router;