const formEl = document.getElementById("form")

function updateDOM(input, id) {
  const divEl = document.getElementById(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
}

function startWorkout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time*60*1000)
  });
}

function onError(error) {
  console.log(`Error ${error}`)
}

function acceptWorkout(type, reps, time) {
  updateDOM(`type=${type}, reps=${reps} time=${time}`, 'output')
  startWorkout(time)
    .then(() => {
      updateDOM('done', 'output') 
    })
    .catch(onError)
}

formEl.addEventListener("submit", function(e) {
  e.preventDefault()
  const type = e.target.type.value
  const reps = parseFloat(e.target.reps.value)
  const time = parseFloat(e.target.time.value)
  acceptWorkout(type, reps, time)
  formEl.reset()
})