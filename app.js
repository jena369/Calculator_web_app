'use strict'

let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.value);
    });
});