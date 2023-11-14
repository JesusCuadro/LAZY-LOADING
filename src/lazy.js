
const isIntersecting = (entry) => {
    return entry.isIntersecting // True dentro de la pantalla
}

const loadImage = (entry) => {

    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    // cargue imagen
    imagen.src = url

    console.count("Ha cargado esta cantidad de imagenes 🟥");

    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};
