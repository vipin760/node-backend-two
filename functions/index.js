const functions = require('firebase-functions')
const express = require('express')
const webApp = express()

webApp.get('/',(req,res)=>{
    res.status(200).send({message:"working.........."})
})

exports.webApp = functions.https.onRequest(webApp)
