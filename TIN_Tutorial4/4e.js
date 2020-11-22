function find_longest_word(stringToCheck) {
  var temp = stringToCheck.split(" ");
  var res = temp[0];
  var i;
  for( i = 1 ; i < temp.length ; i++) {
    if(res.length < temp[i].length) {
        res = temp[i];
    } 
  }
  
  console.log(res);
}
function setup() {
find_longest_word('Bunch of random words together');
}