generateBoard = num => {
    let result = [];

    for (let i = 0; i < Math.pow(num,2); i++) {
        if (result[num - 1 - (Math.floor(i / num))] == undefined) {
            result[num - 1 - (Math.floor(i / num))] = [];
        }

        if (Math.floor(i / num) % 2 === 0) {
            result[num - 1 - (Math.floor(i / num))][i % num] = i + 1;
        } else {
            result[num - 1 - (Math.floor(i / num))][num - 1 - (i % num)] = i + 1;
        }

    }

    return result;
}

console.table(generateBoard(10))
console.table(generateBoard(8))