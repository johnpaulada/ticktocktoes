function getStateMax(Q, board) {
    const boardValues = Q[board]
    const values = Object.values(boardValues)

    const max = Math.max(...values, 0)

    return max
}

module.exports = getStateMax