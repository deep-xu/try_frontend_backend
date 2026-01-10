import React from 'react'
import banner from '../assets/banner.jpg'
import add_banner from '../assets/add_banner.avif'
import add_banner_last from '../assets/add_banner_last.avif'

const Home = ({ book }) => {

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
    <div>

      {/* Banner */}
      <div className="w-full h-[500px]">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
      </div> 

      {/* Categories */}
      <h1 className="m-4 text-4xl font-extrabold text-center">Categories</h1>

          <div className="flex overflow-x-auto flex-nowrap gap-6 px-4 pb-4">
            {book.map((item) => (
          <div
            key={item._id}
            className="min-w-[280px] max-w-[280px] p-4 card bg-base-100 shadow-sm"
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-base">{item.name}</h2>
              <p className="text-sm line-clamp-2">{item.description}</p>
              <h3 className="text-xs uppercase text-gray-500">{item.type}</h3>

              <div className="card-actions justify-between items-center">
                <span className="font-bold">₹{item.price}</span>
                <button onClick={() => handleBuy(item)} className="btn btn-primary btn-sm border-2 rounded-2xl px-4 py-2 m-3 bg-yellow-300 cursor-pointer active:scale-95">Buy</button>
              </div>
            </div>
          </div>
        ))}
        </div>

      {/* Best Seller */}
      <h1 className="m-4 text-4xl font-extrabold text-center">Best Seller</h1>

      <div className="flex overflow-x-auto flex-nowrap gap-6 px-4 pb-4">
        {book.map((item) => (
          <div
            key={item._id}
            className="min-w-[280px] max-w-[280px] p-4 card bg-base-100 shadow-sm"
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-base">{item.name}</h2>
              <p className="text-sm line-clamp-2">{item.description}</p>

              <div className="card-actions justify-between items-center">
                <span className="font-bold">₹{item.price}</span>
                <button onClick={() => handleBuy(item)} className="btn btn-primary btn-sm border-2 rounded-2xl px-4 py-2 m-3 bg-yellow-300 cursor-pointer active:scale-95">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ad Banner */}
      <div className="m-5 h-[400px]">
        <img src={add_banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      {/* Manga Sets */}
      <h1 className="m-4 text-4xl font-extrabold text-center">Manga Sets</h1>

      <div className="flex overflow-x-auto flex-nowrap gap-6 px-4 pb-4">
        {book
          .filter(item => item.type === "manga")
          .map((item) => (
            <div
              key={item._id}
              className="min-w-[280px] max-w-[280px] p-4 card bg-base-100 shadow-sm"
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-base">{item.name}</h2>
                <p className="text-sm line-clamp-2">{item.description}</p>

                <div className="card-actions justify-between items-center">
                  <span className="font-bold">₹{item.price}</span>
                  <button onClick={() => handleBuy(item)} className="btn btn-primary btn-sm border-2 rounded-2xl px-4 py-2 m-3 bg-yellow-300 cursor-pointer active:scale-95">Buy</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Banner */}
      <div className="w-full h-[300px]">
        <img src={add_banner_last} alt="banner" className="w-full h-full object-cover" />
      </div>

    </div>
  )
}

export default Home 