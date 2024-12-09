'use client'

import React from 'react'

function ProductPage() {
  return (
    <div>
  <div
    className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
    style={{
      backgroundImage:
        'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    }}
  >
    {/* Add margin-top to avoid overlap with navbar */}
    <div className="z-50 flex flex-col items-center justify-center text-white w-full mt-20 md:mt-28 lg:mt-36 space-y-8 md:space-y-10 lg:space-y-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
        We are <b>Almost</b> there!
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl animate-fade-in">
        Stay tuned for something amazing!!!
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="shadow w-full bg-white rounded-full">
          <div
            className="rounded-full bg-secondary text-xs leading-none text-center text-white py-2"
            style={{ width: '75%', transition: 'width 1s ease' }}
          >
            75%
          </div>
        </div>
      </div>

      {/* Countdown timer */}
      <div className="text-xl md:text-2xl lg:text-3xl">
        Launching soon: <span id="countdown" className="font-semibold"></span>
      </div>

      {/* Email subscription */}
      {/* <div className="flex flex-col items-center w-full max-w-xs sm:max-w-md">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full py-2 px-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-secondary-300 mb-4 sm:mb-5"
        />
        <button className="bg-secondary hover:bg-secondary-600 text-white py-2 px-6 rounded-full transition duration-300">
          Notify Me
        </button>
      </div> */}
    </div>

    {/* Background overlay */}
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
  </div>
</div>


  )
}

export default ProductPage;