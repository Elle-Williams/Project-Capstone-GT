import React from "react";
import { BiDotsVertical } from "react-icons/bi";
// import profilePic from "../../assets/profilepic.jpg";
// import postLiaraPic from "../../assets/liara.avif";
import thumbsUp from "../../assets/thumbsup.svg";
import thumbsDown from "../../assets/thumbsdown.svg";
import commentIcon from "../../assets/comments.svg";
import { Users } from "../../data/dummyData";

const Post = ({post}) => {
  return (
    <>
        <div className="w-full rounded-md shadow-md mt-[20px] mb-[20px] bg-white p-[20px]">
          <div className="p-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={Users.filter(user=>user.id === post?.userId)[0].profilePicture}
                  alt="profile picture"
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <span className="font-bold ml-[10px] mr-[10px]">{Users.filter(user=>user.id === post?.userId)[0].username}</span>
                <span className="text-sm">{post.date}</span>
              </div>
              <div>
                <BiDotsVertical className="text-xl cursor-pointer text-teal-600" />
              </div>
            </div>
          </div>
          <div className="mt-[20px] mb-[20px]">
            <span className="text-lg">{post?.desc}</span>
            <img
              src={post.photo}
              alt="uploadedimage"
              className="mt-[20px] w-full object-contain rounded-lg"
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="flex items-center justify-between ml-[10px]">
            <div className="flex items-center gap-[5px]">
              <img src={thumbsUp} alt="thumbsUp" />
              <span className="text-sm">{post.like}</span>
              <img src={thumbsDown} alt="thumbsDown" />
            </div>
            <div className="flex items-center gap-[5px]">
              <img src={commentIcon} alt="thumbsDown" />
  
              <span className="cursor-pointer border-b-[1px] border-teal-600 text-sm">{post.comment} comments</span>
            </div>
          </div>
        </div>
    </>
  );
};

export default Post;