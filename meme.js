const fetch = require("node-fetch")
/**
 * 
 * @param {String} topic 
 */
async function Meme(topic){
    if(topic) {
    const responce = await fetch(`https://api.dhravya.dev/meme/${topic}`)
    const data = await responce.json()

    return data.data
    }else{
        return 'https://api.dhravya.me/meme'
    }

    
}

exports.Meme = Meme;