import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import register from './routes/user.route.js'
import book from './routes/book.route.js'
import paymentRoutes from './routes/payments.route.js'
import cartRoutes from './routes/cart.route.js'
import "./model/bookModel.js"; 

const server = express()

dotenv.config()

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

server.use(express.json())
server.use(cookieParser())

const PORT = process.env.PORT || 4002
const URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('connected to database')
    } catch {
        console.log('failed to connect')
    }
}
connectDB()

server.use('/', register)
server.use('/', book)
server.use('/', paymentRoutes)
server.use('/', cartRoutes)

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})