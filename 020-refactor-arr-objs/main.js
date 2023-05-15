const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")
const AVG = document.getElementById("avg")
const MY_DATA = []

const updateDOM = (input, id) => {
  const divEl = document.querySelector(id)
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

const trackMPGAndCost = (miles, gallons, price = 3.79) => {
  const mpg = Math.round(miles/gallons) 
  const tripCost = Math.round(mpg * price)
  MY_DATA.push({
    miles: miles,
    gallons: gallons,
    price: price,
    mpg: mpg,
    tripCost: tripCost
  })
  updateDOM(`Miles per gallon is ${mpg} and trip cost is ${tripCost}`, "#output")
}

const calculateSUM = (arr, key) => {
  let sum = 0

  for(item of arr) {
    sum += item[key]
  }
   
  return sum
}

const calculateMPGAndTripCostAvg = () => {
  let totalMPG = calculateSUM(MY_DATA, "mpg")
  let totalCost = calculateSUM(MY_DATA, "tripCost")
  
  const avgMPG = Math.round(totalMPG / MY_DATA.length) 
  updateDOM(`Average MPG is ${avgMPG}`, "#avg")

  const avgCost = Math.round(totalCost / MY_DATA.length)
  updateDOM(`Average Trip Cost is ${avgCost}`, "#avg")
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  const errMsg = []
  const miles = parseInt(e.target.miles.value)
  const gallons = parseInt(e.target.gallons.value)
  const price = parseInt(e.target.price.value)
  
  if(miles === 0 || price === 0 || gallons === 0) {
    errMsg.push("Make sure you input value greater than zero")
  }
  
  if(price > 1000) {
    errMsg.push("Really!!!!? I think this is an error...Try again")
  }

  if (errMsg.length > 0) {
    ERR.textContent = errMsg 
  } else {
    ERR.textContent = ""
    AVG.textContent = ""
    trackMPGAndCost(miles, gallons, price)
    calculateMPGAndTripCostAvg()
  }
  FORM.reset()
})

// trackMPGAndCost(360, 15, 5.40)
// trackMPGAndCost(320, 12, 5)
// trackMPGAndCost(100, 7, 4.40)
// trackMPGAndCost(600, 24, 5.70)
// trackMPGAndCost(50, 2, 3.40)
// trackMPGAndCost(320, 12, 5)
// calculateMPGAndTripCostAvg()