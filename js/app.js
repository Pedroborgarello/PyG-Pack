const btProductos = document.querySelector('.bt-productos');
const botoneraHijos = document.querySelector('.botonera-hijos');

btProductos.addEventListener("click", (e) => {
    botoneraHijos.classList.toggle('activar');
});