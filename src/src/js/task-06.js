"use strict";

const validIn = document.querySelector("#validation-input");

validIn.addEventListener("blur", () => {
    if (validIn.value.trim().length === Number(validIn.dataset.length)){
        validIn.classList.add("valid")
        validIn.classList.remove("invalid")
    }
    else{
        validIn.classList.add("invalid")
        validIn.classList.remove("valid")
    }
  });