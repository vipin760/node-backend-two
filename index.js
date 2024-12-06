const express = require('express');
const functions = require('firebase-functions')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send({message:"application workingggggggg"})
})

app.post('/',(req,res)=>{
    const data = req.body
    res.status(200).send({data:data});
})

app.listen(3000,()=>{
    console.log('server connected................');
    
})

exports.api = functions.https.onRequest(app)