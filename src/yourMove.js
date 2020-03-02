const { randomItemFrom } = require("./utils")
const moveList = require("./moveList")

function yourMove(board) {
    const moves = moveList(board, true)
    const move = randomItemFrom(moves)
    board[move[0]] = move[1]

    return board
}

module.exports = yourMove