const updateDOM = (input, id) => {
    const divEl = document.getElementById(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
  };
  
  const myArrObjs = [
    {
      name: 'rio',
      hairColor: 'red'
    },
    {
      name: 'joe',
      hairColor: 'black'
    },
    {
      name: 'jane',
      hairColor: 'brown'
    }
  ]
  
  // myArrObjs.forEach(obj => {
  //   const str = `${obj.name} has ${obj.hairColor}`
  //   updateDOM(str, 'output')
  //   console.log(obj)
  // })
  
  for(obj of myArrObjs) {
    const str = `${obj.name} has ${obj.hairColor}`
    updateDOM(str, 'output')
  }