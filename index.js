function snakesLadders(num){
    let result = []
    let count = num*num
    for (let i = 0; i<num; i++){
        let temp = []
        for (let j = 0; j<num; j++){
            temp.push(count)
            count--
        }
        if(i%2 === 1){
            result.push(temp.reverse())
        } else {
            result.push(temp)
        }
    }
    return result
}

console.log(snakesLadders(10))
console.log(snakesLadders(15))
console.log(snakesLadders(8))