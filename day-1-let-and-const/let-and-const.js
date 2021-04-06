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

function main() {
  const rad = readLine();
  const PI = Math.PI;
  console.log(PI * Math.pow(rad, 2));
  console.log(2 * PI * rad);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

/*

function main() {
    const PI = Math.PI;
    const rad = readLine();
    let radSquared = Math.pow(rad, 2);
    let area = PI * radSquared;
    console.log(area);
    let perimeter = 2 * PI * rad;
    console.log(perimeter);
  
    try {
      // Attempt to redefine the value of constant variable PI
      PI = 0;
      // Attempt to print the value of PI
      console.log(PI);
    } catch (error) {
      console.error("You correctly declared 'PI' as a constant.");
    }
  }

  */
