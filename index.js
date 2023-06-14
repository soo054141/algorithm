// template1) readline으로 입력받아 처리하는 방법
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = "";
// rl.on("line", (line) => {
//   input = input.concat(line + "\n");
// }).on("close", function () {
//input값에 따라 아래 내용 바꿔서 쓴다
//   const n = input.split(" ");
//   const m = n[2].split(/\r\n|\r|\n/);
//   const a = Number(n[0]),
//     b = Number(n[1]),
//     c = Number(m[0]);
//   const d = Number(m[1]);

//   process.exit();
// });

// template2) 미리 input.txt 파일에 값을 넣어두고 쓰는 방법
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const inputTestCase = [];
for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(",").map((i) => +i);
  inputTestCase.push(arr);
}

function solution(food) {
  let foodArr = [];

  for (let i = 1; i < food.length; i++) {
    let count = 0;

    if (food[i] % 2) count = parseInt(food[i] / 2);
    else count = food[i] / 2;

    if (count) {
      for (let j = 0; j < count; j++) {
        foodArr.push(i);
      }
    }
  }

  return `${foodArr.join("")}0${[...foodArr].reverse().join("")}`;
}

for (let i = 0; i < inputTestCase.length; i++) {
  console.log(solution(inputTestCase[i]));
}
