import { readInData } from '../helpers';
import { resolve } from 'path';

// Used for running without debugging
const partTwoData = readInData<string>(
  resolve(__dirname, '..', 'input/day3-1.txt'),
  (line) => line.split('\n')
);

// Used for running with debugging - `tsc` will put .js with sourcemaps
// in the 'out' directory and needs another '..' to read the file correctly
// const partTwoData = readInData<string>(resolve(__dirname, '..', '..', 'input/day3-1.txt'), (line) => line.split('\n'));

// Used for testing
// const partTwoData = [
//   '00100',
//   '11110',
//   '10110',
//   '10111',
//   '10101',
//   '01111',
//   '00111',
//   '11100',
//   '10000',
//   '11001',
//   '00010',
//   '01010',
// ];

const getOxygenGeneratorRating = (
  input: string[],
  horizontalIdx: number = 0
): number => {
  if (input.length === 1) {
    return parseInt(input[0], 2);
  }

  const onesNumbers = [];
  const zerosNumbers = [];

  while (horizontalIdx < input[0].length) {
    input.map((line) => {
      if (line[horizontalIdx] === '1') {
        onesNumbers.push(line);
      } else {
        zerosNumbers.push(line);
      }
    });

    if (onesNumbers.length >= zerosNumbers.length) {
      return getOxygenGeneratorRating(onesNumbers, horizontalIdx + 1);
    } else {
      return getOxygenGeneratorRating(zerosNumbers, horizontalIdx + 1);
    }
  }
};

const getC02ScrubberRating = (
  input: string[],
  horizontalIdx: number = 0
): number => {
  if (input.length === 1) {
    return parseInt(input[0], 2);
  }

  const onesNumbers = [];
  const zerosNumbers = [];

  while (horizontalIdx < input[0].length) {
    input.map((line) => {
      if (line[horizontalIdx] === '1') {
        onesNumbers.push(line);
      } else {
        zerosNumbers.push(line);
      }
    });

    if (zerosNumbers.length <= onesNumbers.length) {
      return getC02ScrubberRating(zerosNumbers, horizontalIdx + 1);
    } else {
      return getC02ScrubberRating(onesNumbers, horizontalIdx + 1);
    }
  }
};

console.log(
  getOxygenGeneratorRating(partTwoData) * getC02ScrubberRating(partTwoData)
);
