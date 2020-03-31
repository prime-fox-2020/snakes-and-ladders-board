function generateBoard(num){
    let result = []
    let isi = Math.pow(num, 2)

    for(let i=0; i<num; i++){
        let colRow = []
        let isi2 = isi-num+1

        for(let j=0; j<num; j++){
            if(num % 2 !== 0){
                if(i % 2 !== 0){
                    colRow.push(isi)
                } else {
                    colRow.push(isi2++)
                }
            } else {
                if(i % 2 !== 0){
                    colRow.push(isi2++)
                } else {
                    colRow.push(isi)
                }
            }
            isi--
        }
        result.push(colRow)
    }
    return result
}
console.log(generateBoard(15))
console.log(generateBoard(8))