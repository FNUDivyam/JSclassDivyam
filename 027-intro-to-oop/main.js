class Person {
  constructor(firstName, lastName, address) {
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
  }

  showStatus() {
    console.log(`${this.firstName} lives at ${this.address}`)
  }
}

class Student extends Person {
  constructor(firstName, lastName, address, classList) {
    super(firstName, lastName, address)
    this.classList = classList
  }

  showStatus() {
    console.log(`${this.firstName} lives at ${this.address} is taking ${this.classList}`)
  }
}

const divyam = new Student('Divyam', 'Divyam', '3, Earth, Milky Way Galaxy', ["Eng1A", "CIT93"])
const jane = new Person('Jane', 'Doe', '12, My Street')