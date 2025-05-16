"use strict";
/*
- The user enters a number and clicks "Calculate Primes".
- The main thread sends that number to the Web Worker.
- The worker calculates all prime numbers up to that number in the background.
- When done, it sends the result back to the main thread, which updates the UI.
*/
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

onmessage = function (event) {
  const limit = parseInt(event.data, 10);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  postMessage(primes);
};
