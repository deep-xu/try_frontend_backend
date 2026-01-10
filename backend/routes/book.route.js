import express from 'express'
import { getBook } from '../controller/bookController.js'

const router = express.Router()

router.get('/book', getBook)

export default router