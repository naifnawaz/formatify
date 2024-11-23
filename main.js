let image = document.getElementById("image");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");
let index = 0;
let selectedFormat = [];
const casualLetter = [
  "images/Screenshot(77).png",
  "images/Screenshot_20241108_090323.png",
];

const formalLetter = [
  "images/formallettersample1.jpeg",
  "images/formallettersample2.jpg",
];

function chosenOption() {
  let selected = document.getElementById("dropdown").selectedIndex;
  image.removeAttribute("style");
  image.removeAttribute("onerror");
  switch (selected) {
    case 0:
      selectedFormat = casualLetter;
      generateFormat(casualLetter);
      break;
    case 1:
      selectedFormat = formalLetter;
      generateFormat(formalLetter);
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
