const isWin = require('./isWin')
const isDone = require('./isDone')
const yourMove = require('./yourMove')
const theirMove = require('./theirMove')
const {concatListToStr} = require('./utils')

const GAMMA = 0.8
const ALPHA = 0.1

let Q = new Map()

const iters = 100000
let wins = 0

function getStateValue(Q, board) {
    const values = Q.get(board).values()
    return Array.from(values).reduce((a, b) => a + b)
}

function getStateMax(Q, board) {
    const boardValues = Q.get(board)
    const values = Array.from(boardValues.values())
    const max = Math.max(...values, 0)

    return max
}

function calculateQ(q, max, reward) {
    return q + ALPHA * (reward + GAMMA * max - q)
}

function updateQ(Q, previousBoard, board, move, reward) {
    if (!Q.has(board)) {
        Q.set(board, new Map())
    }

    const previousBoardValue = Q.get(previousBoard)
    const q = previousBoardValue.has(move) ? previousBoardValue.get(move) : 0
    const max = getStateMax(Q, board)

    Q.get(previousBoard).set(move, calculateQ(q, max, reward))

    return Q
}

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
        Q = yourTurn ? updateQ(Q, concatListToStr(previousBoard), concatListToStr(board), concatListToStr(move), win ? 1000 : 0) : Q
        yourTurn = !yourTurn
    }
    
    wins = win ? wins + 1 : wins
}

console.log(`${wins} wins over ${iters}`)
console.log(Q)