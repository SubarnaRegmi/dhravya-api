const fetch = require("node-fetch")

async function Compliment(){
    const responce = await fetch("https://api.dhravya.dev/compliment")

    const data = responce.json()

    return data.data.Compliment
}

exports.Compliment = Compliment