import { readInSubDirections } from '../helpers/day2Helper'

const directions = readInSubDirections();
class Submarine {
    horizontalPosition: number;
    depth: number;

    constructor() {
        this.horizontalPosition = 0;
        this.depth = 0;
    }

    up(steps: number) : void {
        this.depth -= steps;
    }

    down(steps: number) : void {
        this.depth += steps;
    }

    forward(steps: number) : void {
        this.horizontalPosition += steps;
    }

    getCoordinateMultiplyer() : number {
        return this.horizontalPosition * this.depth;
    }

    log() : void {
        console.log(`horizontal: ${this.horizontalPosition}, depth: ${this.depth}`);
    }
}

const mySubmarine = new Submarine();

directions.forEach((step : any) => {
    switch(step.direction) {
        case 'up': 
            mySubmarine.up(Number(step.steps));
            return;
        case 'down':
            mySubmarine.down(Number(step.steps));
            return;
        case 'forward':
            mySubmarine.forward(Number(step.steps));
            return;
        default: return;
    }
})

console.log(mySubmarine.getCoordinateMultiplyer());