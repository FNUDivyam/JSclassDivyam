import { saveTripData } from "./storage.js"

const TBL_OUTPUT = document.getElementById("table-output");
const FORM = document.getElementById("form-input");

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
  });

  delBtn.addEventListener("click", function (e) {
    MY_DATA.splice(index, 1);
    renderTable(MY_DATA);
    saveTripData(MY_DATA);
  });

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

export { renderTable }