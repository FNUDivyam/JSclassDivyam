let stringArr: string[] = ['one', 'hey', 'divyam']
let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150]
let mixedData: (string | number | boolean )[] = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]


// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true
}

exampleObj.prop1 = 'John'

type Guitarist = {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh : Guitarist = {
  name: 'Eddit',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp : Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'OU812']
}

evh = jp