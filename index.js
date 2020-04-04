let generateBoard  = (S) => {
    let square = []
    let x=S*S
    for (let i = 0; i < S; i++) {
        for (let j = 0; j < S; j++) {
            square.push(x)
            x--
        }

    }
    return square
    console.log(totalX,totalO)
}

// } 
console.log(generateBoard(8))
