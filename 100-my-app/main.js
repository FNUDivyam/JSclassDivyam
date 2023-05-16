function shouldIEat(amIHungry, hungerLevel, foodName) {
    let obj = {
      amIHungry: amIHungry,
      hungerLevel: hungerLevel,
      foodName: foodName
    }
  
    if(foodName === "pizza") {
      obj.decision = "I'll eat a slice"
    } else if(amIHungry && hungerLevel > 60) {
      obj.decision = "time to eat"
    } else {
      obj.decision = "not eating now"
    }
  
    return obj
  }
  
  console.log(shouldIEat(false, 80, "pizza"))
  console.log(shouldIEat(true, 65, "bread"))
  console.log(shouldIEat(false, 1, "rice"))