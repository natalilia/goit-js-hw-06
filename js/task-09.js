function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector("button.change-color");
const body = document.body;
const bodyColor = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  bodyColor.textContent = currentColor;
});