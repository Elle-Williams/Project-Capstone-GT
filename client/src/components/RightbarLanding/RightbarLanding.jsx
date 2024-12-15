import React from "react";
// import profilePic from "../../assets/profilepic.jpg";
import Profesh from "../../assets/users/profesh.jpeg"
import Sniper from "../../assets/users/sniper.png"
import Pwnage from "../../assets/users/pwnage.webp"
import clashAd from "../../assets/clashofclans.jpg";

const Rightbar = () => {

  return (
    <>
      <div style={{ flex: 3, height: "calc(100vh - 50px)", zIndex: -1 }} >



        <div className="wrapper w-[275px] p-[20px] ml-[20px] mt-[20px]  rounded-md shadow-lg bg-white">
          <h1 className="text-lg font-bold mb-[5px]">streaming now</h1>
          <ul className="m-0 p-0">
            <li className="flex items-center mb-[10px]">
              <div className="mr-[10px] relative">
                <img
                  src={Profesh}
                  alt="profilepic"
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <span className="w-[12px] h-[12px] rounded-full bg-purple-500 absolute top-[-2px] right-0 border-[2px] border-white"></span>
                </div>
                <span className="font-semibold ml-[10px] mr-[10px]">
                  <b>gaming_profresh</b>
                </span>
                
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="mr-[10px] relative">
                <img
                  src={Sniper}
                  alt="profilepic"
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <span className="w-[12px] h-[12px] rounded-full bg-purple-500 absolute top-[-2px] right-0 border-[2px] border-white"></span>
                </div>
                <span className="font-semibold ml-[10px] mr-[10px]">
                  <b>gaming_sniper</b>
                </span>
                
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="mr-[10px] relative">
                <img
                  src={Pwnage}
                  alt="profilepic"
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <span className="w-[12px] h-[12px] rounded-full bg-purple-500 absolute top-[-2px] right-0 border-[2px] border-white"></span>
                </div>
                <span className="font-semibold ml-[10px] mr-[10px]">
                  <b>gaming_pwnage</b>
                </span>
                
            </li>
          </ul>
          <div className="button">
          <button className="bg-slate-400 text-white rounded-lg w-[150px] p-[5px] hover:bg-purple-800 transition">
            see all
          </button>
        </div>
        </div>
        <div className="wrapper w-[275px] p-[20px] ml-[20px] mt-[20px] bg-purple-100 rounded-md shadow-lg">
          <span className="text-sm">
            <i>advertisement</i>
          </span>

          <div>
            <span className="mt-[20px] mb-[20px]">Protect your village!</span>
            <img
              src={clashAd}
              alt="clashofclans"
              className="w-full rounded-md mt-[10px] mb-[10px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
