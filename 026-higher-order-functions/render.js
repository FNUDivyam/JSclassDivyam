import { saveTripData } from "./storage.js";

const TBL_OUTPUT = document.getElementById("table-output");
const FORM = document.getElementById("form-input");
const AVG = document.getElementById("avg");

function renderTableHeader(tbl) {
  const headings = [
    "Miles Driven:",
    "Gallons Used:",
    "Price Paid:",
    "Trip MPG:",
    "Trip Cost:",
    "Edit/Delete:",
  ];
  const tr = document.createElement("tr");
  headings.forEach(function (heading) {
    let th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });
  tbl.appendChild(tr);
}

function renderEditDelBtn(MY_DATA, tr, index) {
  const td = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";

  editBtn.addEventListener("click", function (e) {
    FORM.miles.value = MY_DATA[index].miles;
    FORM.gallons.value = MY_DATA[index].gallons;
    FORM.price.value = MY_DATA[index].price;
    MY_DATA.splice(index, 1);
    const disable_btns = document.querySelectorAll(".tbl-btn");
    disable_btns.forEach(function (btn) {
      btn.setAttribute("disabled", true);
    });
  });

  delBtn.addEventListener("click", function (e) {
    MY_DATA.splice(index, 1);
    renderTable(MY_DATA);
    saveTripData(MY_DATA);
    calculateMPGAndTripCostAvg(MY_DATA);
  });

  editBtn.classList.add("tbl-btn");
  delBtn.classList.add("tbl-btn");

  td.appendChild(editBtn);
  td.appendChild(delBtn);
  tr.appendChild(td);
}

function renderTable(MY_DATA) {
  TBL_OUTPUT.innerHTML = "";
  const tbl = document.createElement("table");
  if (MY_DATA.length !== 0) {
    renderTableHeader(tbl);
    MY_DATA.forEach(function (obj, index) {
      const tr = document.createElement("tr");
      for (const key in obj) {
        let td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      }
      renderEditDelBtn(MY_DATA, tr, index);
      tbl.appendChild(tr);
    });
    TBL_OUTPUT.appendChild(tbl);
  }
}

function calculateMPGAndTripCostAvg(MY_DATA) {
  AVG.textContent = "";
  if (MY_DATA.length !== 0) {
    const sums = MY_DATA.reduce((sum, obj) => {
      return {
        mpg: sum.mpg + obj.mpg,
        tripCost: sum.tripCost + obj.tripCost,
      };
    });
    const avgMPG = Number((sums.mpg / MY_DATA.length).toFixed(2));
    updateDOM(`Average MPG is ${avgMPG}`, "#avg");

    const avgCost = Number((sums.tripCost / MY_DATA.length).toFixed(2));
    updateDOM(`Average Trip Cost is ${avgCost}`, "#avg");
  }
}

function updateDOM(input, id) {
  const divEl = document.querySelector(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
}

export { renderTable, calculateMPGAndTripCostAvg, updateDOM };
