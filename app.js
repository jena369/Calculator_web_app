// 'use strict'
const num_Input = document.getElementById('numInput');
const _clear_key = document.getElementById('clear-key');
let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.value === "AC"){
            expression = "";
            num_Input.textContent = expression;
        }
        else if(btn.value === "="){
            expression = eval(expression);
            num_Input.textContent = expression;
        }
        else{     
            expression += btn.value; //add clicked value
            num_Input.textContent = expression;
            
        }
    });
});