function solution(park, routes) {
  const [H, W] = [park.length - 1, park[0].length - 1];
  let row = park.findIndex((str) => str.includes("S"));
  let col = park[row].indexOf("S");

  for (let i = 0; i < routes.length; i++) {
    let [tmpR, tmpC] = [row, col];
    const [op, n] = routes[i].split(" ");
    const parseN = parseInt(n);

    if (op === "N" && tmpR - parseN < 0) continue;
    if (op === "W" && tmpC - parseN < 0) continue;
    if (op === "E" && tmpC + parseN > W) continue;
    if (op === "S" && tmpR + parseN > H) continue;
    const arr = [];
    for (let j = 1; j <= parseN; j++) {
      if (op === "N") tmpR--;
      if (op === "W") tmpC--;
      if (op === "E") tmpC++;
      if (op === "S") tmpR++;
      arr.push(park[tmpR][tmpC]);
    }
    if (!arr.includes("X")) {
      row = tmpR;
      col = tmpC;
    } else {
      tmpR = row;
      tmpC = col;
    }
  }
  return [row, col];
}
