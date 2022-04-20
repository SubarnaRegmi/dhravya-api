const fetch = require("node-fetch")

async function EightBall(){
  const responce = await fetch("https://api.dhravya.dev/8ball")
  const data = await responce.json()

  return data.data.answer
}

exports.EightBall = EightBall

