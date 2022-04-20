const fetch = require("node-fetch")

 async function Wyr(){
     
   const responce = await fetch("https://api.dhravya.me/wyr")

   const data = await responce.json()

   return data.data
 }
 
 
 exports.Wyr = Wyr;
 