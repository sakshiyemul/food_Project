
const express = require('express')
const mongoose = require('mongoose')
const connect = require('./config/db')
const cors=require('cors')
const thingsRoute = require('./routes/thingsRoutes')
const app = express()



require('dotenv').config()

const port = process.env.port

connect()




app.use(express.json())
app.use(cors())
app.use('/images',express.static('public/images'))

app.use('/api',thingsRoute)




app.listen(port, () => {
    console.log(`we are listening at ${port}`)
})
