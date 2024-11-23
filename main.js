let image = document.getElementById("image");
const btnNext = document.getElementById("next");
let selected = document.getElementById("dropdown").selectedIndex;
let index = 0;
let selectedFormat = [];
const casualLetter = [
  "images/Screenshot(77).png",
  "images/Screenshot_20241108_090323.png",
];

function chosenOption() {
  image.removeAttribute("style");
  image.removeAttribute("onerror");
  switch (selected) {
    case 0:
      selectedFormat = casualLetter;
      generateFormat(casualLetter);
      break;
  }
}

function generateFormat(format) {
  btnNext.addEventListener("click", next);
  image.src = format[index];
}

function next() {
  index++;
  console.log(index);
  generateFormat(selectedFormat);
}
