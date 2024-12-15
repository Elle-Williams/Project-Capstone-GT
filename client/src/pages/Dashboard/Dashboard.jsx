import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import NewsFeed from "../../components/NewsFeed/NewsFeed.jsx";
import Rightbar from "../../components/Rightbar/Rightbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />

<div className="flex">
        <Sidebar />
        <NewsFeed />
        <Rightbar />
</div>


    </>
  );
};

export default Home;
