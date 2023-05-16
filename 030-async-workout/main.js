const formEl = document.getElementById("form")
const output = document.getElementById("output")

formEl.addEventListener("submit", function(e) {
  e.preventDefault()
  const type = e.target.type.value
  const reps = parseFloat(e.target.reps.value)
  const time = parseFloat(e.target.time.value)
  formEl.reset()
})