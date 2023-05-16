let amIHungry = true
let hungerLevel = 80
let foodName = "pizza"

if(foodName === "pizza") {
  console.log("I'll eat a slice")
} else if(amIHungry && hungerLevel > 60) {
  console.log("time to eat")
} else {
  console.log("not eating now")
}