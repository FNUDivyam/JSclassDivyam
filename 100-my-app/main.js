import { getData, saveData } from "./storage.js"
import { renderListItems } from "./render.js"

const FORM = document.getElementById("form-input")
const ERR = document.getElementById("error")

const MY_DATA = getData()
renderListItems(MY_DATA)
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

function isFormValid(hungerLevel) {
  if(hungerLevel < 1 || hungerLevel > 100 ) {
    ERR.textContent = "hunger level must be between 1-100"
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

  if(isFormValid(hungerLevel)) {
    const result = shouldIEat(amIHungry, hungerLevel, foodName)
    MY_DATA.push(result)
    saveData(MY_DATA)
    renderListItems(MY_DATA)
  }

  FORM.reset()
})