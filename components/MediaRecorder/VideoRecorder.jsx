import React from "react";
import Webcam from "react-webcam";
import styles from "../../style/mediaRecorder.module.css";
const VideoRecorder = () => {
  return (
    <>
      <Webcam className={styles.videoWebCam} />
    </>
  );
};

export default VideoRecorder;
