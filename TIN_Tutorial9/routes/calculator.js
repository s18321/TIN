
module.exports = router;
var express = require("express");
var router = express.Router();
let json;
let operation, firstParameter, secondParameter, result =null;
module.exports = router;
function calculate(operation, firstParameter, secondParameter){
  if(!validateNumber(firstParameter)||!validateNumber(secondParameter)){
    return "Wrong input parameters.";
  }
  switch (operation) {
    case "addition":
      return firstParameter + secondParameter;
    case "substraction":
      return firstParameter - secondParameter;
    case "multiplication":
      return firstParameter * secondParameter;
    case "exponentiation":
      let exponentialSum = 1;
      for (let i=0; i<secondParameter;i++){
        exponentialSum = exponentialSum * firstParameter;
      }
      return exponentialSum;
    case "division":
      if (secondParameter == 0) {
        return "Cannot divide by 0.";
      } else {
        return firstParameter / secondParameter;
      }
    default:
      return "Wrong operation name.";
    }
};

router.post("/", function(req, res){
  
    json = req.body;
    firstParameter = parseFloat(json.firstParameter);
    secondParameter = parseFloat(json.secondParameter);
    operation = json.operation;
    result =calculate(operation,firstParameter,secondParameter);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ operationResult: result }));
    console.log("Recived POST request with json data in /calculator.");
  });
  
  router.get("/", function (req, res) {
    res.render("calculator", { title: "Calculator" });
  });
  function validateNumber( numberToCheck){
    let regexCheckInt =  /^\d+$/; // e.g. 122345 or 45
    let regexCheckFloat =  /^\d+\.?\d+$/; // e.g.  22.33 or 1.0
    return (regexCheckInt.test(numberToCheck)||regexCheckFloat.test(numberToCheck));
}
module.exports = router;