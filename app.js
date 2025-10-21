var display =document.getElementById("display");
console.log(display);

var resultShown = false;
var errorShown = false;


function press(vol) {
    
    if (display.value === "Error") {
        display.value = vol;
        errorShown = false;
        resultShown = false;
        return;
    }

    
    if (resultShown) {
        var ops = "+-*/%";
        if (ops.includes(vol)) {
            
            display.value += vol;
        } else {

            display.value = vol;
        }
        resultShown = false;
        return;
    }

    if (errorShown) {
        display.value = vol;
        errorShown = false;
        return;
    }
    display.value += vol;
}





function cleandisplay(){
    display.value = "";
}

function delchar(){
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var text = display.value;
    var opt = "+-*/%"
    var opt1 = ".+-*/%"

    if (text === "") {
        display.value = "";
        alert("Please add on  number and operator");
        return;

   } else if (opt.includes(text[text.length - 1])) {
    
    display.value = "Error";
    errorShown = true;
    return;
} else if (opt.includes(text[0]) && text[0] !== '-' && text[0] !== '+') {
    
    display.value = "Error";
    errorShown = true;
    return;
}
 
    var errorFound = false;
    
    for (var i = 0; i < text.length -1; i++) {
        if (opt1.includes(text[i]) && opt1.includes(text[i + 1])) {
            errorFound = true;
            break;
        }
        
    }

    if (errorFound) {
        display.value = "Error";
        errorShown = true;
        return;
    }else{
        try {
    display.value = eval(text);
} catch (e) {
    display.value = "Error";
    errorShown = true;
    return;
}

    
    }

     resultShown = true;
     errorShown = false;
}



