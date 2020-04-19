function generateBoard(num){
  const arr    = []
  let   number = 1
  for(let i = 0; i < num; i++){
    const temp   = []
    for(let j = 0; j < num; j++){
      if(i%2 === 0)temp.push(number)
      else temp.unshift(number)
      number++
    }
    arr.unshift(temp)
  }
  return arr
}

console.log(generateBoard(10))
console.log(generateBoard(15))
console.log(generateBoard(8))