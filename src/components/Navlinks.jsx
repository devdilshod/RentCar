import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/catalog", text: "Catalog" },
  { id: 3, url: "/checkout", text: "Checkout" },
];

const Navlinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        if (!user && link.url === "/checkout") {
          return null;
        }

        return (
          <NavLink
            key={link.id}
            to={link.url}
            className={({ isActive }) =>
              `text-sm font-medium transition-all duration-200 py-1 border-b-2 ${
                isActive
                  ? "text-[#3563E9] border-[#3563E9] font-semibold" 
                  : "text-[#596780] border-transparent hover:text-[#3563E9]" 
              }`
            }
          >
            {link.text}
          </NavLink>
        );
      })}
    </>
  );
};

export default Navlinks;


// [#3563E9]