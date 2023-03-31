import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./Components/Footer/VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.play();
      setPlay(false)
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="videoPlayer"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
      ></video>
      {/* Side Bar*/}
      <VideoFooter />
    </div>
  );
}

export default Video;