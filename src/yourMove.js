const { concatListToStr, randomItemFrom } = require("./utils")
const moveList = require("./moveList")

function yourMove(previousBoard, Q) {
    const board = [...previousBoard]
    const moves = moveList(board, true)
    let move = null

    if (!(board in Q)) {
        Q = {...Q, [concatListToStr(board)]: moves.reduce((m, x) => ({...m, [concatListToStr(x)]: 0}, {}))}
        move = randomItemFrom(moves)
        board[move[0]] = move[1]
    } else {
        // TODO: Sort moves by Q or pick a random move
        move = randomItemFrom(moves)
        board[move[0]] = move[1]
    }

    return {board, Q, move}
}

module.exports = yourMove