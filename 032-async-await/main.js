// async function start() {
//   const response = await fetch("https://api.weather.gov/gridpoints/HNX/53,100/forecast")
//   const result = await response.json()
//   console.log(result.properties.periods[0].shortForecast)
// }

// start()

function getData() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        reject("something went wrong!")
      }, 1)
    })
  }
  
  async function start() {
    try {
      const result = await getData()
      console.log(`result: ${result}`)
    } catch(error) {
      console.log(`ERROR: ${error}`)
    }
  }
  
  start()