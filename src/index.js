const fs = require('fs');

const isWin = require('./isWin')
const isDone = require('./isDone')
const yourMove = require('./yourMove')
const theirMove = require('./theirMove')
const { updateQ } = require('./rl') 
const {concatListToStr} = require('./utils')

let Q = {}

const iters = 1000000
let wins = 0

for (let i = 0; i < iters; i++) {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let previousBoard = null
    let done = false
    let win = false
    let yourTurn = true
    let move = null

    while (!done) {
        previousBoard = [...board]
        moveDetails = yourTurn ? yourMove(previousBoard, Q) : theirMove(previousBoard, Q)
        board = moveDetails.board
        Q = moveDetails.Q
        move = moveDetails.move
        done = isDone(board)
        win = isWin(board, 1)
        Q = yourTurn ? updateQ(Q, concatListToStr(previousBoard), concatListToStr(board), concatListToStr(move), win ? 1000 : -100) : Q
        yourTurn = !yourTurn
    }
    
    wins = win ? wins + 1 : wins
}

console.log(`${wins} wins over ${iters}`)

fs.writeFile("output.json", JSON.stringify(Q), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});