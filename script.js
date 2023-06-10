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
const blur = document.querySelector(".blur");
const clear = document.querySelector(".clear");

// function underline() {}

// function grow() {}

// function shrink() {}

// function invert() {}

// function red() {}

// function blue() {}

// function green() {}

// function blur() {}

// function clear() {}

bold.addEventListener("click", () => {
  p.style.fontWeight = "bold";
});

italicize.addEventListener("click", () => {
  p.style.fontStyle = "italic";
});

underline.addEventListener("click", () => {
  p.style.textDecoration = "underline";
});


const currentFontSize = 25;
const currentClicks = 0

grow.addEventListener("click", () => {
    if (currentClicks < 3) {
        currentFontSize += 1
        p.style.fontSize = currentFontSize + "px"
    }

})