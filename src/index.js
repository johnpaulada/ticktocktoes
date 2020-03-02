const isWin = require('./isWin')
const isDone = require('./isDone')
const yourMove = require('./yourMove')
const theirMove = require('./theirMove')

let yourQTable = new Map()
let theirQTable = new Map()

const iters = 10000
let wins = 0

for (let i = 0; i < iters; i++) {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let done = false
    let win = false
    let yourTurn = true

    while (!done) {
        board = yourTurn ? yourMove(board) : theirMove(board)
        done = isDone(board)
        win = isWin(board, 1)
        yourTurn = !yourTurn
    }
    
    wins = win ? wins + 1 : wins
}

console.log(`${wins} wins over ${iters}`)