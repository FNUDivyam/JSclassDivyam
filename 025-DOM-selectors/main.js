import { renderTable } from "./render.js"
import { getTripData, saveTripData } from "./storage.js"
import { updateDOM } from "./dom.js"

const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");
const AVG = document.getElementById("avg");

const MY_DATA = getTripData();
renderTable(MY_DATA);

function trackMPGAndCost(miles, gallons, price = 3.79) {
  const mpg = Math.round(miles / gallons);
  const tripCost = Math.round(gallons * price);
  updateDOM(
    `Miles per gallon is ${mpg} and trip cost is ${tripCost}`,
    "#output"
  );
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    mpg: mpg,
    tripCost: tripCost,
  };
}

function calculateSUM(arr, key) {
  let sum = 0;

  for (const item of arr) {
    sum += item[key];
  }

  return sum;
}

function calculateMPGAndTripCostAvg() {
  let totalMPG = calculateSUM(MY_DATA, "mpg");
  let totalCost = calculateSUM(MY_DATA, "tripCost");

  const avgMPG = Math.round(totalMPG / MY_DATA.length);
  updateDOM(`Average MPG is ${avgMPG}`, "#avg");

  const avgCost = Math.round(totalCost / MY_DATA.length);
  updateDOM(`Average Trip Cost is ${avgCost}`, "#avg");
}

function isFormValid(miles, gallons, price) {
  const errMsg = [];
  if (miles === 0 || price === 0 || gallons === 0) {
    errMsg.push("Make sure you input value greater than zero");
  }

  if (price > 1000) {
    errMsg.push("Really!!!!? I think this is an error...Try again");
  }

  if (errMsg.length > 0) {
    ERR.textContent = errMsg;
  } else {
    return true;
  }
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const miles = (e.target.miles.value);
  const gallons = (e.target.gallons.value);
  const price = (e.target.price.value);

  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    AVG.textContent = "";
    const dataObj = trackMPGAndCost(miles, gallons, price); 
    console.log(MY_DATA, dataObj);
    MY_DATA.push(dataObj);
    console.log(MY_DATA, dataObj);
    saveTripData(MY_DATA);
    renderTable(MY_DATA);
    calculateMPGAndTripCostAvg();
  }
  FORM.reset();
});
