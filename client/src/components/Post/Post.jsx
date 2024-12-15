import React, { useContext, useEffect, useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
// import profilePic from "../../assets/profilepic.jpg";
import postPic from "../../assets/borderlandsImg.jpg";
import thumbsUp from "../../assets/thumbsup.svg";
import thumbsDown from "../../assets/thumbsdown.svg";
import commentIcon from "../../assets/comments.svg";
// import { Users } from "../../data/dummyData";
import axios from "axios";
import userPic from "../../pages/Profile/assets/user.jpg";
import moment from "moment";
import { getUserData, likeAndDislikePost } from "../../utils/api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext.jsx";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  // console.log(user);
  const {user : currentUser} = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes?.includes(currentUser._id));
  }, [currentUser?._id, post.likes]);
  

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await getUserData(post.userId);
        // console.log(res);
        setUser(res.data.userInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [post.userId]);

  const handleLike = async () => {
    try {
      await likeAndDislikePost(post._id, currentUser._id);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="w-full rounded-md shadow-md mt-[20px] mb-[20px] bg-white p-[20px]">
        <div className="p-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={user.profilePicture ? user.profilePicture : userPic}
                alt="profile picture"
                className="w-[52px] h-[52px] ml-[-12px] rounded-full object-cover"
              />
                            <Link to={`/profile/${user.username}`}>

              <span className="font-semibold text-lg ml-[10px] mr-[10px]">
                {user.username}
              </span>
              </Link>
              <span className="text-sm">{moment(post.createdAt).fromNow()}</span>
            </div>
            <div>
              <BiDotsVertical className="text-xl cursor-pointer text-teal-600" />
            </div>
          </div>
        </div>
        <div className="mt-[20px] mb-[20px]">
          <span className="text-lg">{post?.desc}</span>
          {post.img && (
          <img
          src={post.img}
          alt="uploadedimage"
          className="mt-[20px] w-full object-contain rounded-lg"
          style={{ maxHeight: "500px" }}
        />
          )}

        </div>
        <div className="flex items-center justify-between ml-[10px]">
          <div className="flex items-center gap-[5px]">
            <img src={thumbsUp} alt="thumbsUp" onClick={handleLike} />
            <span className="text-sm">{like} likes</span>
            <img src={thumbsDown} alt="thumbsDown" />
          </div>
          <div className="flex items-center gap-[5px]">
            <img src={commentIcon} alt="thumbsDown" />

            <span className="cursor-pointer border-b-[1px] border-teal-600 text-sm">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
