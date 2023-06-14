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
