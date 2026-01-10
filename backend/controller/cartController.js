import mongoose from "mongoose";
import Cart from "../model/cartModel.js";

const TEMP_USER_ID = new mongoose.Types.ObjectId(
  "65a12bc8e91f8d234abcd123" // 👈 REAL USER ID
);

export const addToCart = async (req, res) => {
  const { productId } = req.body;

  let cart = await Cart.findOne({ user: TEMP_USER_ID });

  if (!cart) {
    cart = new Cart({
      user: TEMP_USER_ID,
      items: [{ product: productId, quantity: 1 }]
    });
  } else {
    const itemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }
  }

  await cart.save();
  res.json(cart);
};


export const getCart = async (req, res) => {
  const cart = await Cart.findOne({
    user: TEMP_USER_ID
  }).populate("items.product");

  res.json(cart);
};
