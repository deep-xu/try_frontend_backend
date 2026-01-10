import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="w-full py-4 bg-amber-100">
      <hr />

      <div className="m-3 text-2xl flex justify-between items-center">

        <Link to="/">Home</Link>

        {/* Categories Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button onClick={() => setOpen(!open)} className="flex items-center gap-1 cursor-pointer">
            Categories
            <span className={`transition-transform ${open ? 'rotate-180' : ''} `}>▼</span>
          </button>

          {open && (
            <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
              <ul className="text-lg cursor-pointer">
                <li className="px-4 py-2 hover:bg-amber-100">
                  <Link to="/categories/comic" onClick={() => setOpen(false)}>Comic</Link>
                </li>
                <li className="px-4 py-2 hover:bg-amber-100">
                  <Link to="/categories/manga" onClick={() => setOpen(false)}>Manga</Link>
                </li>
                <li className="px-4 py-2 hover:bg-amber-100">
                  <Link to="/categories/kids" onClick={() => setOpen(false)}>Kids</Link>
                </li>
                <li className="px-4 py-2 hover:bg-amber-100">
                  <Link to="/categories/sci-fi" onClick={() => setOpen(false)}>Sci-Fi</Link>
                </li>
                <li className="px-4 py-2 hover:bg-amber-100">
                  <Link to="/categories/tutorial" onClick={() => setOpen(false)}>Tutorial</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/manga">Manga</Link>
        <Link to="/combos">Combos</Link>
        <Link to="/track-order">Track Order</Link>
        <Link to="/contact">Contact</Link>

      </div>
    </div>
  )
}

export default Navbar 


