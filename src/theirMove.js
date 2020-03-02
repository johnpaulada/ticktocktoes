const { randomItemFrom } = require("./utils")
const moveList = require('./moveList')

function theirMove(board) {
    const moves = moveList(board, false)
    const move = randomItemFrom(moves)
    board[move[0]] = move[1]

    return board
}

module.exports = theirMove