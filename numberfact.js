const fetch = require("node-fetch")
/**
 * 
 * @param {Number} number 
 */
async function NumberFact(number){
   const responce = await fetch(`https://api.dhravya.dev/numberfact/${number}`)
   const data = await responce.json()

   return data.data
}

exports.NumberFact = NumberFact;