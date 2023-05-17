const OUTPUT = document.getElementById("output")

function renderPhoto(photo) {
  const img = document.createElement("img")
  img.setAttribute("src", photo.thumbnailUrl)
  OUTPUT.appendChild(img)
}

async function getPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    return await response.json()
  } catch (error) {
    console.log(`Error ${error}`)
  }
}

async function start() {
  try {
    const photos = await getPhotos()
    for(let i=0; i<photos.length;i++) {
      renderPhoto(photos[i])
    }
  } catch (error) {
    console.log(`Error ${error}`)
  }
}


start()