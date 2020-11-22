function CheckIfIsAPrime(integerToCheck) {
    console.log(integerToCheck);
    for(var i = 2; i < integerToCheck; i++) {
        if(integerToCheck % i === 0){
          return "It's not a prime";
        }
    }
 
    return "It's a prime";

}
 function setup() {
  console.log(CheckIfIsAPrime(5));
    console.log(CheckIfIsAPrime(9));
} 
  

