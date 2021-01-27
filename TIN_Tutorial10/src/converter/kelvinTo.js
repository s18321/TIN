function kelvinToFahrenheit(){
  var x = document.getElementById("InputForm");
  var  valueToConvert = parseFloat(x.elements[0].value);
  console.log("inside kelvinToFahrenheit, valuetoconvert: " + valueToConvert);
  valueToConvert = valueToConvert * (5/9) - 459.67;
  document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
}
function kelvinToCelsius(){
  var x = document.getElementById("InputForm");
  var valueToConvert = parseFloat(x.elements[0].value);
  console.log("inside kelvinToCelsius, valuetoconvert: " + valueToConvert);
  valueToConvert = valueToConvert - 273.15;
  document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
}
window.kelvinToFahrenheit = kelvinToFahrenheit;
window.kelvinToCelsius = kelvinToCelsius;
// export function kelvinToFahrenheit(valueToConvert){ 
//     return valueToConvert * (5/9) - 459.67;
//   }
// export function kelvinToCelsius(valueToConvert){
//     
//     return valueToConvert + 273.15;
//   }
  //exports.kelvinToCelsius = (valueToConvert) => valueToConvert + 273.15;
 // exports.kelvinToFahrenheit = (valueToConvert) => valueToConvert * (5/9) - 459.67;
  //module.exports = kelvinToCelsius;