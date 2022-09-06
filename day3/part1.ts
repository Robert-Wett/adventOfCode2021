import { readInData } from "../helpers";
import { resolve } from 'path';

const partOneData = readInData<string>(resolve(__dirname, '..', 'input/day3-1.txt'), (line) => line.split('\n'));
// const partOneData = readInData<string>(resolve(__dirname, '..', '..', 'input/day3-1.txt'), (line) => line.split('\n'));

const getMostCommon = (input : string[], key : string = '1') : string => {
    const output = [];
    let numOfKey = 0;
    let horizontalIdx = 0;
    while (horizontalIdx < input[0].length) {
        input.map((line) => {
            if (line[horizontalIdx] === key) numOfKey++
        });

        if (numOfKey > Math.floor(input.length / 2)) {
            output.push('0')
        } else {
            output.push('1')
        }
        numOfKey = 0;
        horizontalIdx++
    }

    return output.join('');
}

const getNumberFromBinaryString = (num : string) : number => parseInt(num, 2);

console.log(
  getNumberFromBinaryString(getMostCommon(partOneData, '0')) *
    getNumberFromBinaryString(getMostCommon(partOneData, '1'))
);

