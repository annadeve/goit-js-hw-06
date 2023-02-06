function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});
