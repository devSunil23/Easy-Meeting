import React from "react";
import styles from "../../style/mediaRecorder.module.css";
import UserIconWithName from "./UserIconWithName";
import VideoRecorder from "./VideoRecorder";
import { useSelector } from "react-redux";
import ScreenRecorder from "./ScreenRecorder";
const MediaRecorder = () => {
  const { meetingActivyAction, videoCameraOn, screenRecordOn } = useSelector(
    (state) => state.reducerMeetingType
  );
  return (
    <div
      className={`${styles.userIonWithNameConatiner} ${
        meetingActivyAction ? styles.userIonWithNameConatinerResponsive : ""
      }`}
    >
      {videoCameraOn ? (
        screenRecordOn ? (
          <ScreenRecorder meetingActivyAction={meetingActivyAction} />
        ) : (
          <VideoRecorder />
        )
      ) : (
        <UserIconWithName />
      )}
    </div>
  );
};

export default MediaRecorder;
