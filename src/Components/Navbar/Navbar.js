import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='flex justify-around py-6 bg-white'>
      <div className="logo">
          <h2>Freedom.Live</h2>
      </div>
      <div className="flag">
          <h2>Flag</h2>
      </div>

      <div>
          <button>ACTION</button>
          <button>ACTION</button>
      </div>
    </nav>
    </>
  )
}
