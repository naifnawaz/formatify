const casualLetter = [
  "images/Screenshot(77).png",
  "images/Screenshot_20241108_090323.png",
];

function chosenOption() {
  let selected = document.getElementById("dropdown").selectedIndex;
  const image = document.getElementById("image");
  image.removeAttribute("style");
  image.removeAttribute("onerror");
  switch (selected) {
    case 0:
      generateFormat(casualLetter);
  }
}

function generateFormat(format) {
  const image = document.getElementById("image");
  let index = 0;
  image.src = format[index];
}
