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
  
  const divyam = new Person('Divyam', 'Divyam', '3, Earth, Milky Way Galaxy')
  const jane = new Person('Jane', 'Doe', '12, My Street')