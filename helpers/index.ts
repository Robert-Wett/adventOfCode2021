import * as fs from 'fs';

export function readInNumberLines(path : string) : number[] {
    return readInData<number>(path, (data) => data.split('\n').map(x => parseInt(x, 10)));
}

export const readInData = <T>(path : string, formattingFunction : Function = (input) => input) : T[] => {
    let data = fs.readFileSync(path, 'utf8');
    return formattingFunction(data);
}