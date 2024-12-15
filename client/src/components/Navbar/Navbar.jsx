import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import { LuSearch } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";

// import { AiOutlineHome } from "react-icons/ai";
// import { RiTimelineView } from "react-icons/ri";
import profilePic from "../../assets/profilepic.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import noProfile from "../../pages/Profile/assets/user.jpg"

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)

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
            <div className="tabIcon1 cursor-pointer relative">
              <IoPersonSharp className="text-2xl" />
              <span className="w-[15px] h-[15px] bg-purple-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                3
              </span>
            </div>
            <div className="tabIcon2 cursor-pointer relative">
              <IoChatboxEllipsesSharp className="text-2xl" />
              <span className="w-[15px] h-[15px] bg-purple-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                2
              </span>
            </div>
            <div className="tabIcon3 cursor-pointer relative">
              <FaCalendarCheck className="text-2xl" />
              <span className="w-[15px] h-[15px] bg-purple-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                1
              </span>
            </div>
            <div className="tabIcon3 cursor-pointer relative">
              <MdNotificationsActive className="text-2xl" />
              <span className="w-[15px] h-[15px] bg-purple-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                3
              </span>
            </div>
          </div>
          <div className="profilePicDiv">
            <Link to={`/profile/${user?.username}`}>
            <img
              src={user.profilePicture ? user?.profilePicture : noProfile}
              alt="user profile picture"
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
