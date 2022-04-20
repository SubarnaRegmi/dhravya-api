const fetch = require("node-fetch")

async function TruthOrDare(){
    const responce = await fetch("https://api.dhravya.dev/truthordare")
    const data = await responce.json()
    return data.data
}

exports.TruthOrDare = TruthOrDare