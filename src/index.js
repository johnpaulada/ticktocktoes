const isWin = require('./isWin')
const isDone = require('./isDone')
const yourMove = require('./yourMove')
const theirMove = require('./theirMove')
const { updateQ } = require('./rl') 
const {concatListToStr} = require('./utils')

let Q = {}

const iters = 1000
let wins = 0

for (let i = 0; i < iters; i++) {
    console.log(i)

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
        Q = yourTurn ? updateQ(Q, concatListToStr(previousBoard), concatListToStr(board), concatListToStr(move), win ? 1000 : -1000) : Q
        yourTurn = !yourTurn
    }
    
    wins = win ? wins + 1 : wins
}

console.log(`${wins} wins over ${iters}`)
console.log(Object.keys(Q))