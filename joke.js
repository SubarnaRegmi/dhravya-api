

const fetch = require("node-fetch")

 async function Joke()  {
     
   const responce = await fetch("https://api.dhravya.dev/joke")

   const data = await responce.json()

   return data.data.Joke
 }
 
 
 exports.Joke = Joke;
 
 
 