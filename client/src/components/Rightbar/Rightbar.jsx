import React, { useContext, useEffect, useState } from "react";
// import profilePic from "../../assets/profilepic.jpg";
import Profesh from "../../assets/users/profesh.jpeg";
import Sniper from "../../assets/users/sniper.png";
import Pwnage from "../../assets/users/pwnage.webp";
import Genius from "../../assets/users/genius.webp";
import clashAd from "../../assets/clashofclans.jpg";
import { AuthContext } from "../../context/AuthContext";
import { followUser, unfollowUser } from "../../utils/api/api";

const Rightbar = ({ user }) => {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [isFollowed, setIsFollowed] = useState(
    currentUser.following.includes(user?._id)
  );

  useEffect(() => {
    setIsFollowed(currentUser.following.includes(user?._id));
  }, [currentUser, user?._id]);

  const handleFollow = async () => {
    try {
      if (isFollowed) {
        await unfollowUser(currentUser._id, user._id);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await followUser(currentUser._id, user._id);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setIsFollowed(!isFollowed);
  };

  const RightBarHome = () => {
    return (
      <>
        <div style={{ flex: 3, height: "calc(100vh - 50px)", zIndex: -1 }}>
          <div className="wrapper w-[275px] p-[20px] ml-[20px] mt-[-5px]  rounded-md shadow-lg bg-white">
            <span className="text-lg font-bold">who to follow</span>
            <div className="flex items-center justify-between mt-[10px]">
              <img
                src={Profesh}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
              
              <span className="font-semibold ml-[10px] mr-[10px]">
                <b>gaming_profesh</b>
              </span>
              
              <button className="bg-purple-500 text-white w-[50px] p-[5px] rounded-full hover:bg-purple-800 cursor-pointer text-xs font-semibold" onClick={handleFollow}>
              {isFollowed ? "following" : "follow"}
              </button>
            </div>
            <div className="flex items-center justify-between mt-[10px]">
              <img
                src={Sniper}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
              
              <span className="font-semibold ml-[10px] mr-[10px]">
                <b>gaming_sniper</b>
              </span>
              
              <button className="bg-purple-500 text-white w-[50px] p-[5px] rounded-full hover:bg-purple-800 cursor-pointer text-xs font-semibold" onClick={handleFollow}>
              {isFollowed ? "following" : "follow"}
              </button>
            </div>
            <div className="flex items-center justify-between mt-[10px]">
              <img
                src={Pwnage}
                alt="profilepic"
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
              
              <span className="font-semibold ml-[10px] mr-[10px]">
                <b>gaming_pwnage</b>
              </span>
              
              <button className="bg-purple-500 text-white w-[50px] p-[5px] rounded-full hover:bg-purple-800 cursor-pointer text-xs font-semibold" onClick={handleFollow}>
              {isFollowed ? "following" : "follow"}
              </button>
            </div>
            <div className="button">
              <button className="bg-slate-400 text-white rounded-lg w-[150px] p-[5px] hover:bg-purple-800 transition mt-[10px]">
                see more
              </button>
            </div>
          </div>
          <div className="wrapper w-[275px] p-[20px] ml-[20px] mt-[15px] bg-purple-100 rounded-md shadow-lg">
            <span className="text-sm mb-[5px]">
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

          <div className="wrapper w-[275px] p-[20px] ml-[20px] mt-[15px]  rounded-md shadow-lg bg-white">
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
        </div>
      </>
    );
  };

  const RightBarProfile = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <div className="ml-[20px] mt-[15px] mb-[20px]">
            <button className="bg-purple-600 text-white font-semibold rounded-lg w-[275px] p-[10px] hover:bg-purple-800 transition text-lg tracking-[.2em]"   onClick={handleFollow}>
              {isFollowed ? "unfollow" : "follow"}
            </button>
          </div>
        )}

        <div className="wrapper w-[275px] p-[20px] ml-[20px] mt-[-5px]  rounded-md shadow-lg bg-white">
          <h1 className="text-lg font-bold mb-[5px]">info</h1>
          <ul className="m-0 p-0">
            <li className="flex items-center mb-[10px]">
              <div className="mr-[10px] relative">
                <p>style:</p>
              </div>
              <span className="font-semibold ml-[10px] mr-[10px]">
                <b>{user.style}</b>
              </span>
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="mr-[10px] relative">
                <p>timezone:</p>
              </div>
              <span className="font-semibold ml-[10px] mr-[10px]">
                <b>{user.timeZone}</b>
              </span>
            </li>
            <li className="flex items-center mb-[10px]">
              <div className="mr-[10px] relative">
                <p>platform(s):</p>
              </div>
              <span className="font-semibold ml-[10px] mr-[10px]">
                <b>{user.platform}</b>
              </span>
            </li>
          </ul>
          <br />
          <h1 className="text-lg font-bold mb-[5px]">online now</h1>
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
            <button
              className="bg-slate-400 text-white rounded-lg w-[150px] p-[5px] hover:bg-purple-800 transition"
              onClick={handleFollow}
            >
              see all
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ flex: 3 }}>
      <div className="pt-[20px] pr-[20px]">
        {user ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
