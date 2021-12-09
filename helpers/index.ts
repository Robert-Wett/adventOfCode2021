import * as fs from 'fs';

export function readInNumberLines(path: string) : Array<number> {
    let data = fs.readFileSync(path, 'utf8');
    return data.split('\n').map(x => parseInt(x, 10));
}