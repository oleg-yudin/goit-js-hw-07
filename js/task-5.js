function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");


btn.addEventListener("click", event => {
  event.preventDefault();
  const a = getRandomHexColor();
  body.style.backgroundColor = a;
  span.textContent = a;
})

