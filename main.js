let image = document.getElementById("image");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");
let index = 0;

let selectedFormat = [];
const casualLetter = [
  "images/casualletter/cas1.jpg",
  "images/casualletter/cas2.jpg",
  "images/casualletter/Screenshot_20241126_082840.jpg",
];

const formalLetter = [
  "images/formallettersample1.jpeg",
  "images/formallettersample2.jpg",
];

function chosenOption() {
  let selected = document.getElementById("dropdown").selectedIndex;
  btnNext.style.display = "inline-block";
  btnPrevious.style.display = "inline-block";
  image.removeAttribute("style");
  image.removeAttribute("onerror");
  index = 0;
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
