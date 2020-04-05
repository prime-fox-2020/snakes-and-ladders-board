function generateBoard(jumlah) {
    let res=[]
    let angka=1
    let batas=jumlah
    for (let i = 0; i < jumlah; i++) {
        let temp=[]
        if(i%2==0){
            for (let j = angka; j <=batas; j++) {
                temp.push(j)
            }
        }else {
            for (let j = angka; j <=batas; j++) {
                temp.unshift(j)
            }
        }
        angka+=jumlah
        batas+=jumlah
        res.unshift(temp)
    }
    return res
}

console.log(generateBoard(10))
console.log(generateBoard(8))
console.log(generateBoard(15))