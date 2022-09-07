import * as fs from 'fs';
import { resolve } from 'path';

type TBingoCard = {
    board: number[][];
    addLineToBoard: (line : string) => void;
    checkForBingo: () => boolean;
}

class BingoCard implements TBingoCard {
    board: number[][];

    constructor() {
        this.board = [];
    }

    addLineToBoard(line : string) : void {
        this.board.push(line.split(' ').filter(Boolean).map(Number));
    }

    markBoard(hit : number) : void {
        this.board.forEach((row, idx) => {
            row.forEach((spot, innerIdx) => {
                if (spot === hit) {
                    this.board[idx][innerIdx] = -1;
                }
            })
        })
    }

    checkForBingo() : boolean {
        if (this.board.length === 0) return false;

        // Check horizontal wins
        const rows = this.board.map(row => row.every(v => v === row[0]));
        if (rows.filter(Boolean).length > 0) {
            return true;
        }

        // Check vertical wins
        let horizontalIdx = 0;
        let numHits = 0;
        const hitsNeeded = this.board.length;

        while (horizontalIdx < this.board.length) {
            this.board.map(row => {
                if (row[horizontalIdx] === -1) {
                    numHits++
                }
            })

            if (numHits === hitsNeeded) {
                return true;
            }

            horizontalIdx++;
            numHits = 0;
        }

        return false;
    }

    addUpNonMarks() : number {
        let total = 0;
        this.board.forEach((row) => {
            row.forEach((num) => {
                if (num !== -1) {
                    total += num
                }
            })
        })
        return total;
    }

}

let winningMoves : number[] = [];
const bingoCards : BingoCard[] = [];
let currentBingoCard : BingoCard | null;

const parseBingoCards = (line : string) => {
    if (!line && currentBingoCard) {
        bingoCards.push(currentBingoCard);
        currentBingoCard = null;
        return;
    }

    if (!line) return;

    if (line.includes(',')) {
        winningMoves = line.split(',').map(Number);
        return;
    }

    if (!currentBingoCard) {
        currentBingoCard = new BingoCard();
    }

    currentBingoCard.addLineToBoard(line);
}

let executionData = resolve(__dirname, '..', 'input/day4-1.txt');
let data = fs.readFileSync(executionData, 'utf8');
// let debuggingData = resolve(__dirname, '..', '..', 'input/day4-1-test.txt');
// let data = fs.readFileSync(debuggingData, 'utf8');

data.split('\n').map(parseBingoCards);

const runBingoGames = (bingoCards : BingoCard[], winningMoves : number[]) : number => {
    for (let i = 0; i < winningMoves.length; i++) {
        for (let j = 0; j < bingoCards.length; j++) {
            bingoCards[j].markBoard(winningMoves[i]);
            const isWinner = bingoCards[j].checkForBingo();
            if (isWinner) {
                const answerForProblem = bingoCards[j].addUpNonMarks() * winningMoves[i];
                console.log(`Bingo card #${j+1} is a winner!`)
                console.log(bingoCards[j].board, winningMoves[i]);
                return answerForProblem;
            }
        }
    }
}

const answer = runBingoGames(bingoCards, winningMoves);
console.log(`Answer for day 4 part 1: ${answer}`);
