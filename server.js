const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('Welcome To NodeJs Server Side Programming..')
    res.write('We are going to undestand creation of REST API as well')
    res.end()
})

const PORT = 5200

server.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})