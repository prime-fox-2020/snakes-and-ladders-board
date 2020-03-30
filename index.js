function generateBoard(num) {
    let res = []
    let count = num*num

    for (let i = 0; i < num; i++) {
        let temp = [];
        for (let j = 0; j < num; j++) {
            temp.push(count)
            count--
        }
        if(i % 2 !== 0) {
            res.push(temp.reverse())
        } else {
            res.push(temp)
        }
    }
    return res
}

console.log(generateBoard(10))
console.log(generateBoard(15))
console.log(generateBoard(8))