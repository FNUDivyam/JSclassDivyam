const OPENAI_API_KEY = ""

async function start() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: "is javascript the best language?"
      }],
    })
  }
  const response = await fetch("https://api.openai.com/v1/chat/completions", options)
  const result = await response.json()
  console.log(result)
}

start()