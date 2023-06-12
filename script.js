const p = document.querySelector("p");
const bold = document.querySelector(".bold");
const italicize = document.querySelector(".italicize");
const underline = document.querySelector(".underline");
const grow = document.querySelector(".grow");
const shrink = document.querySelector(".shrink");
const invert = document.querySelector(".invert");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const blurEffect = document.querySelector(".blur");
const clear = document.querySelector(".clear");

bold.addEventListener("click", () => {
  p.style.fontWeight = "bold";
});

italicize.addEventListener("click", () => {
  p.style.fontStyle = "italic";
});

underline.addEventListener("click", () => {
  p.style.textDecoration = "underline";
});

let currentFontSize = 25;
let clickCounter = 0;

grow.addEventListener("click", () => {
  if (clickCounter < 3) {
    clickCounter++;
    currentFontSize += 1;
    p.style.fontSize = currentFontSize + "px";
  }
});

shrink.addEventListener("click", () => {
  if (clickCounter < 3) {
    clickCounter++;
    currentFontSize -= 1;
    p.style.fontSize = currentFontSize + "px";
  }
});

invert.addEventListener("click", () => {
  p.classList.toggle("upsideDown");
});

red.addEventListener("click", () => {
  p.classList.toggle("danger");
});

blue.addEventListener("click", () => {
  p.classList.toggle("aqua");
});

green.addEventListener("click", () => {
  p.classList.toggle("go");
});

let blurFilter = 0;

blurEffect.addEventListener("click", () => {
  clickCounter++;

  if (clickCounter < 4) {
    blurFilter += 1;
    p.style.filter = "blur(" + blurFilter + "px)";
  } else {
    blurFilter = 0;
    p.style.filter = "none";
    clickCounter = 0;
  }
});

clear.addEventListener('click', () => {
    p.style = ""
})