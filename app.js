// 'use strict'
const key_box = document.getElementById('key-box');
const bracket_key = document.getElementById('bracket-key');

const num_Input = document.getElementById('numInput');
const _clear_key = document.getElementById('clear-key');
const scientific_calc = document.getElementById('scientific-calc');
const one_key = document.getElementById('one-key');
const two_key = document.getElementById('two-key');
const three_key = document.getElementById('three-key');
const four_key = document.getElementById('four-key');
const five_key = document.getElementById('five-key');
const six_key = document.getElementById('six-key');
const seven_key = document.getElementById('seven-key');
const eight_key = document.getElementById('eight-key');
const nine_key = document.getElementById('nine-key');
const zero_key = document.getElementById('zero-key');


let isScientific = false;


scientific_calc.addEventListener("click", () =>{
    if(!isScientific){
    one_key.value = "sin";
    one_key.textContent = "Sin";
    two_key.value = "cos";
    two_key.textContent = "Cos";
    three_key.value = "ln";
    three_key.textContent = "ln";
    four_key.value = "log";
    four_key.textContent = "log";
    five_key.value = "tan";
    five_key.textContent = "Tan";
    six_key.value = "e";
    six_key.textContent = "e";
    seven_key.value = "3.14159265359";
    seven_key.textContent = "pi";
    eight_key.value = "**";
    eight_key.textContent = "^";
    nine_key.value = "Math.sqrt()";
    nine_key.textContent = "√";

    zero_key.style.flexGrow = 0;
    zero_key.value = "(";
    zero_key.textContent = "(";

    bracket_key.style.display = "block"; // display's ')'

    isScientific = true;
    }
    else{

        one_key.value = "1";
        one_key.textContent = "1";
        two_key.value = "2";
        two_key.textContent = "2";
        three_key.value = "3";
        three_key.textContent = "3";
        four_key.value = "4";
        four_key.textContent = "4";
        five_key.value = "5";
        five_key.textContent = "5";
        six_key.value = "6";
        six_key.textContent = "6";
        seven_key.value = "7";
        seven_key.textContent = "7";
        eight_key.value = "8";
        eight_key.textContent = "8";
        nine_key.value = "9";
        nine_key.textContent = "9";

        zero_key.style.flexGrow = 1;
        zero_key.value = "0";
        zero_key.textContent = "0";

        bracket_key.style.display = "none";

        isScientific = false;
    }
   

});

let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.value === "AC"){
            expression = "";
            num_Input.textContent = expression;
        }
        else if(btn.value === "="){
            let safeExpr = expression.replace(/\b0+(?=\d)(?!\.)/g, "");  //regex (regular expression)
            expression = eval(safeExpr);
            num_Input.textContent = expression;
        }
        else{               
            expression += btn.value; //add clicked value
            num_Input.textContent = expression;
            
        }
    });
});

