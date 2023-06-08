
var str = 'ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuwxyz0123456789@#$';
var btnvalue = true;
var getCode = '';


function generateCode() {

    var code = '';
    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnvalue) {
    // document.getElementById("submit").disabled = btnvalue;
    if (btnvalue) {
        document.getElementById("ass").style.backgroundColor = "rgba(73,119,209,0.3)";
        document.getElementById("ass").style.color = "rgba(255,255,255,0.5)";
    } else {
        document.getElementById("ass").style.backgroundColor = "rgba(73,119,209,1)";
        document.getElementById("ass").style.color = "rgba(255,255,255,1)";
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = codebox.value.trim();
    var charset1 = getCode.trim();
    console.log(charset1);
    var charset2 = document.getElementById("codes").innerHTML.trim();
    console.log(charset2);

    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    }
}


