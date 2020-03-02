// //prompt user how many numbers, store in var
// //praseInt converts String number to Integer

// var pwLength = parseInt(prompt("Please Enter your Password length, must be between 8-128"));

// while (pwLength < 8 || pwLength > 128) {
//     alert("Password length must be between 8 - 128 characters");
//     pwLength = parseInt(prompt("Please Enter your Password length, must be between 8-128"));
// }



// while (pwLower && pwUpper && pwNumber && pwSymbol === "N") {
//     alert("At Least one selection needs to be present.");
//     pwLower = prompt("Would you like to include Lower Cases? Y/N");
//     pwUpper = prompt("Would you like to include Upper Cases? Y/N ");
//     pwNumber = prompt("Would you like to include Numbers? Y/N ");
//     pwSymbol = prompt("Would you like to include Symbols? Y/N ");
// }

// //change entries to upper case
// var lower = pwLower.toUpperCase();
// var upper = pwUpper.toUpperCase();
// var number = pwNumber.toUpperCase();
// var symbol = pwSymbol.toUpperCase();
// console.log(lower);
// console.log(upper);
// console.log(number);
// console.log(symbol);

// function checkInput() {
//     if (lower !== "Y" && lower !== "N" || lower == "" ||
//         upper !== "Y" && upper !== "N" || upper == "" ||
//         number !== "Y" && number !== "N" || number == "" ||
//         symbol !== "Y" && symbol !== "N" || symbol == "") {

//         alert("All Selections must be entered with Y/N. Please Refresh the page and start again \n");
//         return false;
//     }
// }
// checkInput();


var lower = document.getElementById("lowerSwitch").checked;
var upper = document.getElementById("upperSwitch").checked;
var number = document.getElementById("numberSwitch").checked;
var symbol = document.getElementById("symbolSwitch").checked;


//check which Seletions made, save into array

var finalPassword = ""

function genPw() {
    //check which options selected

    let function_array = []
    if(lower == true){
        function_array.push(getRandomLower)
    }
    if(upper == true){
        function_array.push(getRandomUpper)
    }
    if(number == true){
        function_array.push(getRandomNum)
    }
    if(symbol == true){
        function_array.push(getRandomSym)
    }

    console.log(function_array);
    console.log(lower);

var pwLength = $( "#pwLength" ).val();
console.log(pwLength);

    for (var i = 0; i < pwLength ; i++) {

        var index = Math.floor( Math.random() * function_array.length)
        finalPassword += function_array[index]()
        
        console.log(getRandomLower());
        console.log(getRandomUpper());
        console.log(getRandomNum());
       console.log(getRandomSym());
    }
    return finalPassword
}



 //generate function to get random passwords for each type
 function getRandomLower() {
    return String.fromCharCode( Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNum() {
    return (Math.floor(Math.random() * 10));
}

function getRandomSym() {
    var s = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    // generating a random index into the string and extracting the character at that position
    return s.substr(Math.floor(s.length * Math.random()), 1);
}





console.log( genPw());
console.log(finalPassword);

//Add event listener for Generate Password button

// var pwLenth = $("input:number").val();
// document.getElementById("pwLength").innerHTML = pwLength; 
// console.log(pwLenth);

// if (pwLength < 7 || pwLength > 128 || pwLength == "") {
//     //prompt user lower? store in var
//     prompt("Please enter your desired password lenth");
    
// }
// console.log(pwLength);

$("#genBtn").click(function(){
    finalPassword = "";
    genPw();
    $("#pwBox.form-control").val(finalPassword);
    
    
});


//copy button
$("#copyBtn").click (function(){
var copyText = document.getElementById("pwBox");
//select text in field
copyText.select();
copyText.setSelectionRange(0, 129)
//copy text
document.execCommand("copy");

alert("Copied to your Clipboard: " + copyText.value);
});



