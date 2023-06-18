function solution(players, callings) {
  const result = [...players];
  const playersMap = new Map();

  for (let i = 0; i < players.length; i++) {
    playersMap.set(players[i], i);
  }

  for (const call of callings) {
    const next = playersMap.get(call) - 1; // 추월 등수
    playersMap.set(call, next);
    const target = result[next]; // 바뀌는 사람
    playersMap.set(target, next + 1);
    result[next] = call;
    result[next + 1] = target;
  }

  return result;
}
