const { getStateMax } = require('../../rl')

test("Happy Path", () => {
    const Q = new Map()
    const board = "0|0"
    const move1 = "0|0"
    const move2 = "0|1"
    Q.set(board, new Map())
    Q.get(board).set(move1, 100)
    Q.get(board).set(move2, 200)
    expect(getStateMax(Q, board)).toBe(200)
})

test("No Moves", () => {
    const Q = new Map()
    const board = "0|0"
    Q.set(board, new Map())
    expect(getStateMax(Q, board)).toBe(0)
})