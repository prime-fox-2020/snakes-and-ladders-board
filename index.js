function generateBoard(num){
  let board = [];
  let counter = Math.pow(num,2);

    for(let i = 0; i < num; i++){
        let count = counter - i * num;
      if(i % 2 == 1){
          count -= num-1;
      }
      let temp = []
      for(let j = 0; j < num; j++){
          temp.push(count);
          if(i % 2 == 0){
              count--;
          }
          else{
              count++;
          }
      }
      board.push(temp);
    }
    return board;
}

//test case
console.log(generateBoard(15));
console.log(generateBoard(8));
