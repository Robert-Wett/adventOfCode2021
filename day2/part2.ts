import { readInSubDirections } from '../helpers/day2Helper'

const directions = readInSubDirections();
class Submarine {
    horizontalPosition: number;
    depth: number;
    aim: number;

    constructor() {
        this.horizontalPosition = 0;
        this.depth = 0;
        this.aim = 0;
        this.log();
    }

    up(steps: number) : void {
        this.aim -= steps;
    }

    down(steps: number) : void {
        this.aim += steps;
    }

    forward(steps: number) : void {
        this.horizontalPosition += steps;
        this.depth += (steps * this.aim);
    }

    getCoordinateMultiplyer() : number {
        return this.horizontalPosition * this.depth;
    }

    log() : void {
        console.log(`aim: ${this.aim}, horizontal: ${this.horizontalPosition}, depth: ${this.depth}`);
    }
}

const mySubmarine = new Submarine();

directions.forEach((step : any) => {
    console.log(step);
    switch(step.direction) {
        case 'up': 
            mySubmarine.up(Number(step.steps));
            mySubmarine.log();
            return;
        case 'down':
            mySubmarine.down(Number(step.steps));
            mySubmarine.log();
            return;
        case 'forward':
            mySubmarine.forward(Number(step.steps));
            mySubmarine.log();
            return;
    }
})

console.log(mySubmarine.getCoordinateMultiplyer());