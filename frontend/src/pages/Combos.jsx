import React from "react";

const Combos = ({ book = []}) => {
  const combosBooks = book.filter((item) => item.type === "programming");


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

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Combos Collection</h1>

      {combosBooks.length === 0 ? (
        <p className="text-center text-gray-500">No combos available</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {combosBooks.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>

              <div className="p-4">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.title}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-amber-500">
                    ₹{item.price}
                  </span>
                  <button onClick={() => handleBuy(item)} className="cursor-pointer active:scale-95 px-4 py-1 text-sm bg-amber-400 rounded-lg text-white hover:bg-amber-500">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Combos; 