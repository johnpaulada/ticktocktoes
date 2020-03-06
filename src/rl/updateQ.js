const calculateQ = require('./calculateQ')
const getStateMax = require('./getStateMax')

function updateQ(Q, previousBoard, board, move, reward) {
    if (!(board in Q)) {
        Q = {...Q, [board]: {}}
    }

    const previousBoardValue = Q[previousBoard]
    const q = move in previousBoardValue ? previousBoardValue[move] : 0
    const max = getStateMax(Q, board)

    const calculated = calculateQ(q, max, reward)

    Q = {...Q, [previousBoard]: {...previousBoardValue, [move]: calculated}}

    return Q
}

module.exports = updateQ