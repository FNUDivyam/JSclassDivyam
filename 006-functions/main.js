function doMath(a, b) {
    let result = a * b
    return result
    // console.log(`this is the result ${a - b}`)
    // console.log(`this is the result ${a + b}`)
    // console.log(`this is the result ${a / b}`)
    // console.log(`this is the result ${a * b}`)
}

const result = doMath(10, 4)
console.log(`this result was returned from the function ${result}`)

function doAdd(a, b) {
    let result = a + b
    console.log(`inside doAdd, result = ${result}`)
}

doAdd(20, 13)

function doSub(a, b) {
    let result = a - b
    return result
}

const result2 = doSub(55, 11)
console.log(`this result was returned from the function doSub ${result2}`)