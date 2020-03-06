const { getStateMax } = require('../../rl')

test("Happy Path", () => {
    const board = "0|0"
    const move1 = "0|0"
    const move2 = "0|1"

    let Q = {
        [board]: {
            [move1]: 100,
            [move2]: 200
        }
    }

    expect(getStateMax(Q, board)).toBe(200)
})

test("No Moves", () => {
    const board = "0|0"

    let Q = {
        [board]: {}
    }

    expect(getStateMax(Q, board)).toBe(0)
})