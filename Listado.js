"use strict";
const personas = [new Persona("Juan", "Perez"), new Persona("Sofia", "Lara")];

function mostrarPersonas() {
  console.log("Mostrar Personas...");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}
