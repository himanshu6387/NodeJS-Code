const express = require('express')
const app = express()

// Middleware
app.use((req,res,next)=>{
    console.log('Request Recieved:',req.method,req.url)
    next()
})


app.get('/api/student',(req,res)=>{
    res.send('List of Students fetched Successfully...')
})

const PORT = 3300
app.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})