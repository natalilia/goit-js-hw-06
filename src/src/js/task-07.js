"use strict";
const textInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const minRange = Number(textInput.min);
const maxRange = Number(textInput.max);
const averageRange = (minRange + maxRange) / 2;
output.style.fontSize = averageRange + "px";

textInput.addEventListener("input", (event) => {
  const currentFontSize = event.currentTarget.value;
  if (currentFontSize >= minRange && currentFontSize <= maxRange) {
    output.style.fontSize = currentFontSize + "px";
  }
});