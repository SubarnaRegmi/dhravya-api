const fetch = require("node-fetch")

/**
 * 
 * @param {String} host 
 * @param {Number} port 
 */

async function McStatus(host, port){

    if(port){
    const responce = await fetch(`https://api.dhravya.dev/mcstatus?host=${host}&port=${port}`)
    const data = await responce.json()

    return data.data
    }else{
        const responce = await fetch(`https://api.dhravya.dev/mcstatus?host=${host}`)
    const data = await responce.json()

    return data.data
    }
}

exports.McStatus = McStatus