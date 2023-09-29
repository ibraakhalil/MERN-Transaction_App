require('dotenv').config()
require('./config/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const Router = require('./router/router')
const cors = require('cors')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(Router)


app.listen(PORT, () => {
    console.log('Server Running at port: ' + PORT)
}) 