import React from "react";
import VideoCard from "../components/VideoCard";

const WatchPage = () => {
  return (
    //   Have to make this responsive for on medium and small screen and  display block
    <div className="block justify-between w-full  p-2 xl:flex">
      <div className="w-full bg-purple-400">
        <iframe
          width=""
          src="https://www.youtube.com/watch?v=bC6RyaT4y5Q"
          frameborder="0"
        />{" "}
        Like Comment Watch later icons
        {/*  */}
        CommentComp
      </div>
      {/* Hide the videos when from large screen */}
      <div className="">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default WatchPage;
