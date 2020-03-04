const { calculateQ } = require('../../rl')

test('Happy Path', () => {
    expect(calculateQ(100, 100, 1000)).toBe(198)
})