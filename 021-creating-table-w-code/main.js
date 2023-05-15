const FORM = document.getElementById("form-input")
const ERR = document.getElementById("err")
const AVG = document.getElementById("avg")
const TBL_OUTPUT = document.getElementById("table-output")
const MY_DATA = []

function updateDOM(input, id) {
  const divEl = document.querySelector(id)
  const p = document.createElement("p")
  p.textContent = input
  divEl.appendChild(p)
}

function trackMPGAndCost(miles, gallons, price = 3.79) {
  const mpg = Math.round(miles/gallons) 
  const tripCost = Math.round(gallons * price)
  updateDOM(`Miles per gallon is ${mpg} and trip cost is ${tripCost}`, "#output")
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    mpg: mpg,
    tripCost: tripCost
  }
}

function calculateSUM(arr, key) {
  let sum = 0

  for(item of arr) {
    sum += item[key]
  }
   
  return sum
}

function calculateMPGAndTripCostAvg() {
  let totalMPG = calculateSUM(MY_DATA, "mpg")
  let totalCost = calculateSUM(MY_DATA, "tripCost")
  
  const avgMPG = Math.round(totalMPG / MY_DATA.length) 
  updateDOM(`Average MPG is ${avgMPG}`, "#avg")

  const avgCost = Math.round(totalCost / MY_DATA.length)
  updateDOM(`Average Trip Cost is ${avgCost}`, "#avg")
}

function isFormValid(miles, gallons, price) {
  const errMsg = []
  if(miles === 0 || price === 0 || gallons === 0) {
    errMsg.push("Make sure you input value greater than zero")
  }
  
  if(price > 1000) {
    errMsg.push("Really!!!!? I think this is an error...Try again")
  }

  if(errMsg.length > 0) {
    ERR.textContent = errMsg
  } else {
    return true
  }
}

function renderTableHeader(tbl) {
  const headings = ["Miles Driven:", "Gallons Used:", "Price Paid:", "Trip MPG:", "Trip Cost:", "Edit/Delete:"]
  const tr = document.createElement("tr")
  headings.forEach(function(heading) {
    let th = document.createElement("th")
    th.textContent = heading
    tr.appendChild(th)
  })
  tbl.appendChild(tr)
}

function renderTable() {
  const tbl = document.createElement("table")
  renderTableHeader(tbl)
  MY_DATA.forEach(function(obj) {
    const tr = document.createElement("tr")
    for(key in obj) {
      let td = document.createElement("td")
      td.textContent = obj[key]
      tr.appendChild(td)
    }
    const btnTD = document.createElement("td")
    const editBtn = document.createElement("button")
    editBtn.textContent = 'edit'
    const delBtn = document.createElement("button")
    delBtn.textContent = 'delete'
    btnTD.appendChild(editBtn)
    btnTD.appendChild(delBtn)
    tr.appendChild(btnTD)
    tbl.appendChild(tr)
  })
  TBL_OUTPUT.appendChild(tbl)
}

FORM.addEventListener('submit', function(e) {
  e.preventDefault()
  const miles = parseInt(e.target.miles.value)
  const gallons = parseInt(e.target.gallons.value)
  const price = parseInt(e.target.price.value)
  
  const isValid = isFormValid(miles, gallons, price)
  if (isValid) {
    ERR.textContent = ""
    AVG.textContent = ""
    const dataObj = trackMPGAndCost(miles, gallons, price)
    MY_DATA.push(dataObj)
    renderTable()
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