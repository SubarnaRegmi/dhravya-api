const fetch = require("node-fetch")

async function Topic(){
    const responce = await fetch("https://api.dhravya.dev/topic")
    const data = responce.json()
    return data.data.Topic
}

exports.Topic = Topic