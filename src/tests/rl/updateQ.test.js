const { updateQ } = require('../../rl')

test('Happy Path Single Step', () => {
    const Q = { "board1": {}, "board2": { "move2": 10000.900000000001 } }

    const previousBoard = "board1"
    const board = "board2"
    const move = "move1"
    const reward = 0
    expected = { "board2": { "move2": 10000.900000000001 }, "board1": { "move1": 800.0720000000001 } }

    expect(updateQ(Q, previousBoard, board, move, reward)).toStrictEqual(expected)
})

test('Happy Path Double Step', () => {
    const Q = { "board1": {}, "board2": {}, "board3": { "move3": 10000.900000000001 } }

    const previousBoard3 = "board2"
    const board3 = "board3"
    const move2 = "move2"
    const previousBoard2 = "board1"
    const board2 = "board2"
    const move1 = "move1"

    const Q1 = updateQ(Q, previousBoard3, board3, move2, 0)
    const actual = updateQ(Q1, previousBoard2, board2, move1, 0)
    const expected = { "board3": { "move3": 10000.900000000001 }, "board2": { "move2": 800.0720000000001 }, "board1": { "move1": 64.00576000000001 } }

    expect(actual).toStrictEqual(expected)
})

test('Has moves, 0 value', () => {
    const Q = { "board1": {}, "board2": { "move2": 0 } }

    const previousBoard = "board1"
    const board = "board2"
    const move = "move1"
    const reward = 0
    expected = { "board2": { "move2": 0 }, "board1": { "move1": 0 } }

    expect(updateQ(Q, previousBoard, board, move, reward)).toStrictEqual(expected)
})