"use strict";
const worker = new Worker("worker.js");

worker.postMessage("Hello from main thread");

worker.onmessage = function (event) {
  console.log("Message from worker:", event.data);
};
