"use strict";
// const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const logFileText = async (file) => {
  const response = await fetch(file);
  const text = await response.text();
  return text;
};
const data = logFileText("http://127.0.0.1:8080/input.txt").then(function (
  result
) {
  return result;
});
console.log(data);

// const fs = require("fs");

// const data = fs.readFileSync("input.txt", "utf8").split("\n").map(Number);

// let incSum = 0;

// for (let i = 0; i < data.length; i++) {
//   if (data[i] > data[i - 1]) {
//     incSum++;
//   }
// }
// console.log(`Increased number ${incSum}`);

// ///PART 2
// let incSums = 0;

// for (let i = 0; i < data.length; i++) {
//   const curr = data[i] + data[i + 1] + data[i + 2];
//   const next = data[i + 1] + data[i + 2] + data[i + 3];
//   if (next > curr) {
//     incSums++;
//   }
// }
// console.log(`Increased numbers ${incSums}`);
