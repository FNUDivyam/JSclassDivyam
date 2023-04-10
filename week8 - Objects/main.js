const myArr = []
// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9
const myObj = {
    name: 'Divyam',
    age: 23,
    likes: 0,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make: 'pixel 7',
        OS: 'android'
    },
    myGreeting: function(person) {
        return `${this.name} who loves to ${this.hobbies[0]} says What is UP ${person}`
    },
    increaseLikes: function() {
        this.likes += 1
    }
}
const divyObj = myObj
divyObj.increaseLikes()
console.log(divyObj)
divyObj.age = 60




const greeting =  myObj.myGreeting('jane')
console.log(greeting)

console.log(myObj.mobile.make.length)

for(key in myObj) {
    console.log(`key ${key} and value ${myObj[key]} `)
}





