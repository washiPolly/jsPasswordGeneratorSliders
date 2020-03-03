// //prompt user how many numbers, store in var
// //praseInt converts String number to Integer


var lower = document.getElementById("lowerSwitch");
var upper = document.getElementById("upperSwitch");
var number = document.getElementById("numberSwitch");
var symbol = document.getElementById("symbolSwitch");
// console.log(lower);
// console.log(upper);
// console.log(number);
// console.log(symbol);

//check which Seletions made, save into array

var finalPassword = ""

function genPw() {
    //check which options selected

    let function_array = []
    if(lower.checked){
        function_array.push(getRandomLower)
    }
    if(upper.checked){
        function_array.push(getRandomUpper)
    }
    if(number.checked){
        function_array.push(getRandomNum)
    }
    if(symbol.checked){
        function_array.push(getRandomSym)
    }

    // console.log(function_array);
    // console.log("lower" + lower);
    // console.log("upper" + upper);
    // console.log("number" + number);
    // console.log("symbol" + symbol);

var pwLength = $( "#pwLength" ).val();
if (pwLength < 8 || pwLength > 128 || pwLength == ""){
    alert("Please enter you desiered password length between 8 - 128");
    console.log(pwLength);
    return false;
}

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
    if (pwLength < 8 || pwLength > 128 || pwLength == ""){
        alert("Please enter you desiered password length between 8 - 128");
        console.log(pwLength);
        }
    else{
    finalPassword = "";
    genPw();
    $("#pwBox.form-control").val(finalPassword);
    }
    
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



