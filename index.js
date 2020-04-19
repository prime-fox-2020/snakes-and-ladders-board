function generateBoard10x10(){
    let arr = []
    let accumulator = 100
    for (let i = 0; i < 10; i++) {
        let tempArr = []
        for (let j = 0; j < 10; j++) {
            tempArr.push(accumulator)
            accumulator--
        }
        if(i%2 != 0){
            tempArr.reverse()
            arr.push(tempArr)
        }else(
            arr.push(tempArr)
        )
    }
    return arr
}

// console.table(generateBoard10x10());


function generateBoard(num){
    let arr = []
    let accumulator = num*num
    for (let i = 0; i < num; i++) {
        let tempArr = []
        for (let j = 0; j < num; j++) {
            tempArr.push(accumulator)
            accumulator--
        }
        if(num % 2 == 0){
            if(i%2 != 0){
                tempArr.reverse()
                arr.push(tempArr)
            }else(
                arr.push(tempArr)
            )
        }else{
            if(i%2 == 0){
                tempArr.reverse()
                arr.push(tempArr)
            }else(
                arr.push(tempArr)
            )
        }
    }
    return arr
}

console.table(generateBoard(15))
console.table(generateBoard(8))