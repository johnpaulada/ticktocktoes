function isDone(board) {
    return board.every(x => x != 0)
}

module.exports = isDone
