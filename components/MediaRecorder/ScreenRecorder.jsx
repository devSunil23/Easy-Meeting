import React, { useEffect, useRef } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useDispatch, useSelector } from "react-redux";
import { screenRecordAction } from "../../store/action";
import styles from "../../style/mediaRecorder.module.css";
const ScreenRecorder = ({ meetingActivyAction }) => {
  const { screenRecordOn } = useSelector((state) => state.reducerMeetingType);
  const dispatch = useDispatch();
  const {
    startRecording: startRecord,
    stopRecording: stopRecord,
    previewStream,
    error,
  } = useReactMediaRecorder({
    screen: true,
    onStop: async (blobUrl, blob) => {
      // Screen sharing was canceled
      dispatch(screenRecordAction(false));
    },
  });
  console.log("error", error);
  const videoRef = useRef(null);
  /*eslint-disable*/
  useEffect(() => {
    if (screenRecordOn) {
      startRecord();
    } else {
      stopRecord();
    }
  }, [screenRecordOn]);
  /*eslint-enable*/

  /*eslint-disable*/
  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);
  /*eslint-enable*/

  /*eslint-disable*/
  useEffect(() => {
    if (error) {
      dispatch(screenRecordAction(false));
    }
  }, [error]);
  /*eslint-enable*/
  return (
    <div>
      <video
        className={
          meetingActivyAction
            ? styles.screenRecordVideoResponsive
            : styles.screenRecordVideo
        }
        ref={videoRef}
        controls={false}
        autoPlay
      />
    </div>
  );
};

export default ScreenRecorder;
