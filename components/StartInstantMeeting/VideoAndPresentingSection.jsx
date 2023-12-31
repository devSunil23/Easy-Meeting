import React from "react";
import styles from "../../style/startInstantMeeting.module.css";
import MeetingReadyDialogBox from "./MeetingReadyDialogBox";
import MeetingDetailsBox from "./MeetingDetailsBox";
import { useSelector } from "react-redux";
import MediaRecorder from "../MediaRecorder";
const VideoAndPresentingSection = () => {
  const { meetingActivyAction } = useSelector(
    (state) => state.reducerMeetingType
  );

  return (
    <div className={styles.videoAndPresentingSectionDiv}>
      {/* VideoAndPresentingSection */}
      <MediaRecorder />
      <MeetingReadyDialogBox />
      {meetingActivyAction && <MeetingDetailsBox />}
    </div>
  );
};

export default VideoAndPresentingSection;
