import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, index, onVideoSelect }) => {
  console.log(video.snippet.thumbnails.medium.url);
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item"
      key={index}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
