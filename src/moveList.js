function moveList(board, you) {
    const item = you ? 1 : -1
    const moves = board.reduce((acc, x, i) => {
        if (x == 0) {
            return [...acc, i]
        }

        return acc
    }, []).map(i => [i, item])

    return moves
}

module.exports = moveList