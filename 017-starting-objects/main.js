const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9
const myObj = {
  name: 'duke',
  age: 3,
  hobbies: ['playing', 'running', 'sleeping'],
  parents: {
    mother: 'darcy',
    father: 'damien'
  },
  myGreeting: function(name) {
    return `what is UP ${name}`
  }
}

const greeting = myObj.myGreeting("divyam")
console.log(greeting)

