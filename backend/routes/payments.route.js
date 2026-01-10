import express from 'express'
import { createOrder, verifyPayment } from "../controller/paymentsController.js";

const router = express.Router()

router.post('/createOrder', createOrder)
router.post('/verifyPayment', verifyPayment)

export default router