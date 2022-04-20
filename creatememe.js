const fetch = require("node-fetch");

async function CreateMeme(top, bottom, image){
    return `https://api.dhravya.dev/create_meme?top=${top}&bottom=${bottom}&image=${image}`

}

exports.CreateMeme = CreateMeme;