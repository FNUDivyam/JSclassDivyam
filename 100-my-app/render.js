import { saveData } from "./storage.js"

const OUTPUT = document.getElementById("output")
const FORM = document.getElementById("form-input")

function renderButtons(MY_DATA, div, index) {
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
    renderButtons(MY_DATA, div, index)   
    OUTPUT.appendChild(div)
  })
}

export { renderListItems }