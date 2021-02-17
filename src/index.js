import anime from "animejs";
// Importar solo para que webpack lo agregue
import css from "./index.css";

// Esto no necesariamente tiene que ser una funcion..
function component() {
  const element = document.createElement('div');
  element.classList.add("css-selector-demo");
  element.innerHTML = "Teeeest!!";
  return element;
}

const newComponent = component();
document.body.appendChild(newComponent);

// Agregamos un event listener para el elemento
newComponent.addEventListener("click", () => {
  anime({
    targets: '.css-selector-demo',
    translateX: 250,
    duration: 500,
    loop: false,
  }); 
})
