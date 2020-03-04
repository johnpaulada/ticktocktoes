const calculateQ = require('./calculateQ')
const getStateMax = require('./getStateMax')

function getStateValue(Q, board) {
    const values = Q.get(board).values()
    return Array.from(values).reduce((a, b) => a + b)
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

module.exports = updateQ