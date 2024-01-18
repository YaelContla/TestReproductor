import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Video1 from "../../assets/travel-meets-fashion.png";
import Video2 from "../../assets/team-latam.png";
import Video3 from "../../assets/velocidad-riesgo.png";
import Video4 from "../../assets/experiencia.png";
import axios from "axios";

const VideoSelected = () => {
  const [selectedVideo, setSelectedVideo] = useState("e-fA-gBCkj0");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              maxResults: 5,
              q: "davidguetta",
              type: "video",
              key: "AIzaSyA7QOMJy-0pkZhJaUe4NuA1x6NtNjkkHRQ",
            },
          }
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error("Error al obtener videos de YouTube", error);
      }
    };

    fetchVideos();
  }, []);

  const videoSelected = (video: string) => {
    switch (video) {
      case "video1":
        setSelectedVideo("e-fA-gBCkj0");
        break;
      case "video2":
        setSelectedVideo("tg00YEETFzg");
        break;
      case "video3":
        setSelectedVideo("zsmUOdmm02A");
        break;
      case "video4":
        setSelectedVideo("vLORT0nbPIA");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className={styles.viewContainer}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.sportsContainer}>
        <p className={styles.textClaro}>CLARO SPORTS EN SOCHI 2024</p>
        <div className={styles.containerVideos}>
          <div
            className={styles.videoText}
            onClick={() => {
              videoSelected("video1");
            }}
          >
            <img src={Video1} alt="Video1" />
            <p className={styles.footerText}>TEAM LATAM</p>
          </div>

          <div
            className={styles.videoText}
            onClick={() => {
              videoSelected("video2");
            }}
          >
            <img src={Video2} alt="Video2" />
            <p className={styles.footerText}>TRAVEL MEETS FASHION</p>
          </div>

          <div
            className={styles.videoText}
            onClick={() => {
              videoSelected("video3");
            }}
          >
            <img src={Video3} alt="Video3" />
            <p className={styles.footerText}>VELOCIDAD Y RIESGO</p>
          </div>

          <div
            className={styles.videoText}
            onClick={() => {
              videoSelected("video4");
            }}
          >
            <img src={Video4} alt="Video4" />
            <p className={styles.footerText}>EXPERIENCIA MULTIMEDIA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSelected;
