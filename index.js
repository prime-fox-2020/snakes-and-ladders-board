let command = process.argv.slice(2,4)

let generateBoard = (rows_cols) => {

    if(command==""){
        return "Please input command ex node index.js 9"
    }
    
    let length = Math.pow(rows_cols, 2);
    let board = [];
    for (let i = 0; i < rows_cols; i++) {
        let temp = [];
        for (let j = 0; j < rows_cols; j++) {
                temp.push(length);
                length--;
        }
        board.push(temp);
    }

    if(rows_cols % 2 === 0){
        for (let i = 0; i < board.length; i++) {
            if(i % 2 === 1){
                board[i].sort((a, b) => a - b);
            }
        }
    } else {
        for (let i = 0; i < board.length; i++) {
            if(i % 2 === 0){
                board[i].sort((a, b) => a - b);
            }
        }
    }
    return board;
}

console.log(generateBoard(command));