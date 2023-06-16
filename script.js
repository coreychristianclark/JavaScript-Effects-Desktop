const p = document.querySelector("p");

const bold = document.querySelector("#bold");
bold.addEventListener("click", () => {
  p.classList.toggle("boldEffect");
  toggleButtonDown(bold);
});

const italicize = document.querySelector("#italicize");
italicize.addEventListener("click", () => {
  p.classList.toggle("italic");
  toggleButtonDown(italicize);
});

const underline = document.querySelector("#underline");
underline.addEventListener("click", () => {
  p.classList.toggle("underlineEffect");
  toggleButtonDown(underline);
});

let currentFontSize = 25;
let growClickCounter = 0;
let shrinkClickCounter = 0;











FIX GROWWWWWWWWWWWWW









const grow = document.querySelector("#grow");
grow.addEventListener("click", () => {
  shrinkClickCounter = 0;
  removeButtonDown(shrink);
  //   shrink.classList.remove("buttonDown");
  addButtonDown("grow");
  //   grow.classList.add("buttonDown");
  p.style.fontSize = "";
  if (growClickCounter < 3) {
    growClickCounter++;
    currentFontSize += 1;
    p.style.fontSize = currentFontSize + "px";
  } else if (growClickCounter >= 3) {
    removeButtonDown(grow);
    // grow.classList.remove("buttonDown");
    growClickCounter = 0;
    currentFontSize = 25;
    p.style.fontSize = "";
  }
});

const shrink = document.querySelector("#shrink");
shrink.addEventListener("click", () => {
  growClickCounter = 0;
  removeButtonDown(grow);
  //   grow.classList.remove("buttonDown");
  addButtonDown(shrink);
  // shrink.classList.add("buttonDown");
  // blurEffect.classList.remove("buttonDown")
  p.style.fontSize = 25;

  if (shrinkClickCounter < 3) {
    shrinkClickCounter++;
    currentFontSize -= 1;
    p.style.fontSize = currentFontSize + "px";
  } else if (shrinkClickCounter >= 3) {
    removeButtonDown("shrink");
    // shrink.classList.remove("buttonDown");
    shrinkClickCounter = 0;
    currentFontSize = 25;
    p.style.fontSize = "";
  }
});

const invert = document.querySelector("#invert");
invert.addEventListener("click", () => {
  p.classList.toggle("upsideDown");
  toggleButtonDown(invert);
});

const red = document.querySelector("#red");
red.addEventListener("click", () => {
  p.classList.remove("aqua");
  p.classList.remove("go");
  p.classList.toggle("danger");
  toggleButtonDown(red);
  removeButtonDown(blue);
  //   blue.classList.remove("buttonDown");
  removeButtonDown(green);
  //   green.classList.remove("buttonDown");
});

const blue = document.querySelector("#blue");
blue.addEventListener("click", () => {
  p.classList.remove("danger");
  p.classList.remove("go");
  p.classList.toggle("aqua");
  toggleButtonDown(blue);
  removeButtonDown(red);
  //   red.classList.remove("buttonDown");
  removeButtonDown(green);
  //   green.classList.remove("buttonDown");
});

const green = document.querySelector("#green");
green.addEventListener("click", () => {
  p.classList.remove("danger");
  p.classList.remove("aqua");
  p.classList.toggle("go");
  toggleButtonDown(green);
  removeButtonDown(red);
  //   red.classList.remove("buttonDown");
  removeButtonDown(blue);
  //   blue.classList.remove("buttonDown");
});

let blurFilter = 0;
let blurClickCounter = 0;

const blurEffect = document.querySelector("#blur");
blurEffect.addEventListener("click", () => {
  blurClickCounter++;

  if (blurClickCounter < 4) {
    blurFilter += 1;
    p.style.filter = "blur(" + blurFilter + "px)";
  } else if (blurClickCounter === 4) {
    removeButtonDown(blurEffect);
    // blurEffect.classList.remove("buttonDown");
    blurClickCounter = 0;
    p.style = "";
    blurFilter = 0;
  }
  if (blurClickCounter === 1) {
    toggleButtonDown(blurEffect);
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  const classNamesToRemove = [
    "boldEffect",
    "italic",
    "underlineEffect",
    "upsideDown",
    "danger",
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

  p.style = "";
  //   p.classList.remove("boldEffect");
  //   p.classList.remove("italic");
  //   p.classList.remove("underlineEffect");
  //   p.classList.remove("upsideDown");
  //   p.classList.remove("danger");
  //   p.classList.remove("aqua");
  //   p.classList.remove("go");
  //   p.classList.remove("buttonDown");
  //   p.style = "";
  //   bold.classList.remove("buttonDown");
  //   italicize.classList.remove("buttonDown");
  //   underline.classList.remove("buttonDown");
  //   grow.classList.remove("buttonDown");
  //   shrink.classList.remove("buttonDown");
  //   invert.classList.remove("buttonDown");
  //   red.classList.remove("buttonDown");
  //   blue.classList.remove("buttonDown");
  //   green.classList.remove("buttonDown");
  //   blurEffect.classList.remove("buttonDown");
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
