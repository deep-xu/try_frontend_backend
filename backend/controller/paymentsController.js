import { createRazorpayInstance } from "../config/razorpayConfig.js";
import crypto from 'crypto'

const razorpayInstance = createRazorpayInstance()

export const createOrder = async (req, res) => {
    const {amount} = req.body

    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`
    }
        const order = await razorpayInstance.orders.create(options)
        res.json(order)

}



export const verifyPayment = (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    const secret = process.env.RAZORPAY_KEY_SECRET

    const hmac = crypto.createHmac("sha256", secret)
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id)
  const generatedSignature = hmac.digest("hex")

  if (generatedSignature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified" })
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" })
  }
}