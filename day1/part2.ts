import { readInNumberLines } from '../helpers';

const dayOneData: number[] = readInNumberLines('../input/day1-1.txt');

const getSlidingWindowValues = (index: number, data: number[]): number | null => {
  const windowData = data.slice(index, index + 3);
  if (windowData.length !== 3) {
    return null;
  }

  return windowData.reduce((prevValue, curValue) => prevValue + curValue, 0);
};

const main = () => {
  let depthIncreases: number = 0;

  for (let i = 0; i < dayOneData.length; i++) {
    const window = getSlidingWindowValues(i, dayOneData);
    const nextWindow = getSlidingWindowValues(i + 1, dayOneData);
    if (window && nextWindow && window < nextWindow) {
      depthIncreases++;
    }
  }

  console.log(depthIncreases);
};

main();
