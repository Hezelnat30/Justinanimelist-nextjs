"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleVideoPlayer() {
    setIsOpen((prev) => !prev);
  }

  const options = {
    width: "340",
    height: "200",
  };

  function ButtonWatchTrailer() {
    return (
      <span className="text-color-secondary uppercase font-bold p-2">
        Watch Trailer
      </span>
    );
  }

  function YoutubePlayer() {
    return (
      <YouTube
        videoId={youtubeId}
        opts={options}
        onReady={(event) => event.target.pauseVideo()}
        onError={() => alert("Video Not Found")}
      />
    );
  }

  return (
    <div className="fixed bottom-2 right-2">
      <button
        className="bg-color-primary rounded-full p-1 float-right mb-1"
        onClick={handleVideoPlayer}
      >
        {isOpen ? (
          <IoClose size={26} className="text-color-accent-100" />
        ) : (
          <ButtonWatchTrailer />
        )}
      </button>
      {isOpen && <YoutubePlayer />}
    </div>
  );
}
