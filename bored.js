const fetch = require("node-fetch")

async function Bored(){
    const responce = await fetch("https://api.dhravya.dev/bored")
    const data = await responce.json()

    return data.data
}

exports.Bored = Bored