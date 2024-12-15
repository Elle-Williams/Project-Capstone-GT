import React from "react";
import Logo from "../Logo/Logo";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  return (
    <>
      <div className="h-[50px] w-full flex items-center bg-teal-600 top-0 bg-card shadow-sm">
        <div className="left" style={{ flex: 7 }}>
        <Link to={"/"}>

          <div className="logodiv cursor-pointer">
            <Logo />
          </div>
          </Link>
        </div>

        <div className="center" style={{ flex: 4.5 }}>
          <div className="searchBar w-[250px] h-[30px] bg-white rounded-xl flex items-center">
            <LuSearch className="text-lg ml-[10px]" />
            <input
              type="text"
              className="search w-full focus:outline-none bg-none m-[10px]"
              placeholder="search"
            />
          </div>
        </div>

        <div
          className="right flex items-center justify-around text-white"
          style={{ flex: 6 }}
        >
          <div className="tabIcons flex text-xl gap-[10px] ml-[250px]">
            <a href="http://localhost:5173/login">
              <button className="bg-white text-slate-800 w-[80px] p-[2px] rounded-lg hover:bg-purple-800 hover:text-white cursor-pointer">
                login
              </button>
            </a>
            <a href="http://localhost:5173/register">
              <button className="bg-white text-slate-800 w-[80px] p-[2px] rounded-lg hover:bg-purple-800 hover:text-white cursor-pointer">
                signup
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLanding;
