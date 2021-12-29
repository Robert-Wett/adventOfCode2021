import { readInSubDirections } from '../helpers/day2Helper'

const directions = readInSubDirections();
/*
down X increases your aim by X units.
up X decreases your aim by X units.
forward X does two things:
It increases your horizontal position by X units.
It increases your depth by your aim multiplied by X.
*/
class Submarine {
    horizontalPosition: number;
    depth: number;
    aim: number;

    constructor() {
        this.horizontalPosition = 0;
        this.depth = 0;
        this.aim = 0;
    }

    up(steps: number) : void {
        this.depth -= steps;
        this.aim -= steps;
    }

    down(steps: number) : void {
        this.depth += steps;
        this.aim += steps;
    }

    forward(steps: number) : void {
        this.horizontalPosition += steps;
        // Handle aim
        this.depth += this.aim * steps;
    }

    getCoordinateMultiplyer() : number {
        return this.horizontalPosition * this.depth;
    }

    log() : void {
        console.log(`horizontal: ${this.horizontalPosition}, depth: ${this.depth}`);
    }
}

const mySubmarine = new Submarine();

console.log(mySubmarine);

directions.forEach((step : any) => {
    console.log(step);
    switch(step.direction) {
        case 'up': 
            mySubmarine.up(Number(step.steps));
            return;
        case 'down':
            mySubmarine.down(Number(step.steps));
            return;
        case 'forward':
            console.log(`Going forward ${Number(step.steps)}`)
            mySubmarine.forward(Number(step.steps));
            return;
        default:
            console.log('fuck you');
    }
})

console.log(mySubmarine.getCoordinateMultiplyer());