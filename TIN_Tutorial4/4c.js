function check_palindrome(sus){
  console.log(sus);
  var temp,index,i;
     sus = sus.toLowerCase();
      
      var splitedSus = sus.split("");
    
     splitedSus = splitedSus.reverse();
    
    var temp = splitedSus.join("");
  if(temp === sus){
    console.log("A palindrome");
  }else{
     console.log("Not a palindrome");
  }
}
function setup() {
   check_palindrome("dammad");
  check_palindrome("damned");
  check_palindrome("ogo");
  
  }