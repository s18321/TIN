
function milesToKilometers(){
  var x = document.getElementById("InputForm");
    var  valueToConvert = parseFloat(x.elements[0].value);
    console.log("inside milesToKilometers, valuetoconvert: " + valueToConvert);
  valueToConvert = valueToConvert * 1.609344;
  document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
}
function kilometersToMiles(){
  var x = document.getElementById("InputForm"); 
  var  valueToConvert = parseFloat(x.elements[0].value);
  console.log("inside kilometersToMiles, valuetoconvert: " + valueToConvert);
  valueToConvert = valueToConvert / 1.609344;
  document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
}

window.milesToKilometers = milesToKilometers;
window.kilometersToMiles = kilometersToMiles;
// export function milesToKilometers(valueToConvert){
//     //return outputValue = valueToConvert * 1.8 + 32;
//     return valueToConvert * 1.609344;
//   }
//   export function kilometersToMiles(valueToConvert){
//     //return outputValue = valueToConvert * 1.8 + 32;
//     return valueToConvert / 1.609344;
//   }

//  module.exports.milesToKilometers = (valueToConvert) => valueToConvert * 1.609344;
 // module.exports.kilometersToMiles = (valueToConvert) => valueToConvert / 1.609344;