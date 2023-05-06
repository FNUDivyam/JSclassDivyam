const FORM = document.getElementById("form-input")



const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input) => {
  const divEl = document.querySelector("#output")
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

const trackMPGAndCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles/gallons) 
  const tripCost = Math.round(MPG * price)
  MY_MPG.push(MPG)
  MY_TRIP_COST.push(tripCost)
  updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
}

const calculateSUM = (arr) => {
  let sum = 0

  for(item of arr) {
    sum += item
  }
   
  return sum
}

const calculateMPGAndTripCostAvg = () => {
  let totalMPG = calculateSUM(MY_MPG)
  let totalCost = calculateSUM(MY_TRIP_COST)
  
  const avgMPG = Math.round(totalMPG / MY_MPG.length) 
  updateDOM(`Average MPG is ${avgMPG}`)

  const avgCost = Math.round(totalCost / MY_TRIP_COST.length)
  updateDOM(`Average Trip Cost is ${avgCost}`)
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  const miles = parseInt(e.target.miles.value)
  const gallons = parseInt(e.target.gallons.value)
  const price = parseInt(e.target.price.value)
  trackMPGAndCost(miles, gallons, price)
})

// trackMPGAndCost(360, 15, 5.40)
// trackMPGAndCost(320, 12, 5)
// trackMPGAndCost(100, 7, 4.40)
// trackMPGAndCost(600, 24, 5.70)
// trackMPGAndCost(50, 2, 3.40)
// trackMPGAndCost(320, 12, 5)
// calculateMPGAndTripCostAvg()