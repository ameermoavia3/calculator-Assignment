var display =document.getElementById("display")
console.log(display);

var resultShown = false;
var errorShown = false;

function press(vol){

     if (errorShown) {
        display.value = "";
        errorShown = false; 
    }
       if (resultShown) {
        display.value = "";
        resultShown = false;
    }
    display.value += vol;
}

function cleandisplay(){
    display.value = ""
}

function delchar(){
    display.value = display.value.slice(0, -1)
}

function calculate() {
    var text = display.value;
    var opt = "+-*/%"

    if (text === "") {
        display.value = "";
        alert("Please add on  number and operator")
        return
    }else if (opt.includes(text[0]) || opt.includes(text[text.length -1])){
            display.value = "Error";
            errorShown = true;
            return
    }
 
    var errorFound = false;
    
    for (var i = 0; i < text.length -1; i++) {
        if (opt.includes(text[i]) && opt.includes(text[i + 1])) {
            errorFound = true;
            break;
        }
        
    }

    if (errorFound) {
        display.value = "Error";
        errorShown = true;
        return;
    }else{
        display.value = eval(text)
    
    }

     resultShown = true;
     errorShown = false;
}

