import { renderTable, calculateMPGAndTripCostAvg, updateDOM } from "./render.js";
import { getTripData, saveTripData } from "./storage.js";

const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");

const MY_DATA = getTripData();
renderTable(MY_DATA);
calculateMPGAndTripCostAvg(MY_DATA);

function trackMPGAndCost(miles, gallons, price = 3.79) {
  const mpg = Number((miles / gallons).toFixed(2));
  const tripCost = Number((gallons * price).toFixed(2));
  // updateDOM(
  //   `Miles per gallon is ${mpg} and trip cost is ${tripCost}`,
  //   "#output"
  // );
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    mpg: mpg,
    tripCost: tripCost,
  };
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
  const miles = parseFloat(e.target.miles.value);
  const gallons = parseFloat(e.target.gallons.value);
  const price = parseFloat(e.target.price.value);

  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    const dataObj = trackMPGAndCost(miles, gallons, price);
    console.log(MY_DATA, dataObj);
    MY_DATA.push(dataObj);
    console.log(MY_DATA, dataObj);
    saveTripData(MY_DATA);
    renderTable(MY_DATA);
    calculateMPGAndTripCostAvg(MY_DATA);
  }
  FORM.reset();
});
