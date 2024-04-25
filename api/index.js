// imports
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth-router.js'
import anonRoutes from './routes/anon-router.js'
import userRoutes from './routes/user-router.js'

// constants
const app = express()
const PORT = 5050

// middlewares
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
    .then((result) => {
        console.log('Connected to MongoDb')
    }).catch((error) => {
        console.log(`Error: ${error}`)
    })

// listen
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

// routes
app.get('/', (req, res, next) => {
    res.json({message: "Hello world"})
})
app.use('/api/auth', authRoutes)
app.use('/api/anon', anonRoutes)
app.use('/api/user', userRoutes)

// error validatton middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message
    return res.status(statusCode).send({
        success: false,
        message: message,
        statusCode: statusCode
    })
})