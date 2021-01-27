function celsiusToFahrenheit(){
      var x = document.getElementById("InputForm");
        var  valueToConvert = parseFloat(x.elements[0].value);
        console.log("inside celsuiusTOFarh, valuetoconvert: " + valueToConvert);
    valueToConvert = valueToConvert * 1.8 + 32;
    document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
  }
function celsiusToKelvins(){
  var x = document.getElementById("InputForm");
    var  valueToConvert = parseFloat(x.elements[0].value);
    console.log("inside celsuiusTOKelvin, valuetoconvert: " + valueToConvert);
    valueToConvert = valueToConvert + 273.15;
    document.getElementById("converted").innerHTML = ' ' + valueToConvert ;
  }
  window.celsiusToFahrenheit = celsiusToFahrenheit;
  window.celsiusToKelvins = celsiusToKelvins;
