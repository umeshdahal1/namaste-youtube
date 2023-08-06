import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 shadow-lg  overflow-hidden mt-10 relative">
      <img
        className=" rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className=" w-50 h-50">
        <li className=" font-bold py-2 overflow-hidden container">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
