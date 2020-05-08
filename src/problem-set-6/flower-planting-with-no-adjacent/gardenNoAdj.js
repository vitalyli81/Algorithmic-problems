/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */

class Garden {
  constructor(n) {
    this.n = n;
    this.edges = [];
    this.flower = null;
  }

  connectToGarden(garden) {
    if (!this.edges.includes(garden)) {
      this.edges.push(garden);
    }
  }

  canPlant(flower) {
    return (
      this.flower !== flower && this.edges.every((g) => g.flower !== flower)
    );
  }

  hasFlower() {
    return this.flower !== null;
  }

  plant(flower) {
    this.flower = flower;
  }
}

var gardenNoAdj = function (N, paths) {
  const gardens = new Map();
  const flowers = [];

  for (let i = 1; i <= N; i++) {
    gardens.set(i, new Garden(i));
  }

  for (let [g1, g2] of paths) {
    gardens.get(g1).connectToGarden(gardens.get(g2));
    gardens.get(g2).connectToGarden(gardens.get(g1));
  }

  for ([_, garden] of gardens) {
    let flower = 1;

    while (!garden.hasFlower(flower)) {
      if (garden.canPlant(flower)) {
        garden.plant(flower);
        flowers.push(flower);
      } else {
        flower++;
      }
    }
  }

  return flowers;
};
