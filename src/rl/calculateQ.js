const GAMMA = 0.8
const ALPHA = 0.1

function calculateQ(q, max, reward) {
    return q + ALPHA * (reward + GAMMA * max - q)
}

module.exports = calculateQ