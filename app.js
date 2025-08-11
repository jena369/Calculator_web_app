'use strict'
const num_Input = document.getElementById('numInput');
let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {

        expression += btn.value; //add clicked value
        num_Input.textContent = expression;
    });
});