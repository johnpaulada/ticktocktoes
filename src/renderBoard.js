function renderCell(cell) {
    if (cell == 1) {
        return "X"
    } else if (cell == -1) {
        return "O"
    }

    return "_"
}

function renderBoard(board) {
    console.log(renderCell(board[0]) + renderCell(board[1]) + renderCell(board[2]))
    console.log(renderCell(board[3]) + renderCell(board[4]) + renderCell(board[5]))
    console.log(renderCell(board[6]) + renderCell(board[7]) + renderCell(board[8]))
}

module.exports = renderBoard