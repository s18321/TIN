
    function stringInAlphabeticalOrder(stringToSort) {
      console.log(stringToSort);
      var temp = stringToSort.split('');
      temp = temp.sort();
      var endValue = temp.join('')
  return endValue;
  } 
  function setup() {
  console.log(stringInAlphabeticalOrder('webmaster'));
     console.log(stringInAlphabeticalOrder('efgabcdh'));
  }