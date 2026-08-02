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
              `text-sm font-medium transition-all -200 py-1 border-b-2 ${
                isActive
                  ? "text-primary border-primary font-semibold" 
                  : "text-base-content/60 border-transparent hover:text-primary" 
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