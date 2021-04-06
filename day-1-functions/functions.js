"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */

function factorial(n) {
  let num = n;

  if (num === 0 || num > 10) {
    return "out of bounds";
  }
  while (n > 1) {
    n--;
    num = num * n;
  }
  return num;
}
