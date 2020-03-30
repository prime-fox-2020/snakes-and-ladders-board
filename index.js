function SnakeBoard(size = 10) {
    let num = 1
    let hasil = []
    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
            row.push(num)
            num++
        }
        if (i % 2 == 1) {
            hasil.push(row.reverse())
        } else {
            hasil.push(row)
        }
    }
    return hasil.reverse()
}

console.log(SnakeBoard());
console.log(SnakeBoard(15));
console.log(SnakeBoard(8));