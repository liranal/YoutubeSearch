import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, index }) => {
  console.log(video.snippet.thumbnails.medium.url);
  return (
    <div className="video-item item" key={index}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
