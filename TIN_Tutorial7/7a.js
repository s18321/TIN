var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  let result=false;
  let problemExists = false;
  let num1 = q.numberOne;
  let num2 = q.numberTwo;
  var problemMessage ="";
  if(false==validateNumber(num1)||false==validateNumber(num2)){ //data validation
	  problemMessage = "One of the numbers given is not a number will work only with numbers like 123 or 12.33";
      problemExists = true;
    }
  var x = +q.numberOne;
  var y = +q.numberTwo;
  var operation = " ";
   operation = q.action;
    if (operation =="add"){
	result = sum(x,y);
  }
    if (operation =="sub"){
	result = sub(x,y);
  }
    if (operation =="div"){
    if(y==0){
      problemMessage = "Cannot divide by zero";
    problemExists = true;
  }
	result = div(x,y);
  }
    if (operation =="mul"){
	result = mul(x,y);
  }
  if (result == false){
	 problemMessage += " operation is not mul/div/sum/sub";
      problemExists = true;
  }
  
  if (problemExists){
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end(problemMessage);
  } else {
    let txt = x + " " + y+ " " + operation + " " + result;
    res.end(txt);
  }
  
}).listen(8080);


function validateNumber( numberToCheck){
    let regexCheckInt =  /^\d+$/; // e.g. 122345 or 45
    let regexCheckFloat =  /^\d+\.?\d+$/; // e.g.  22.33 or 1.0
    return (regexCheckInt.test(numberToCheck)||regexCheckFloat.test(numberToCheck));
}

function add(x,y){
	let sum = x + y;
	return sum;
}
function sub(x,y){
	let sub = x - y;
	return sub;
}
function mul(x,y){
	let mul= x * y;
	return mul;
}
function div(x,y){
	let div = x / y;
	return div;
}
