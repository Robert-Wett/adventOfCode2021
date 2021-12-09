import { readInNumberLines } from '../helpers';

const dayOneData : number[] = readInNumberLines('../input/day1-1.txt');
let depthIncreases : number = 0;

dayOneData.reduce((memo, curValue) => {
    if (memo && memo < curValue) {
        depthIncreases++;
    }

    return curValue;
})

console.log(depthIncreases);