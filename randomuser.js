const fetch = require("node-fetch");

async function RandomUser(){
    const responce = await fetch("https://api.dhravya.dev/randomuser");
    const data = await responce.json()

    return data.data
}

exports.RandomUser = RandomUser