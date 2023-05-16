const formEl = document.getElementById("form")

function updateDOM(input, id) {
  const divEl = document.getElementById(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
}

function startWorkout(time, initialUpdate, finalUpdate) {
  initialUpdate()
  setTimeout(() => {
    finalUpdate()
  }, time*60*1000)
}

function acceptWorkout(type, reps, time) {
  startWorkout(time, () => {
    updateDOM(`type=${type}, reps=${reps} time=${time}`, 'output')
  },
  () => {
    updateDOM('done', 'output') 
  })
}

formEl.addEventListener("submit", function(e) {
  e.preventDefault()
  const type = e.target.type.value
  const reps = parseFloat(e.target.reps.value)
  const time = parseFloat(e.target.time.value)
  acceptWorkout(type, reps, time)
  formEl.reset()
})