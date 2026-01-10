import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cart from '../assets/grocery-store.png'

const Header = ({ setSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearch(input);
    navigate("/manga");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-between items-center bg-amber-100 px-4 py-2">
      <div className="text-2xl font-bold">Logo</div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <input
          type="search"
          placeholder="Search..."
          className="text-xl px-6 py-2 border-2 rounded-2xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={handleSearch}
          className="px-4 py-2 border-2 rounded-2xl cursor-pointer active:scale-95"
        >
          Search
        </button>
      </div>

      {/* Auth buttons */}
      <div className="flex gap-3">
        <Link to="/register">
          <button className="px-3 py-2 border-2 rounded-xl text-xl active:scale-95">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="px-3 py-2 border-2 rounded-xl text-xl active:scale-95">
            Login
          </button>
        </Link>
        <Link to="/cart"><img className="m-2 h-[30px] cursor-pointer" src={cart} alt="cart"></img></Link>
      </div>
    </div>
  );
};

export default Header;
