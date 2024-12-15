import React, { useContext, useState } from "react";
import profilePic from "../../assets/profilepic.jpg";
import { MdLabelImportant, MdPermMedia, MdEmojiEmotions } from "react-icons/md";
import { uploadPost } from "../../utils/api/api.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { toast } from "react-toastify";
import noProfile from "../../pages/Profile/assets/user.jpg"
import { Link } from "react-router-dom";



const UploadPost = () => {
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(file);
  
    const handlePostUpload = async () => {
      setLoading(true);
      try {
        const res = await uploadPost(user._id, desc, file);
        toast.success("post uploaded successfully.");
        setFile(null);
        setPreview(null);
        setDesc("");
        setLoading(false);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("post upload failed!");
      } finally {
        setLoading(false);
      }
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFile(file);
      if (file) {
        const url = URL.createObjectURL(file);
        setPreview(url);
      } else {
        setPreview(null);
      }
    };

  return (
    <div className="w-full h-[150px] rounded-md shadow-lg bg-white">
      <div className="wrapper p-[10px]">
        <div className="top flex items-center">
        <Link to={`/profile/${user?.username}`}>
          <img
            src={user.profilePicture ? user?.profilePicture : noProfile}
            alt="profilepic"
            className="w-[50px] h-[50px] rounded-full mr-[10px] object-cover"
          />
          </Link>
          <input
            type="text"
            placeholder="what are you playing?"
            className="w-[80%] focus:outline-none"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          {preview && (
            <img
              src={preview}
              alt="image preview"
              className="w-[50px] h-[50px] rounded-md object-cover ml-[15px]"
            />
          )}
        </div>
        <hr className="m-[20px]" />
        <div className="bottom flex items-center justify-between">
          <div className="flex ml-[20px]">
            <label
              htmlFor="file"
              className="flex items-center mr-[15px] cursor-pointer"
            >
              <MdPermMedia className="mr-[5px] text-green-500" />
              <span>photo or video</span>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".png, .jpg, .jpeg, .avif, .webp"
              />
            </label>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdLabelImportant className="mr-[5px] text-blue-400" />
              <span>tags</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdEmojiEmotions className="mr-[5px] text-yellow-400" />
              <span>feels</span>
            </div>
          </div>
          <button
          disabled={loading}
            onClick={handlePostUpload}
            className="bg-purple-500 text-white w-[150px] p-[5px] rounded-md font-semibold  hover:bg-purple-800"
          >
              {/* {loading ? "sending" : "sent"} */}
              send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
