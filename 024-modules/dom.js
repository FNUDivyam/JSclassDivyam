function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement("p");
    p.textContent = input;
    divEl.appendChild(p);
}
  
export { updateDOM }