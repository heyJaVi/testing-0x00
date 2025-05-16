"use strict";
const worker = new Worker("worker.js");
const button = document.getElementById("start");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const limit = document.getElementById("limit").value;
  output.textContent = "Calculating...";
  worker.postMessage(limit);
});

worker.onmessage = (event) => {
  output.textContent = `Primes:\n${event.data.join(", ")}`;
};
