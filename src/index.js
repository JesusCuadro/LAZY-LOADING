import { registerImage } from "./lazy.js";

const min = 1;
const max = 123;

let contador = 0;


const random = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "imgContainer";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return container;
};

const mountNode = document.getElementById("images");

const addButton = document.getElementById('agregar')
const removeButton = document.getElementById('limpiar')

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage)
    registerImage(newImage);
};

const removeImage = () => {
  const container = document.querySelector('.imgContainer')

  if (container) {
    container.remove();
  }

};

addButton.addEventListener("click", addImage)
removeButton.addEventListener("click", removeImage)

addButton.onclick = function(){
  console.count("Has generado esta cantidad de imagenes 🟩")
}

