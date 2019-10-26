/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  const visited = {};
  cleanCell(robot, 0, 0, visited);
};

function cleanCell(robot, row, col, visited) {
  const key = `${row}:${col}`;
  if (visited[key]) return;

  robot.clean();
  visited[key] = true;

  if (moveUp(robot)) {
    cleanCell(robot, row - 1, col, visited);
    moveDown(robot);
  }

  if (moveDown(robot)) {
    cleanCell(robot, row + 1, col, visited);
    moveUp(robot);
  }

  if (moveLeft(robot)) {
    cleanCell(robot, row, col - 1, visited);
    moveRight(robot);
  }

  if (moveRight(robot)) {
    cleanCell(robot, row, col + 1, visited);
    moveLeft(robot);
  }
}

function moveUp(robot) {
  return robot.move();
}

function moveDown(robot) {
  robot.turnRight();
  robot.turnRight();
  const move = robot.move();
  robot.turnLeft();
  robot.turnLeft();
  return move;
}

function moveLeft(robot) {
  robot.turnLeft();
  const move = robot.move();
  robot.turnRight();
  return move;
}

function moveRight(robot) {
  robot.turnRight();
  const move = robot.move();
  robot.turnLeft();
  return move;
}
