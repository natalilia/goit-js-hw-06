"use strict";
let counterVal = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
    counterVal -= 1;
    value.textContent = counterVal;
});
btnIncrement.addEventListener("click", () => {
    counterVal += 1;
    value.textContent = counterVal;
})