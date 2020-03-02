function topHorizontal(board, turn) {
    return board[0] == turn && board[1] == turn && board[2] == turn
}

function midHorizontal(board, turn) {
    return board[3] == turn && board[4] == turn && board[5] == turn
}

function botHorizontal(board, turn) {
    return board[6] == turn && board[7] == turn && board[8] == turn
}

function leftVertical(board, turn) {
    return board[0] == turn && board[3] == turn && board[6] == turn
}

function midVertical(board, turn) {
    return board[1] == turn && board[4] == turn && board[7] == turn
}

function rightVertical(board, turn) {
    return board[2] == turn && board[5] == turn && board[8] == turn
}

function leftDiagonal(board, turn) {
    return board[0] == turn && board[4] == turn && board[8] == turn
}

function rightDiagonal(board, turn) {
    return board[2] == turn && board[4] == turn && board[6] == turn
}

const winFoos = [topHorizontal, midHorizontal, botHorizontal, leftVertical, midVertical, rightVertical, leftDiagonal, rightVertical]

function isWin(board, turn) {
    return winFoos.some(foo => foo(board, turn))
}

module.exports = isWin