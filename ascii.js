const fetch = require("node-fetch");

/**
 * 
 * @typedef {font:"5lineoblique" | "dotmatrix" | "3-d" | "3x5" | "alphabet" | "banner3-D" | "doh" | "isometric1" | "letters" | "alligator" | "bubble" | "bulbhead" | "digital"} Options
 * @param {Options} text
 * @param {Options} font
 */

async function Ascii(text, font){
  const responce = await fetch(`https://api.dhravya.dev/ascii?text=${text}&font=${font}`)
  const data = await responce.json()
  if(!data.data.Ascii) throw new Error(data.data.errormessage)

  return data.data.Ascii
}

exports.Ascii = Ascii;