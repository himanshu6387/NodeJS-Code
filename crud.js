const express = require('express')
const app = express()

// Middleware
app.use(express.json())

let users = [
    {id:1,name:'Purna',branch:'CSE',address:'Guntur'},
    {id:2,name:'Anjali',branch:'ECE',address:'Vijaywada'},
    {id:3,name:'Manoj',branch:'IT',address:'Godawari'},
    {id:4,name:'Karthik',branch:'CSE',address:'Hyderabad'},
    {id:5,name:'Mohan',branch:'ME',address:'Warangal'},
]

console.log(users)

// Create: POST
app.post('/api/createUser',(req,res)=>{

   const {name,branch,address} = req.body
   if(!name || !branch || !address){
    return res.status(400).json({mssg:'Missing Input fields...'})
   }

   const newUser = {
    id:users.length+1,
    name,
    branch,
    address
   }

   users.push(newUser)
   res.status(201).json({mssg:'User Created Successfully..'})
   console.log(users)

})


// READ: GET
app.get('/api/getUsers',(req,res)=>{
    return res.status(200).json({mssg:'Got Users Data',data:users})
})


const PORT = 5500
app.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`)
})
