const containerElement = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  containerElement.appendChild(colorContainer);
}
