

function generateBoard(input){
    let board =[];
    let angka =input*input;

    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            if(board[i]==undefined){
                board[i]=[];
                board[i].push(0)
            }else{
                board[i].push(0)
            }
         }
    }

    for (let i = 0; i < input; i++) {

        if(i%2 == 0){
            for (let j = 0; j < input; j++) {
                board[i][j]= angka
                angka --
            }
        }else{
            for (let j = input-1; j >= 0; j--) {
                board[i][j]= angka
                angka --
            }
        }
    }
    return board
}

console.log(generateBoard(8))
console.log(generateBoard(10))
console.log(generateBoard(15))