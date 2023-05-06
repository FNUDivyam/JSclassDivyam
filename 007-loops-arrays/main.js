const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
  const divEl = document.querySelector("#output")
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

const trackMPGAndCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles/gallons) 
  const tripCost = Math.round(MPG * price)
  myMPG.push(MPG)
  myTripCost.push(tripCost)
  updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
}

const calculateMPGAndTripCostAvg = () => {
  let totalMPG = 0
  let totalCost = 0
  for(let i = 0; i < myMPG.length; i++) {
    totalMPG = totalMPG + myMPG[i]
    totalCost = totalCost + myTripCost[i]
  }
  const avgMPG = Math.round(totalMPG / myMPG.length) 
  updateDOM(`Average MPG is ${avgMPG}`)

  const avgCost = Math.round(totalCost / myTripCost.length)
  updateDOM(`Average Trip Cost is ${avgCost}`)
}

trackMPGAndCost(360, 15, 5.40)
trackMPGAndCost(320, 12, 5)
trackMPGAndCost(100, 7, 4.40)
trackMPGAndCost(600, 24, 5.70)
trackMPGAndCost(50, 2, 3.40)
trackMPGAndCost(320, 12, 5)
calculateMPGAndTripCostAvg()