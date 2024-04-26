import express from 'express'
import { config } from 'dotenv'
import { DbConnect } from './db_connection/DB_Connnection.js'
import route from './routes/Routers.js'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
config()
app.use('/spodium_support',route)
DbConnect().then(()=>{
    console.log('connected')
    app.listen(5000,()=>{
        console.log('server started')
    })
}).catch((error)=>{
    console.log(error)
})




