import * as fs from 'fs';
import * as path from 'path';

enum Direction {
  Forward,
  Down,
  Up,
}

interface SubmarineDirection {
  direction: Direction;
  steps: number;
}

/*
export function readInSubDirections(): Array<SubmarineDirection> {
  let data = fs.readFileSync('../input/day2-1.txt', 'utf8');
  return data.split('\n').map((x) => {
      let [direction, steps] = x.split(' ');
      let subDirection;
      switch (direction) {
          case 'forward': subDirection = Direction.Forward
          case 'down': subDirection = Direction.Down
          case 'up': subDirection = Direction.Up
      }

      return SubmarineDirection(subDirection, Number(steps))
  });
}
*/

export function readInSubDirections(): Array<Object> {
  let data = fs.readFileSync(path.join(__dirname, '..', '/input/day2-1.txt'), 'utf8');
  return data.split('\n').map((x) => {
    let [direction, steps] = x.split(' ');
    console.log(direction, steps);
    return { direction, steps };
  });
}
