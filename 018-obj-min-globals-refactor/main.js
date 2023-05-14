const mpgCostCalculator = {
    FORM: document.getElementById("form-input"),
    ERR: document.getElementById("err"),
    AVG: document.getElementById("avg"),
    MY_MPG: [],
    MY_TRIP_COST: [],
    updateDOM: function(input, id) {
      const divEl = document.querySelector(id)
      const p = document.createElement("p")
      p.textContent = input
      divEl.appendChild(p)
    },
    trackMPGAndCost: function(miles, gallons, price = 3.79) {
      const MPG = Math.round(miles/gallons) 
      const tripCost = Math.round(MPG * price)
      this.MY_MPG.push(MPG)
      this.MY_TRIP_COST.push(tripCost)
      this.updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, "#output")
    },
    calculateSUM: function(arr) {
      let sum = 0
      for(item of arr) {
        sum += item
      }
      return sum
    },
    calculateMPGAndTripCostAvg: function() {
      let totalMPG = this.calculateSUM(this.MY_MPG)
      let totalCost = this.calculateSUM(this.MY_TRIP_COST)
      
      const avgMPG = Math.round(totalMPG / this.MY_MPG.length) 
      this.updateDOM(`Average MPG is ${avgMPG}`, "#avg")
    
      const avgCost = Math.round(totalCost / this.MY_TRIP_COST.length)
      this.updateDOM(`Average Trip Cost is ${avgCost}`, "#avg")
    },
    startFormListening: function() {
      this.FORM.addEventListener('submit', (e) => {
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
          this.ERR.textContent = errMsg 
        } else {
          this.ERR.textContent = ""
          this.AVG.textContent = ""
          this.trackMPGAndCost(miles, gallons, price)
          this.calculateMPGAndTripCostAvg()
        }
        this.FORM.reset()
      })
    }
  }
  mpgCostCalculator.startFormListening()