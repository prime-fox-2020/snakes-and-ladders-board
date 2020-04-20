
function snakeBoard(num) {
  let result = []
  let counter = num*num

  for (let i = 0; i < num; i++) {
    let temp = []

      for (let j = 0; j < num; j++) {
          temp.push(counter)

          counter -= 1
      }
      if(i % 2 != 0) {
        
          result.push(temp.reverse())
      } else {

          result.push(temp)
      }
  }
  return result
}

console.log(snakeBoard(8))
console.log(snakeBoard(10))
console.log(snakeBoard(15))