const url = `https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1ZtE9`
const auth_token = ''

async function getData() {
  try {
    const request = new Request(url, {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    })
    const response = await fetch(request)
    const data = await response.json()
    if(response.status == 200) {
      console.log("Success", data)
    } else {
      console.log("Server Error", data)
    }
  } catch(error) {
    console.log('Fetch Error', error)
  }
}

getData()