//initializing the server by calling node and other dependencies:
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const path = require('path');

//bringing routes

const authRoutes = require('./routes/auth')
const agentRoutes = require('./routes/agentRoutes')
const sbaLoanRoutes = require('./routes/sbaloan')
const businessRoutes = require('./routes/business')
//app

const app = express()

//connecting Database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => console.log("database Connected"))

//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
// app.use(express.static('public'))
app.use("/public", express.static(path.join(__dirname, "uploads")));

//cors: where data need to be correct authenticate or not: which will decided by cors
if (process.env.NODE_ENV = 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

//routes middleware
app.use('/api', authRoutes)
app.use('/api', agentRoutes)
app.use('/api', sbaLoanRoutes)
app.use('/api',businessRoutes)

//routes

//port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is Running at ${port}`)
})