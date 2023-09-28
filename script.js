"use strict";

const sons = {
  A: `sounds/1.mp3`,
  S: `sounds/2.mp3`,
  D: `sounds/3.mp3`,
  F: `sounds/4.mp3`,
  G: `sounds/5.mp3`,
  H: `sounds/6.mp3`,
  J: `sounds/7.mp3`,
  K: `sounds/8.mp3`,
  L: `sounds/9.mp3`,
}

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra]);
  audio.play();
};

const adicionarEfeito = (letra) =>  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra = evento.type == "click" ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);

// window.addE...;
