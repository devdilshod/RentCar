import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiFillBell } from 'react-icons/ai';
import { FiSettings, FiUser } from 'react-icons/fi';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
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
    <header className="w-full bg-white border-b border-[#C3D4E9]/40 px-6 py-5 md:px-16 flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        <Link to="/" className="text-[#3563E9] text-3xl font-bold tracking-tight cursor-pointer">
          MORENT
        </Link>

        <div className="md:hidden">
          <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] flex items-center justify-center">
            <FiUser className="w-5 h-5 text-[#596780]" />
          </button>
        </div>
      </div>

      <nav className="relative w-full md:w-[492px] h-[44px] md:ml-[64px] flex items-center gap-8 opacity-100">
        <NavLinks />
      </nav>

      <div className="hidden md:flex items-center gap-5 ml-auto">
      <label className="swap swap-rotate btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] grid place-items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={isDark} 
            onChange={changeTheme} 
          />
          <BsSunFill className="swap-on w-5 h-5 text-yellow-500" />
          <BsMoonFill className="swap-off w-5 h-5 text-[#596780]" />
        </label>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] flex items-center justify-center">
          <AiFillHeart className="w-5 h-5 text-[#596780]" />
        </button>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] relative flex items-center justify-center">
          <AiFillBell className="w-5 h-5 text-[#596780]" />
          <span className="absolute top-0 right-1.5 w-[10px] h-[10px] bg-[#FF483C] rounded-full"></span>
        </button>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] flex items-center justify-center">
          <FiSettings className="w-5 h-5 text-[#596780]" />
        </button>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] flex items-center justify-center ml-2">
          <FiUser className="w-5 h-5 text-[#596780]" />
        </button>
      </div>

    </header>
  );
}

