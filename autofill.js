const fetch = require("node-fetch");

async function AutoFill(query){
  const responce = await fetch(`https://api.dhravya.dev/autofill?query=${query}`)

  const data = await responce.json()

  return data.data
}

exports.AutoFill = AutoFill