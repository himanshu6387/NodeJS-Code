const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send('Welcome To First Express JS Server...')
})

server.get('/login',(req,res)=>{
    res.send('Welcome To Login API...')
})

server.get('/users',(req,res)=>{
    res.json([
        {id:101,name:'Purna',college:'AL College'},
        {id:102,name:'Manoj',college:'AL College'},
        {id:103,name:'Mayank',college:'AL College'},
        {id:104,name:'Anjali',college:'AL University'}
    ])
})

const PORT = 3500

server.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})