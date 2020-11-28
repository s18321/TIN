function convert() {
    let x = document.getElementById("InputForm");
      let  valueToConvert = x.elements[0].value;
      let wayOfConversion = x.elements[1].value;
      let outputValue =0;
      if (wayOfConversion == 0){
        outputValue = valueToConvert * 1.8 + 32;
      } else {
        outputValue = (valueToConvert - 32) / 1.8;
      }
      document.getElementById("converted").innerHTML = ' ' + outputValue ;
  }