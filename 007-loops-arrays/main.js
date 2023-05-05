const myArr = []

const updateDOM = (input) => {
  const divEl = document.querySelector("#output")
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles/gallons) 
  const tripCost = MPG * price
  myArr.push(MPG, tripCost)
  updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
}

const calculateAvg = () => {
  const avgMPG = (myArr[0] + myArr[2]) / 2
  updateDOM(`Average Miles per gallon is ${avgMPG}`)
}

trackMPGCost(360, 15, 5.40)
trackMPGCost(320, 12, 5)
updateDOM(`myArr is [${myArr}]`)
calculateAvg()