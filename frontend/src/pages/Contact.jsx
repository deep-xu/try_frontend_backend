import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-amber-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Have questions? We’d love to hear from you.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Reach out to us through the form or via the details below.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">📍 Address:</span> Greater Noida,
              India
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span>{" "}
              deepanshu.official1214@gmail.com
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 96256 19316
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Greater%20Noida&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
