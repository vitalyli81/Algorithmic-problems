export class Grid {
  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.walls = {};
  }

  isInBound({ row, col }) {
    const isInLowBound = row >= 0 && col >= 0;
    const isInUpperBound = row < this.rows && col < this.cols;

    return isInLowBound && isInUpperBound;
  }

  isPassable(node) {
    return !(JSON.stringify(node) in this.walls);
  }

  getNeighbors({ row, col }) {
    const neighbors = [
      { row: row + 1, col },
      { row: row - 1, col },
      { row, col: col + 1 },
      { row, col: col - 1 }
    ];

    const results = neighbors.filter(node => {
      if (this.isInBound(node) && this.isPassable(node)) {
        return true;
      }
    });

    return results;
  }

  addWall(node) {
    this.walls[JSON.stringify(node)] = 1;
  }
}

export default Grid;
