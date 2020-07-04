/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  const graph = {};
  const frontier = [[src, 0, K + 1]];

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < flights.length; i++) {
    const [from, to, price] = flights[i];
    graph[from].push([to, price]);
  }

  while (frontier.length) {
    const [curCity, costSoFar, steps] = frontier.pop();

    if (curCity === dst) {
      return costSoFar;
    }

    if (steps > 0) {
      const nextCityList = graph[curCity];

      for (let i = 0; i < nextCityList.length; i++) {
        const [nextCity, price] = nextCityList[i];
        const newCost = costSoFar + price;

        frontier.push([nextCity, newCost, steps - 1]);
      }

      frontier.sort((a, b) => b[1] - a[1]);
    }
  }

  return -1;
};
