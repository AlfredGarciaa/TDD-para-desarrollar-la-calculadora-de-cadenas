import Calculador from "../Calcular-Cadena.js";

const numero_input = document.querySelector("#numero");
const form = document.querySelector("#cal-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero_cal = numero_input.value;
  const cal = new Calculador();

  div.innerHTML = "<p>" + cal.sumar_cadena(numero_cal) + "</p>";
});
