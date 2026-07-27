import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiFillBell } from 'react-icons/ai';
import { FiSettings, FiUser } from 'react-icons/fi';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';
import NavLinks from "./Navlinks";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.userState.theme);

  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  const isDark = theme === "dracula";

  return (
    <header className="w-full bg-base-100 border-b border-base-300 px-6 py-5 md:px-16 flex items-center gap-4 md:gap-8 transition-colors duration-300">
      
      <div className="flex items-center gap-4">
        <Link to="/" className="text-primary text-3xl font-bold tracking-tight cursor-pointer">
          MORENT
        </Link>

        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle border hover:bg-base-200 border-base-300">
            <FaBarsStaggered className="w-5 h-5 text-base-content/70" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
            <NavLinks />
          </ul>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8 ml-8">
        <NavLinks />
      </nav>

      <div className="flex items-center gap-2 md:gap-5 ml-auto">
        <label className="swap swap-rotate btn btn-ghost btn-circle border border-base-300 hover:bg-base-200 grid place-items-center cursor-pointer">
          <input type="checkbox" checked={isDark} onChange={changeTheme} />
          <BsSunFill className="swap-on w-5 h-5 text-base-content/70" />
          <BsMoonFill className="swap-off w-5 h-5 text-base-content/70" />
        </label>

        <Link to="/favorites" className="btn btn-ghost btn-circle border border-base-300 hover:bg-base-200 hidden md:flex items-center justify-center">
          <AiFillHeart className="w-5 h-5 text-base-content/70" />
        </Link>
        
        <button className="btn btn-ghost btn-circle border border-base-300 hover:bg-base-200 relative hidden md:flex items-center justify-center">
          <AiFillBell className="w-5 h-5 text-base-content/70" />
          <span className="absolute top-0 right-1.5 w-[10px] h-[10px] bg-[#ED3F3F] rounded-full"></span>
        </button>

        <button className="btn btn-ghost btn-circle border border-base-300 hover:bg-base-200 hidden md:flex items-center justify-center">
          <FiSettings className="w-5 h-5 text-base-content/70" />
        </button>

        <button className="btn btn-ghost btn-circle border border-base-300 hover:bg-base-200 flex items-center justify-center">
          <FiUser className="w-5 h-5 text-base-content/70" />
        </button>
      </div>

    </header>
  );
}