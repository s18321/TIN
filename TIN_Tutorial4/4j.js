function binary_search(inputArr, lookingFor) {

    let l = 0;
     let r = inputArr.length -1;
     let i = Math.floor((l+r)/2);

    while(l != r) { 
        m = Math.floor((l+r)/2);
        if(inputArr[m] < lookingFor) l = m + 1;
        else r = m;
    }

    if(inputArr[l] == lookingFor) {
        return l;
    } else {
        return "search failed";
    }
}
 console.log("Index in input array of the number that you look for is " + binary_search([8,6,1,2,3,5,6,7,8],2));