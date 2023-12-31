import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { img } from "../assets/images";

const Navbar = () => {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Layanan", link: "/layanan" },
    { name: "Kontak", link: "/kontak" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-screen fixed top-0 left-0 z-10">
      <div className="md:flex items-center md:justify-between bg-white py-5 lg:px-20 px-5">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-black">
          <Link to="/">
            <img src={img.logoUny} alt="logo uny" className="w-1/2 md:w-4/5" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-6 cursor-pointer lg:hidden">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}>
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-8 text-lg lg:my-0 my-7">
              <NavLink to={link.link}>
                <div
                  onClick={() => setOpen(!open)}
                  className="text-black hover:font-bold duration-100">
                  {link.name}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
