function generateBoard(num){
    let result = []
    let pow = Math.pow(num, 2)

    for(let i = 0; i < num; i++){
        let temp = []
        let cont = pow - num + 1

        for(let j = 0; j < num; j++){
            if(num % 2 !== 0){
                if(i % 2 !== 0){
                    temp.push(pow)
                } else {
                    temp.push(cont++)
                }
            } else {
                if(i % 2 !== 0){
                    temp.push(cont++)
                } else {
                    temp.push(pow)
                }
            }
            pow--
        }
        result.push(temp)
    }
    return result
}

console.table(generateBoard(15))
console.table(generateBoard(8))