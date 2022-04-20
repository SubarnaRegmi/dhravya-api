/**
 * 
 * @param {String} query 
 */

const fetch = require("node-fetch")


async function QrCode(query){
    return `https://api.dhravya.dev/qrcode?query=${query}`
  
}


exports.QrCode = QrCode;




