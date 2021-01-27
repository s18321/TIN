function fahrenheitToCelsius(){ 
  var x = document.getElementById("InputForm");
  var  valueToConvert = parseFloat(x.elements[0].value);
  console.log("inside fahrenheitToCelsius, valuetoconvert: " + valueToConvert);
  valueToConvert = (valueToConvert - 32) / 1.8;
  document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
}
function fahrenheitToKelvins(){
  var x = document.getElementById("InputForm");
  var  valueToConvert = parseFloat(x.elements[0].value);
  console.log("inside fahrenheitToKelvins, valuetoconvert: " + valueToConvert);
  valueToConvert = (valueToConvert + 459.67) * (5/9);
  document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
}

window.fahrenheitToCelsius = fahrenheitToCelsius;
window.fahrenheitToKelvins = fahrenheitToKelvins;

  // exports.fahrenheitToCelsius = (valueToConvert) => (valueToConvert - 32) / 1.8;
  // exports.fahrenheitToKelvin = (valueToConvert) => (valueToConvert + 459.67) * (5/9);
  
// export function fahrenheitToCelsius(valueToConvert){
//     return (valueToConvert - 32) / 1.8;
//   }
// export function fahrenheitToKelvin(valueToConvert){
//     return (valueToConvert + 459.67) * (5/9);
//   }
