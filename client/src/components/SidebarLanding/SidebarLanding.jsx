import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsBookmarksFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import { FaHotjar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsBroadcast } from "react-icons/bs";
import { BsCalendar2EventFill } from "react-icons/bs";
import { RiTimelineView } from "react-icons/ri";
// import profilePic from "../../assets/profilepic.jpg";

const SidebarLanding = () => {
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

    </div>
  );
};

export default SidebarLanding;
