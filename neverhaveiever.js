const fetch = require("node-fetch")

async function NeverHaveIEver(){
    const responce = await fetch("https://api.dhravya.dev/neverhaveiever")
    const data = await responce.json()

    return data.data.Topic
}

exports.NeverHaveIEver = NeverHaveIEver