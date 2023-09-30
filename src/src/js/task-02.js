"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const liArray = ingredients.map((ingridient) => {
const liEl = document.createElement("li");
liEl.textContent = ingridient ;
liEl.classList.add("item");
return liEl;
});
list.append(...liArray);
