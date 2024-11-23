let image = document.getElementById("image");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");
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
  image.src = format[index];
}

btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);

function next() {
  index++;
  if (index >= selectedFormat.length) {
    index = 0;
    generateFormat(selectedFormat);
  } else {
    generateFormat(selectedFormat);
  }
}

function previous() {
  index--;
  if (index < 0) {
    index = selectedFormat.length - 1;
    generateFormat(selectedFormat);
  } else {
    generateFormat(selectedFormat);
  }
}
