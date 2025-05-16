"use strict";
/*
- Web Workers can’t access the DOM directly.
- Communication is done via postMessage and onmessage.
- You need to serve your files over HTTP/HTTPS (not file://) to use them properly.
- They run in a separate scope, so you can’t use variables/functions from the main thread directly.
*/

onmessage = function (event) {
  console.log("Message from main thread:", event.data);
  postMessage("Hello back from worker!");
};
