import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import { getUserData, getUserProfileData } from "../../utils/api/api";
import { useParams } from "react-router-dom";
import { getUserData, getUserProfileData, API } from "../../utils/api/api";
import noProfilePic from "./assets/user.jpg";
import noCoverImage from "./assets/generic-cover.jpg";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";


const Profile = () => {
  const {username} = useParams();
  const [user, setUser] = useState({});
  // console.log(username);
  const { user: currentUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserProfileInfo = async () => {
      try {
        const res = await getUserProfileData(username);
        // console.log(res);
        setUser(res.data.userInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfileInfo();
  }, [username]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setProfileImage(file);
      setEditMode(true);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    if (previewImage) {
      const formData = new FormData();
      formData.append("profilePicture", profileImage);
      try {
        const res = await API.put(
          `/users/${currentUser._id}/profile-picture`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(res.data.message);
        setLoading(false);
        setUser({ ...user, profilePicture: res.data.user.profilePicture });
        setPreviewImage(null);
        setEditMode(false);
      } catch (error) {
        setLoading(false);
        toast.error("failed to update profile picture");
        console.log(error);
      }
    } else {
      setEditMode(false);
    }
  };

  const handleCancel = () => {
    setPreviewImage(null);
    setEditMode(false);
  };
  return (
    <div>
      <Navbar />
      <div className="flex">
      <Sidebar />
        <div style={{ flex: 9 }}>
          <div>
            <div className="h-[350px] relative">
              <img
                src={ user.coverPicture || noCoverImage}
                alt="cover image"
                className="w-full h-[250px] object-cover"
              />
              <img
                src={ user.profilePicture || noProfilePic }
                alt="user image"
                className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl mt-[-30px]">{user.username}</h1>
              <span>{user.desc || "i am new here!"}</span>
              {username === currentUser?.username && (
                <>
                  {editMode ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-purple-500 mt-2.5 px-5 py-2 text-white rounded-md hover:bg-purple-800 transition"
                      >
                        {loading ? "saving changes" : "save changes"}
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-teal-500 mt-2.5 px-5 py-2 text-white rounded-md hover:bg-teal-800 transition"
                      >
                        cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <label
                        htmlFor="profilePicture"
                        className="text-white self-center cursor-pointer bg-purple-500 mt-2.5 px-5 py-2 rounded-md hover:bg-purple-800 transition"
                      >
                        edit profile
                      </label>
                      <input
                        type="file"
                        id="profilePicture"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </>
              )}
            </div>
            
          </div>
          <div className="flex">
            <NewsFeed userPosts />
            <Rightbar user={user}/>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
