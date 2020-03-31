let command = process.argv.slice(2,4)

function snakeandwhatever (kotak) {

    if(command==""){
        return "Please input command ex node index.js 9"
    }

    let length = Math.pow(kotak, 2);
    let board = [];
    for (let i = 0; i < kotak; i++) {
        let temp = [];
        for (let j = 0; j < kotak; j++) {
                temp.push(length);
                length--;
        }
        board.push(temp);
    }

    if(kotak % 2 === 0){
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

console.log(snakeandwhatever(command));