import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsBookmarksFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import { FaHotjar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsBroadcast } from "react-icons/bs";
import { BsCalendar2EventFill } from "react-icons/bs";
import { RiTimelineView } from "react-icons/ri";
import profilePic from "../../assets/profilepic.jpg";
import Dragon from "../../assets/users/dragon.webp";
import Demon from "../../assets/users/demon.png";
import God from "../../assets/users/god.webp";
import Ghost from "../../assets/users/ghost.webp";


const Sidebar = () => {
  return (
    //100% of the view screen minus the 50px of the Navbar
    <div
      style={{ flex: 2.5, height: "calc(100vh - 50px)" }}
      className="overflow-y-auto sticky top-[25px]"
    >
      <div className="p-[20px]">
        <ul className="sidebarList m-0 p-0">
          <li>
            <IoHomeSharp />
            <span>home</span>
          </li>
          <li>
            <RiTimelineView />
            <span>timeline</span>
          </li>
          <li>
            <BsBookmarksFill />
            <span>bookmarks</span>
          </li>
          <li>
            <FaNewspaper />
            <span>news</span>
          </li>
          <li>
            <FaHotjar />
            <span>popular</span>
          </li>
          <li>
            <MdGroups />
            <span>lobbies</span>
          </li>
          <li>
            <BsBroadcast />
            <span>live streams</span>
          </li>
          <li>
            <BsCalendar2EventFill />
            <span>events</span>
          </li>
        </ul>
        <div className="button">
          <button className="bg-slate-400 text-white rounded-lg w-[150px] p-[5px] hover:bg-purple-800 transition">
            see more
          </button>
        </div>
      </div>

        <hr className="mt-[15px]" />
      <div className="p-[20px]">
        <h1 className="text-xl font-bold">your squadmates</h1>
        <ul className="sidebarList m-0 p-0">
          <li className="flex items-center mb-[10px] mt-[10px]">
            <div className="mr-[10px] relative">
              <img
                src={God}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            </div>
            
            <span className="text-md ml-[10px] mr-[10px]">
              <b>gaming_god</b>
            </span>
          </li>
          <li className="flex items-center mb-[10px]">
            <div className="mr-[10px] relative">
              <img
                src={Ghost}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            </div>
            <span className="text-md ml-[10px] mr-[10px]">
              <b>gaming_ghost</b>
            </span>
          </li>
          <li className="flex items-center mb-[10px]">
            <div className="mr-[10px] relative">
              <img
                src={Dragon}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            </div>
            <span className="text-md ml-[10px] mr-[10px]">
              <b>gaming_dragon</b>
            </span>
          </li>
          <li className="flex items-center mb-[10px]">
            <div className="mr-[10px] relative">
              <img
                src={Demon}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            </div>
            <span className="text-md ml-[10px] mr-[10px]">
              <b>gaming_demon</b>
            </span>
          </li>
        </ul>
        <div className="button">
          <button className="bg-slate-400 text-white rounded-lg w-[150px] p-[5px] hover:bg-purple-800 transition">
            see all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
