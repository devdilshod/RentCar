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
    <header className="w-full bg-base-100 border-b border-[#C3D4E9]/40 px-6 py-5 md:px-16 flex items-center gap-4 md:gap-8">
      
      <div className="flex items-center gap-4">

      <Link to="/" className="text-[#3563E9] text-3xl font-bold tracking-tight cursor-pointer">
          MORENT
        </Link>

        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle border  hover:bg-[#F6F7F9] border-[#C3D4E9]/40">
            <FaBarsStaggered className="w-5 h-5 text-[#596780]" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-white rounded-box w-52 border border-[#C3D4E9]/40">
            <NavLinks />
          </ul>
        </div>
        
      </div>

      <nav className="hidden lg:flex items-center gap-8 ml-8">
        <NavLinks />
      </nav>

      <div className="flex items-center gap-2 md:gap-5 ml-auto">
        <label className="swap swap-rotate btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] grid place-items-center cursor-pointer">
          <input type="checkbox" checked={isDark} onChange={changeTheme} />
          <BsSunFill className="swap-on w-5 h-5 text-yellow-500" />
          <BsMoonFill className="swap-off w-5 h-5 text-[#596780]" />
        </label>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] hidden md:flex"><AiFillHeart className="w-5 h-5 text-[#596780]" /></button>
        
        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] relative hidden md:flex">
          <AiFillBell className="w-5 h-5 text-[#596780]" />
          <span className="absolute top-0 right-1.5 w-[10px] h-[10px] bg-[#FF483C] rounded-full"></span>
        </button>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] hidden md:flex"><FiSettings className="w-5 h-5 text-[#596780]" /></button>

        <button className="btn btn-ghost btn-circle border border-[#C3D4E9]/40 hover:bg-[#F6F7F9] flex items-center justify-center">
          <FiUser className="w-5 h-5 text-[#596780]" />
        </button>
      </div>

    </header>
  );
}