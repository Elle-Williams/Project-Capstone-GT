import React, { useEffect, useState } from "react";
import UploadPost from "../UploadPost/UploadPost";
import PostsLanding from "../PostsLanding/PostsLanding.jsx"
import { Posts } from "../../data/dummyDataLanding.js";
import axios from "axios";
import { getAllPosts, getTimelinePost } from "../../utils/api/api";
import { useParams } from "react-router-dom";

const NewsFeedLanding = () => {
  return (
    <div style={{ flex: 7.5 }} className="mt-[1px]">
      {/* <UploadPost /> */}
      {Posts.map((post) => (
        <PostsLanding key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default NewsFeedLanding;
