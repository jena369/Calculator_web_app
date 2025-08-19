

var num_Input = document.querySelector('#numInput');
var buttons = document.querySelectorAll('.keys');

let displayExp  = ""; 
let evalExp = "";


function updateDisplay() {
    num_Input.value = displayExp;
}

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext === 'x') {
            displayExp += "x";
            evalExp += "*";
        } 
        else if (btntext === '÷') {
            displayExp += "÷";
            evalExp += "/";
        } 
        else if (btntext === '%') {
            displayExp += "%";
            evalExp += "/100*";
        }
        else if (btntext === 'AC') {
            displayExp = "";
            evalExp = "";
        } 
        else {
            displayExp += btntext;
            evalExp += btntext;
        }
        updateDisplay();
    });
}


// sin
function sin() {
    displayExp += "sin(";
    evalExp += "Math.sin(";
    updateDisplay();
}

// cos
function cos() {
    displayExp += "cos(";
    evalExp += "Math.cos(";
    updateDisplay();
}

// tan
function tan() {
    displayExp += "tan(";
    evalExp += "Math.tan(";
    updateDisplay();
}

// sqrt
function sqrt() {
    displayExp += "√(";
    evalExp += "Math.sqrt(";
    updateDisplay();
}

// pi
function pi() {
    displayExp += "π";
    evalExp += `(${Math.PI})`;   // wrap in () so it plays nice with multiplications
    updateDisplay();
}

// e
function e() {
    displayExp += "e";
    evalExp += `(${Math.E})`;
    updateDisplay();
}

// log base 10
function log() {
    displayExp += "log(";
    evalExp += "Math.log10(";
    updateDisplay();
}

function powerOf() {
    displayExp += "^";                
    evalExp += "**";                   
    updateDisplay();
}

   

    function backspc(){
                                                                     // Remove last character from display
    num_Input.value = num_Input.value.slice(0, -1);                                                            // Rebuild internal expression from display
    displayExp = num_Input.value;
    evalExp = num_Input.value;

}


   function eql() {
    // let safeExpr = num_Input.value.replace(/\b0+(?=\d)(?!\.)/g, "");             
    // let displayExp = num_Input.value;                                           

     try {
        // Clean up
        let safeExpr = evalExp.replace(/\b0+(?=\d)(?!\.)/g, "");
        
        let result = eval(safeExpr);

        num_Input.value = displayExp + " \n" + result;

        // reset for chaining
        displayExp = result.toString();
        evalExp = result.toString();
    } catch (err) {
        num_Input.value = "Error";
        displayExp = "";
        evalExp = "";
    }
}


