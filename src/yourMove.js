const { concatListToStr, randomItemFrom } = require("./utils")
const moveList = require("./moveList")

const EXPLORATION_RATIO = 0.2

function yourMove(previousBoard, Q) {
    const board = [...previousBoard]
    const moves = moveList(board, true)
    let move = null

    if (!(concatListToStr(board) in Q)) {
        Q = {...Q, [concatListToStr(board)]: moves.reduce((m, x) => ({...m, [concatListToStr(x)]: 0}), {})}
        move = randomItemFrom(moves)
        board[move[0]] = move[1]
    } else {
        if (Math.random() < EXPLORATION_RATIO) {
            move = randomItemFrom(moves)
            board[move[0]] = move[1]
        } else {
            move = Object.entries(Q[concatListToStr(board)]).sort((a, b) => b[1] - a[1])[0][0].split("|")
            board[move[0]] = move[1]
        }
    }

    return {board, Q, move}
}

module.exports = yourMove