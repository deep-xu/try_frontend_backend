import React from "react";
import axios from 'axios'

const Manga = ({ book = [], search = "" }) => {

  const mangaBooks = book
    .filter(item =>
      ["manga", "kids", "programming", "education"].includes(item.type)
    )
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleBuy = (item) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: item.price * 100,
      currency: "INR",
      name: "Book Store",
      description: item.name,
      handler: function () {
        alert("Payment Successful ✅")
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  const handleAddToCart = async (item) => {
    try {
     await axios.post(
    "http://localhost:4000/cart/add",
    { productId: item._id }
  );


    alert("Added to cart 🛒");
  } catch (error) {
    alert("Please login first");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Manga Collection
      </h1>

      {mangaBooks.length === 0 ? (
        <p className="text-center text-gray-500">No results found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mangaBooks.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-amber-500">₹{item.price}</span>
                  <button
                    onClick={() => handleBuy(item)}
                    className="px-4 py-1 text-sm bg-amber-400 rounded-lg text-white hover:bg-amber-500 active:scale-95"
                  >
                    Buy now
                  </button>

                  <button
      onClick={() => handleAddToCart(item)}
      className="px-3 py-1 text-sm border border-gray-400 rounded-lg hover:bg-gray-100 active:scale-95"
    >
      Add to Cart
    </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Manga
