const p = document.querySelector("p");

const bold = document.querySelector("#bold");
bold.addEventListener("click", () => {
  toggleEffect(p, "boldEffect");
  toggleButtonDown(bold);
});

const italicize = document.querySelector("#italicize");
italicize.addEventListener("click", () => {
  toggleEffect(p, "italic");
  toggleButtonDown(italicize);
});

const underline = document.querySelector("#underline");
underline.addEventListener("click", () => {
  toggleEffect(p, "underlineEffect");
  toggleButtonDown(underline);
});

let currentFontSize = 25;
let growClickCounter = 0;
let shrinkClickCounter = 0;

const grow = document.querySelector("#grow");
grow.addEventListener("click", () => {
  shrinkClickCounter = 0;
  removeButtonDown(shrink);
  addButtonDown(grow);
  fontSize("");
  if (growClickCounter < 3) {
    growClickCounter++;
    currentFontSize += 1;
    fontSize(currentFontSize + "px");
  } else if (growClickCounter >= 3) {
    removeButtonDown(grow);
    growClickCounter = 0;
    currentFontSize = 25;
    fontSize("");
  }
});

const shrink = document.querySelector("#shrink");
shrink.addEventListener("click", () => {
  growClickCounter = 0;
  removeButtonDown(grow);
  addButtonDown(shrink);
  fontSize(25);
  if (shrinkClickCounter < 3) {
    shrinkClickCounter++;
    currentFontSize -= 1;
    fontSize(currentFontSize + "px");
  } else if (shrinkClickCounter >= 3) {
    removeButtonDown(shrink);
    shrinkClickCounter = 0;
    currentFontSize = 25;
    fontSize("");
  }
});

const invert = document.querySelector("#invert");
invert.addEventListener("click", () => {
  toggleEffect(p, "upsideDown");
  toggleButtonDown(invert);
});

const red = document.querySelector("#red");
red.addEventListener("click", () => {
  removeEffect(p, "aqua");
  removeEffect(p, "go");
  toggleEffect(p, "danger");
  toggleButtonDown(red);
  removeButtonDown(blue);
  removeButtonDown(green);
});

const blue = document.querySelector("#blue");
blue.addEventListener("click", () => {
  removeEffect(p, "danger");
  removeEffect(p, "go");
  toggleEffect(p, "aqua");
  toggleButtonDown(blue);
  removeButtonDown(red);
  removeButtonDown(green);
});

const green = document.querySelector("#green");
green.addEventListener("click", () => {
  removeEffect(p, "danger");
  removeEffect(p, "aqua");
  toggleEffect(p, "go");
  toggleButtonDown(green);
  removeButtonDown(red);
  removeButtonDown(blue);
});

let blurFilter = 0;
let blurClickCounter = 0;

const blurEffect = document.querySelector("#blur");
blurEffect.addEventListener("click", () => {
  blurClickCounter++;

  if (blurClickCounter === 1) {
    addButtonDown(blurEffect);
  }

  if (blurClickCounter < 4) {
    blurFilter += 1;
    p.style.filter = "blur(" + blurFilter + "px)";
  } else if (blurClickCounter === 4) {
    removeButtonDown(blurEffect);
    blurClickCounter = 0;
    p.style = "";
    blurFilter = 0;
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  const classNamesToRemove = [
    "boldEffect",
    "italic",
    "underlineEffect",
    "danger",
    "upsideDown",
    "aqua",
    "go",
    "buttonDown",
  ];

  classNamesToRemove.forEach((className) => {
    p.classList.remove(className);
  });

  const buttons = document.querySelectorAll(".buttonDown");
  buttons.forEach((button) => {
    button.classList.remove("buttonDown");
  });
  growClickCounter = 0;
  shrinkClickCounter = 0;
  blurClickCounter = 0;
  currentFontSize = 25;
  p.style = "";
});

function addButtonDown(element) {
  element.classList.add("buttonDown");
}

function toggleButtonDown(element) {
  element.classList.toggle("buttonDown");
}

function removeButtonDown(element) {
  element.classList.remove("buttonDown");
}

function addEffect(element, effect) {
  element.classList.add(effect);
}

function toggleEffect(element, effect) {
  element.classList.toggle(effect);
}

function removeEffect(element, effect) {
  element.classList.remove(effect);
}

function fontSize(value) {
  p.style.fontSize = value;
}
