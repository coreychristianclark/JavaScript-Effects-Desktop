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
  p.classList.toggle("boldEffect");
  bold.classList.toggle("buttonDown");
});

italicize.addEventListener("click", () => {
  p.classList.toggle("italic");
  italicize.classList.toggle("buttonDown");
});

underline.addEventListener("click", () => {
  p.classList.toggle("underlineEffect");
  underline.classList.toggle("buttonDown");
});

let currentFontSize = 25;
let clickCounter = 0;

grow.addEventListener("click", () => {
  if (clickCounter < 3) {
    clickCounter++;
    currentFontSize += 1;
    p.style.fontSize = currentFontSize + "px";
  } else if (clickCounter === 3) {
    grow.classList.remove("buttonDown");
    clickCounter = 0;
    currentFontSize = 25;
    p.style.fontSize = "";
  }
  if (clickCounter === 1) {
    grow.classList.add("buttonDown");
  }
});

shrink.addEventListener("click", () => {
  if (clickCounter < 3) {
    clickCounter++;
    currentFontSize -= 1;
    p.style.fontSize = currentFontSize + "px";
  } else if (clickCounter === 3) {
    shrink.classList.remove("buttonDown");
    clickCounter = 0;
    currentFontSize = 25;
    p.style.fontSize = "";
  }
  if (clickCounter === 1) {
    shrink.classList.add("buttonDown");
  }
});

invert.addEventListener("click", () => {
  p.classList.toggle("upsideDown");
  invert.classList.toggle("buttonDown");
});

red.addEventListener("click", () => {
  p.classList.toggle("danger");
  red.classList.toggle("buttonDown");
});

blue.addEventListener("click", () => {
  p.classList.toggle("aqua");
  blue.classList.toggle("buttonDown");
});

green.addEventListener("click", () => {
  p.classList.toggle("go");
  green.classList.toggle("buttonDown");
});

let blurFilter = 0;

blurEffect.addEventListener("click", () => {
  clickCounter++;

  if (clickCounter < 4) {
    blurFilter += 1;
    p.style.filter = "blur(" + blurFilter + "px)";
  } else if (clickCounter === 4) {
    blurEffect.classList.remove("buttonDown");
    clickCounter = 0;
    p.style = "";
    blurFilter = 0;
  }
  if (clickCounter === 1) {
    blurEffect.classList.add("buttonDown");
  }
});

clear.addEventListener("click", () => {
  p.style = "";
});

JUST HAVE TO GET THE CLEAR FUNCTION WORKING.