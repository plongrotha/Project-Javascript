const containerElement = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  containerElement.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
  colorContainers.forEach((colorContainers) => {
    const newColorCode = randomcolor();
    console.log(newColorCode);
  });
}

function randomcolor() {
  const chars = "0123456789abcdef";
  const colorCodeLenght = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    return colorCode;
  }
}
