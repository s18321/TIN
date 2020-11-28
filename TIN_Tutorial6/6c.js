let listener= function() {
    document.getElementById('button-submit').addEventListener('click', submit); 
}
document.addEventListener('DOMContentLoaded', listener); //listen if there is a submit

function validatePostalCode( codeToCheck){
    let regexCheck = /([0-9]){2}-{1}([0-9]){3}/; // e.g. 12-345
    return regexCheck.test(codeToCheck);
}
function validateFullName( nameToCheck){
    let regexCheck = /^[A-Z]{1}[a-z]*\s{1}[A-Z]{1}[a-z]*$/;// e.g. John Cash
    return regexCheck.test(nameToCheck);
}
function validateNumber( numberToCheck){
    let regexCheck =  /^[0-9]{6}$/; // e.g. 122345
    return regexCheck.test(numberToCheck);
}
let submit = function(event) {
    event.preventDefault(); //don't submit form
    //get all teh values from the form
    let postalCode = document.getElementById("postalCode").value;
    let fullName = document.getElementById("fullName").value;
    let orderNumber = document.getElementById("orderNumber").value;


    //check if validation passes and change style accordingly

    if(validatePostalCode(postalCode) == false) {
        document.getElementById('postalCode').style["color"] = "red";
         document.getElementById('postalCode').style["text-decoration"] = "line-through";
    } else { 
        document.getElementById('postalCode').style["color"]= "green";
        document.getElementById('postalCode').style["text-decoration"] = "";
}
    if(validateFullName(fullName) == false) {
        document.getElementById('fullName').style["color"] = "red";
         document.getElementById('fullName').style[ "text-decoration"] = "line-through";
    } else { 
        document.getElementById('fullName').style["color"]= "green";
        document.getElementById('fullName').style["text-decoration"] = "";
}
    if(validateNumber(orderNumber) == false) {
        document.getElementById('orderNumber').style["color"] = "red";
        document.getElementById('orderNumber').style["text-decoration"] = "line-through";
    } else { 
        document.getElementById('orderNumber').style["color"]= "green";
        document.getElementById('orderNumber').style["text-decoration"] = "";

}
}
/*
let submit = function(event) {
    event.preventDefault(); //don't acctualy submit form
    let age = document.getElementById("postalCode").value;
    let email = document.getElementById("fullName").value;
    let orderNumber = document.getElementById("orderNumber").value;

    if(validation.isPostalCode(age) == false) {
        document.getElementById('postalCode').style["color"] = "red";
         document.getElementById('postalCode').style["text-decoration"] = "line-through";
    } else { 
        document.getElementById('postalCode').style["color"]= "green";
        document.getElementById('postalCode').style["text-decoration"] = "";
}
    if(validation.isFullName(email) == false) {
        document.getElementById('fullName').style["color"] = "red";
         document.getElementById('fullName').style[ "text-decoration"] = "line-through";
    } else { 
        document.getElementById('fullName').style["color"]= "green";
        document.getElementById('fullName').style["text-decoration"] = "";
}
    if(validation.isNumber(orderNumber) == false) {
        document.getElementById('orderNumber').style["color"] = "red";
        document.getElementById('orderNumber').style["text-decoration"] = "line-through";
    } else { 
        document.getElementById('orderNumber').style["color"]= "green";
        document.getElementById('rderNumber').style["text-decoration"] = "";

}
}


/*
let validation = {
    isPostalCode:function(postalCode) {
        let reg =  /^([0-9]){2}-{1}([0-9]){3}$/;
        return reg.test(postalCode);
    },
    isNumber:function(orderNumber) {
        let reg = /^[0-9]{6}$/;
        return reg.test(orderNumber);
    },
    isFullName:function(name){
        let reg = /^[A-Z]{1}[a-z]*\s{1}[A-Z]{1}[a-z]*$/;
        return reg.test(name);
    }
};  */ 

