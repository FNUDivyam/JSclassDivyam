// my arrow function

function doSquare (a, b) {
    let temp = 1
    for(i = 0; i < b; i++){
        temp *= a 
    }
    return temp
}

doMoreSquare = (a, b) => {
    let temp = 1
    for(i = 0; i < b; i++){
        temp *= a 
    }
    return temp
}

console.log(doMoreSquare(2, 3))
