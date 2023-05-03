const updateDOM = (input) => {
    const divEl = document.querySelector("#output")
    const p = document.createElement("p")
    p.textContent = input
    divEl.appendChild(p)
  }
  
  const name = 'divyam'
  updateDOM(`My name is ${name}`)