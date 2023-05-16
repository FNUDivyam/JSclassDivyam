async function start() {
    const response = await fetch("https://api.weather.gov/gridpoints/HNX/53,100/forecast")
    const result = await response.json()
    console.log(result.properties.periods[0].shortForecast)
}

start()