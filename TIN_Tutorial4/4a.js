function factorialIterative(x) {
    let endValue = 1, i;
    for (i = x; i > 1; i--) {
      endValue *= i;
    }
    return endValue;
  };
function setup() {
var factorialRecursive = function(n) {
    if(n ==0){
      return 1;
    } 
      return  n * factorialRecursive(n-1);
  };
  console.log(factorialRecursive(5));
  console.log(factorialIterative(5));
  
  
   
}