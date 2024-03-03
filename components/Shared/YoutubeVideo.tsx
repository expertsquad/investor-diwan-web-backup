"use client";

import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
  const videoId = "6SrCVjxSA54";
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className=" w-full">
      <YouTube
        className="w-full h-full object-cover"
        videoId={videoId}
        opts={opts}
      />
    </div>
  );
};

export default YoutubeVideo;
