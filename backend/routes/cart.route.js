import express from "express";
import { addToCart, getCart } from "../controller/cartController.js";

const router = express.Router();

router.post("/cart/add", addToCart);
router.get("/cart", getCart);

export default router;
