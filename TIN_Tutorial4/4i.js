
function amountTocoins(inputAmount, inputArr) {

     let sortedArr = inputArr.sort(function(a, b) {
         return a - b;
       });
     // let sortedArr = inputArr.sort((a,b) =>  b - a);
    for (let i = sortedArr.length - 1; i >= 0; i--) {
        while (inputAmount >= sortedArr[i]) {
            inputAmount = inputAmount - sortedArr[i];
            console.log(sortedArr[i]);
        }
    }
 }

amountTocoins(46, [25, 10, 5, 2, 1]);