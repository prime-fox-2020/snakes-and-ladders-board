function generateBoard(num){
    let arr = []
    let order = 1

    for(let i = 0; i < num; i++){
        let subArr = []
      for(let j = 0; j < num; j++){
        if(i%2 === 0){
            subArr.push(order)
        }else{
            subArr.unshift(order)
        }
        order++
      }
      arr.unshift(subArr)
    }
    return arr
  }
  

console.table(generateBoard(15))
console.table(generateBoard(8))