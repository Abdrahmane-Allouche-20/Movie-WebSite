import { NavLink } from "react-router-dom";
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ContextMovie } from "../context/context";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { search, setSearch, handleSubmit } = useContext(ContextMovie);

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-10 flex justify-between items-center p-2 lg:p-4 shadow-lg transition-colors duration-300 ${
        scrolled || search !== "" ? "bg-black" : "bg-black/80"
      } fixed top-0 left-0`}
    >
      <NavLink to="/" className="text-white font-bold text-lg lg:text-2xl">
        Cinema
      </NavLink>

      <div className="relative w-1/2 hidden lg:block">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search For Your Movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`outline-none pl-10 h-11 w-full rounded-xl text-xl font-semibold text-orange-500 ${
              scrolled ? "bg-white" : "bg-black/5"
            } ${search !== "" && "border-2 border-zinc-300 text-orange-500"}`}
          />
          <button type="submit">
            <FaSearch
              className={`absolute top-1/2 -translate-y-1/2 pr-1 left-3 border-r-2 ${
                search !== ""
                  ? "text-orange-500 border-orange-500"
                  : "text-black border-black"
              } text-lg lg:text-2xl`}
            />
          </button>
        </form>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-orange-400 active:text-orange-500 duration-300 text-4xl"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-6 lg:static fixed top-14 left-0 w-full h-fit justify-center items-center bg-black/80 lg:bg-transparent lg:h-auto lg:w-auto lg:p-0 p-4`}
      >

       
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block lg:inline-block py-2 lg:py-0 text-center text-base  lg:text-xl font-bold  hover:text-orange-500 duration-300 ${
                isActive ? "text-orange-600" : "text-white"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Favorites"
            className={({ isActive }) =>
              `block lg:inline-block py-2 text-center lg:py-0  text-base lg:text-xl font-bold  hover:text-orange-500 duration-300 ${
                isActive ? "text-orange-600" : "text-white"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </NavLink>
        </li>
        <li>
        <div className="relative w-full lg:hidden block">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search For Your Movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`outline-none pl-8 lg:pl-10 mt-4 h-11 font-black rounded-xl  w-full  md:w-9/12 text-sm md:text-lg  text-orange-500 ${
              scrolled ? "bg-white" : "bg-black/5"
            } ${search !== "" && "border-2 border-zinc-300 text-orange-500"}`}
          />
          <button type="submit">
            <FaSearch
              className={`absolute top-1/2 lg:top-1/2 lg:-translate-y-1/2 pr-1  left-3 border-r-2 ${
                search !== ""
                  ? "text-orange-500 border-orange-500"
                  : "text-black border-black"
              } text-lg lg:text-2xl`}
            />
          </button>
        </form>
      </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
