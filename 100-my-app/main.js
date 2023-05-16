const FORM = document.getElementById("form-input")
const ERR = document.getElementById("error")

function updateDOM(input, id) {
  const divEl = document.getElementById(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
}

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

function isFormValid(amIHungry, hungerLevel, foodName) {
  const errMsg = []
  if(hungerLevel < 1 || hungerLevel > 100 ) {
    errMsg.push("hunger level must be between 1-100")
    ERR.textContent = errMsg
    return false
  }
  ERR.textContent = ""
  return true
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  const amIHungry = e.target.amIHungry.checked
  const hungerLevel = parseInt(e.target.hungerLevel.value)
  const foodName = e.target.foodName.value

  if(isFormValid(amIHungry, hungerLevel, foodName)) {
    const result = shouldIEat(amIHungry, hungerLevel, foodName)
    updateDOM(`amIHungry=${result.amIHungry}, hungerLevel=${result.hungerLevel}, foodName=${result.foodName}, decision=${result.decision}`, "output")
  } else {
    alert()
  }

  FORM.reset()
})