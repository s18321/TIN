
module.exports = router;
var express = require('express');
var router = express.Router();

module.exports = router;

router.post('/', function(req, res){
res.render('formdata', {title: "Review your data.", firstName: req.body.firstName, lastName: req.body.lastName, phoneNumber: req.body.phoneNumber});       
});
module.exports = router;
