const FORM = document.getElementById('form-input');

function calTimeAvailable(myTurnToDrive, timeBeforeGym) {
  if (myTurnToDrive) {
    return timeBeforeGym - 0.25;
  } else {
    return timeBeforeGym - 0.15;
  }
}

FORM.addEventListener('submit', function(e) {
  e.preventDefault()
  const currentTime = FORM.elements.currentTime.value;
  const gymClassStartTime = FORM.elements.gymTime.value;
  const myTurnToDrive = FORM.elements.myTurnToDrive.checked;
  const unplannedEvent = FORM.elements.unplannedEvent.checked;
  const day = FORM.elements.day.value;
  const inputObj  = {
    currentTime: currentTime,
    gymClassStartTime: gymClassStartTime,
    myTurnToDrive: myTurnToDrive,
    unplannedEvent: unplannedEvent,
    day: day
  }
  console.log(inputObj)
})