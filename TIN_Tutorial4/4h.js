function searchInArray(inputArr) {
    let sortedArr = inputArr.sort(function(a, b) {
        return a - b;
      });

    let almostMin = sortedArr[1];
    let almostMax = sortedArr[sortedArr.length-2];
   
    console.log("Second greatest: " + almostMax + "\nSecond smallest: " + almostMin);
}

searchInArray([10,40,30,20,36,15,31,22])