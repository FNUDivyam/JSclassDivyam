const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
  const divEl = document.querySelector("#output")
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles/gallons) 
  const tripCost = Math.round(MPG * price)
  myMPG.push(MPG)
  myTripCost.push(tripCost)
  updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
}

const calculateMPGAvg = () => {
  let totalMPG = 0
  for(let i = 0; i < myMPG.length; i++) {
    totalMPG = totalMPG + myMPG[i]
  }
  const avgMPG = totalMPG / myMPG.length 
  updateDOM(`Average MPG is ${avgMPG}`)
}

trackMPGCost(360, 15, 5.40)
trackMPGCost(320, 12, 5)
trackMPGCost(100, 7, 4.40)
trackMPGCost(600, 24, 5.70)
trackMPGCost(50, 2, 3.40)
trackMPGCost(320, 12, 5)
calculateMPGAvg()