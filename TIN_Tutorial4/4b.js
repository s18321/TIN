function nthNumberinFibonacci(nth) 
{ 
    var x=0,y=1,temp;  
    for (var i = 0; i < nth; i++)  
    { 
        temp=x+y;  /* We calculate next number in sequence */
        x=y;  /* assignes the value of y to x so that x is free to store value of next number in sequence*/
        y=temp; 
    } 
    return y;
} 
  function setup() {
  console.log(nthNumberinFibonacci(4)); 
  console.log(nthNumberinFibonacci(5)); 
  console.log(nthNumberinFibonacci(6)); 
  }