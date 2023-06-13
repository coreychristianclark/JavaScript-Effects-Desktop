const p = document.querySelector("p");

const bold = document.querySelector("#bold");
bold.addEventListener("click", () => {
  p.classList.toggle("boldEffect");
  bold.classList.toggle("buttonDown");
});

const italicize = document.querySelector("#italicize");
italicize.addEventListener("click", () => {
  p.classList.toggle("italic");
  italicize.classList.toggle("buttonDown");
});

const underline = document.querySelector("#underline");
underline.addEventListener("click", () => {
  p.classList.toggle("underlineEffect");
  underline.classList.toggle("buttonDown");
});

let currentFontSize = 25;
let growClickCounter = 0;
let shrinkClickCounter = 0

const grow = document.querySelector("#grow");
grow.addEventListener("click", () => {
    p.classList.remove("shrink");
    shrink.classList.remove('buttonDown')
    grow.classList.add("buttonDown");
            p.style.fontSize = "";
      
  if (growClickCounter < 3) {
    growClickCounter++;
    currentFontSize += 1;
    p.style.fontSize = currentFontSize + "px";
  } else if (growClickCounter >= 3) {
    grow.classList.remove("buttonDown");
    growClickCounter = 0;
    currentFontSize = 25;
    p.style.fontSize = "";
  }
});

const shrink = document.querySelector("#shrink");
shrink.addEventListener("click", () => {
        p.classList.remove("grow");
        grow.classList.remove("buttonDown");
    shrink.classList.add("buttonDown");
    p.style.fontSize = ""
      
  if (shrinkClickCounter < 3) {
    shrinkClickCounter++;
    currentFontSize -= 1;
    p.style.fontSize = currentFontSize + "px";
  } else if (shrinkClickCounter >= 3) {
    shrink.classList.remove("buttonDown");
    shrinkClickCounter = 0;
    currentFontSize = 25;
    p.style.fontSize = "";
  }
});

const invert = document.querySelector("#invert");
invert.addEventListener("click", () => {
  p.classList.toggle("upsideDown");
  invert.classList.toggle("buttonDown");
});

const red = document.querySelector("#red");
red.addEventListener("click", () => {
  p.classList.remove("aqua");
  p.classList.remove("go");
  p.classList.toggle("danger");
  red.classList.toggle("buttonDown");
  blue.classList.remove("buttonDown");
  green.classList.remove("buttonDown");
});

const blue = document.querySelector("#blue");
blue.addEventListener("click", () => {
  p.classList.remove("danger");
  p.classList.remove("go");
  p.classList.toggle("aqua");
  blue.classList.toggle("buttonDown");
  red.classList.remove("buttonDown");
  green.classList.remove("buttonDown");
});

const green = document.querySelector("#green");
green.addEventListener("click", () => {
  p.classList.remove("danger");
  p.classList.remove("aqua");
  p.classList.toggle("go");
  green.classList.toggle("buttonDown");
  red.classList.remove("buttonDown");
  blue.classList.remove("buttonDown");
});

let blurFilter = 0;

const blurEffect = document.querySelector("#blur");
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

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  p.classList.remove("boldEffect");
  p.classList.remove("italic");
  p.classList.remove("underlineEffect");
  p.classList.remove("upsideDown");
  p.classList.remove("danger");
  p.classList.remove("aqua");
  p.classList.remove("go");
  p.classList.remove("buttonDown");
  p.style = "";
  bold.classList.remove("buttonDown");
  italicize.classList.remove("buttonDown");
  underline.classList.remove("buttonDown");
  grow.classList.remove("buttonDown");
  shrink.classList.remove("buttonDown");
  invert.classList.remove("buttonDown");
  red.classList.remove("buttonDown");
  blue.classList.remove("buttonDown");
  green.classList.remove("buttonDown");
  blurEffect.classList.remove("buttonDown");
});
