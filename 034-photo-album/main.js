const OUTPUT = document.getElementById("output")

function renderPhoto(photo) {
  const img = document.createElement("img")
  img.setAttribute("src", photo.url)
  OUTPUT.appendChild(img)
}


async function start() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos")
  const result = await response.json()
  for(let i=0; i<21;i++) {
    try {
      renderPhoto(result[i])
    } catch(error) {
      console.log(`Error ${error}`)
    }
  }
}


start()