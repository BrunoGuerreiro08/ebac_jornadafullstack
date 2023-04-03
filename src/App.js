import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import "./App.css";
import Video from "./Pages/Video";
import db from "./config/Firebase";

function App() {
  
  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight;
  }
  
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "Videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style= {{maxHeight: maxHeight + "px"}}>
      <div className="appVideos">
        {video.map((item) => {
          return(
            <Video
              likes = {item.likes}
              messages = {item.messages}
              shares = {item.shares}
              name = {item.name}
              music = {item.music}
              description = {item.description}
              url = {item.url}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;