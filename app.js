var display =document.getElementById("display")
console.log(display);

function press(vol){
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
            return
    }

    var erorFound = false;
    
    for (let i = 0; i < text.length -1; i++) {
        if (opt.includes(text[i]) && opt.includes(text[i + 1])) {
            erorFound = true;
            break;
        }
        
    }

    if (erorFound) {
        display.value = "Error";
    }else{
        display.value = eval(text)
    }
}

