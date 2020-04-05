

function generateBoard (size) {
    let mainBoard = []
    let count = size*size
    for (let i = 0; i < size; i++) {
        let board = []
        if (size % 2 == 0) {
            for (let j = 0; j < size; j++) {
                board.push(count)
                count--
            }
            if (i % 2 !== 0) {
                board = reverse(board)
            }
        }
        else{
            for (let j = 0; j < size; j++) {
                board.push(count)
                count--
            }
            if (i % 2 == 0) {
                board = reverse(board)
            }
        }
        mainBoard.push(board)
    }
    return mainBoard
}
function reverse(board) {
    let reverse_selected_board = []
    for(let i = board.length-1; i >= 0; i--) {
       reverse_selected_board.push(board[i])
    }
    return reverse_selected_board
}
console.log(generateBoard(10))
console.log(generateBoard(5))
