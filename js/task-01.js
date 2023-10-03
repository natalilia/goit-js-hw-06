"use strict";
const categories = document.querySelector("#categories");
const itemCategories = categories.children.length;

console.log(`Number of categories: ${itemCategories} `);

const  itemInfo = document.querySelectorAll(".item");
itemInfo.forEach(function(number){
const kindCategory = number.firstElementChild.textContent;
const countTopicCategory = number.lastElementChild.children.length;
console.log(`Category: ${kindCategory} 
Elements: ${countTopicCategory}`)
});
