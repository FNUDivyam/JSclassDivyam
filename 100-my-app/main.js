const FORM = document.getElementById("form-input")
const ERR = document.getElementById("error")
const OUTPUT = document.getElementById("output")

function getData() {
  const dataJSON = localStorage.getItem("data");
  if(dataJSON !== null) {
    return JSON.parse(dataJSON)
  } else {
    return []
  }
}

function saveData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}

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

function renderButtons(div, index) {
  const editBtn = document.createElement("button")
  const deleteBtn = document.createElement("button")
  editBtn.textContent = "edit"
  deleteBtn.textContent = "delete"
  editBtn.classList.add("tbl-btn");
  deleteBtn.classList.add("tbl-btn");

  editBtn.addEventListener('click', () => {
    FORM.amIHungry.checked = MY_DATA[index].amIHungry
    FORM.hungerLevel.value = MY_DATA[index].hungerLevel
    FORM.foodName.value = MY_DATA[index].foodName
    const disable_btns = document.querySelectorAll(".tbl-btn")
    disable_btns.forEach(function (btn) {
      btn.setAttribute("disabled", true)
    });
  })

  deleteBtn.addEventListener("click", function () {
    MY_DATA.splice(index, 1)
    renderListItems(MY_DATA)
    saveData(MY_DATA)
  });

  div.appendChild(editBtn)
  div.appendChild(deleteBtn)
}

function renderListItems(MY_DATA) {
  OUTPUT.innerHTML = ""
  MY_DATA.forEach((obj, index) => {
    let div = document.createElement("div")
    let h5 = document.createElement("h5")
    let h2 = document.createElement("h2")
    h5.textContent = `amIHungry=${obj.amIHungry}, hungerLevel=${obj.hungerLevel}, foodName=${obj.foodName}`
    h2.textContent =  obj.decision
    div.classList.add("list-item")
    div.appendChild(h5)
    div.appendChild(h2)
    renderButtons(div, index)   
    OUTPUT.appendChild(div)
  })
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