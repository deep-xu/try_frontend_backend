import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:4000/cart");
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart || cart.items.length === 0) {
    return <div className="p-10 text-xl">Cart is empty 🛒</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cart.items.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center border p-4 mb-4 rounded-lg"
        >
          <div>
            <h2 className="font-semibold">{item.product.name}</h2>
            <p className="text-gray-500">₹{item.product.price}</p>
          </div>

          <div className="font-bold">
            Qty: {item.quantity}
          </div>

          <div className="font-bold text-amber-600">
            ₹{item.product.price * item.quantity}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
