"use strict";
const h1 = document.createElement("h1");

setInterval(() => {
  const fechaActual = new Date();

  const hour = fechaActual.getHours();
  const minutes = fechaActual.getMinutes();
  const seconds = fechaActual.getSeconds();

  const h1 = document.querySelector("h1");
  h1.textContent = `${hour}:${minutes}:${seconds}`;
}, 1000);

document.querySelector("body").append(h1);
