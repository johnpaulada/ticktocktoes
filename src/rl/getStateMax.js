function getStateMax(Q, board) {
    const boardValues = Q.get(board)
    const values = Array.from(boardValues.values())
    const max = Math.max(...values, 0)

    return max
}

module.exports = getStateMax