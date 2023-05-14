const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9
const myObj = {
  name: 'duke',
  age: 3,
  likes: 0,
  hobbies: ['play', 'run', 'sleep'],
  parents: {
    mother: 'darcy',
    father: 'damien'
  },
  myGreeting: function(name) {
    return `${this.name} who loves to ${this.hobbies[0]}, says what is UP ${name}`
  },
  increaseLikes: function() {
    this.likes += 1
  }
}

const greeting = myObj.myGreeting("divyam")
console.log(greeting)

console.log(`index is ${myObj.name.indexOf('e')}`)
console.log(`length of myObj.name is ${myObj.name.length}`)

for(key in myObj) {
  console.log(`key=${key} and value=${myObj[key]}`)
}

const dukeObj = myObj
console.log(`myObj likes=${myObj.likes}`)
console.log(`dukeObj likes=${dukeObj.likes}`)
dukeObj.increaseLikes()
console.log(`myObj likes=${myObj.likes}`)
console.log(`dukeObj likes=${dukeObj.likes}`)

function updateLikes(likes) {
  likes += 1
}

function updateLikesByRef(obj) {
  obj.likes += 1
}

updateLikes(myObj.likes)
console.log(`myObj after pass by value, likes=${myObj.likes}`)
console.log(`dukeObj after pass by value, likes=${dukeObj.likes}`)


updateLikesByRef(myObj)
console.log(`myObj after pass by reference, likes=${myObj.likes}`)
console.log(`dukeObj after pass by reference, likes=${dukeObj.likes}`)

// const catObj = {
//   name: "kat",
//   awake: true, 
//   age: 1,
//   routines: ['hiding', 'playing', 'hunting', 'eating'],
//   logRoutine: function() {
//     for(let i = 0; i < this.routines.length; i++) {
//       console.log(`${this.name} is ${this.routines[i]}`)
//     }
//     this.awake = false
//     console.log(`is ${this.name} awake? ${this.awake}`)
//   }
// }

// catObj.logRoutine()