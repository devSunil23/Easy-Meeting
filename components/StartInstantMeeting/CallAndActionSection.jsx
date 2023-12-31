import MicNoneOutlined from "@mui/icons-material/MicNoneOutlined";
import VideocamOutlined from "@mui/icons-material/VideocamOutlined";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import BackHandIcon from "@mui/icons-material/BackHand";
import MoodIcon from "@mui/icons-material/Mood";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import styles from "../../style/startInstantMeeting.module.css";
import React, { useState } from "react";
import IconButtonWithToolTip from "../common/IconButtonWithToolTip";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import { useDispatch, useSelector } from "react-redux";
import { screenRecordAction, videoCameraOnAction } from "../../store/action";
import MoreAction from "./MoreAction";
import { useNavigate, useParams } from "react-router-dom";
const CallAndActionSection = () => {
  const { videoCameraOn, screenRecordOn } = useSelector(
    (state) => state.reducerMeetingType
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  // Access the parameters from the URL
  const { meetingId } = useParams();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const dispatch = useDispatch();

  const videoCamerActionHandller = () => {
    dispatch(videoCameraOnAction(!videoCameraOn));
  };

  const screenRepresentHandller = () => {
    dispatch(screenRecordAction(true));
  };

  /**This function for end meeting */
  const endMeetingHandller = () => {
    navigate(`/leftmeeting/${meetingId}`);
  };

  return (
    <div>
      <MoreAction
        open={open}
        id={id}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
      <Box>
        <IconButtonWithToolTip
          btnIccon={<MicNoneOutlined />}
          tootTip={"Turn off microphone"}
          className={styles.callToActionButtonStyle}
        />
        <IconButtonWithToolTip
          btnIccon={
            videoCameraOn ? (
              <VideocamOutlined onClick={videoCamerActionHandller} />
            ) : (
              <VideocamOffOutlinedIcon onClick={videoCamerActionHandller} />
            )
          }
          tootTip={videoCameraOn ? "Turn off camera" : "Turn on camera"}
          className={
            videoCameraOn
              ? styles.callToActionButtonStyle
              : styles.callEndButton
          }
        />
        <IconButtonWithToolTip
          btnIccon={<ClosedCaptionOffOutlinedIcon />}
          tootTip={"Turn on captions"}
          className={styles.callToActionButtonStyle}
        />
        <IconButtonWithToolTip
          btnIccon={<MoodIcon />}
          tootTip={"Send a reaction"}
          className={styles.callToActionButtonStyle}
        />
        <IconButtonWithToolTip
          btnIccon={
            screenRecordOn ? (
              <PresentToAllIcon sx={{ cursor: "not-allowed", color: "gray" }} />
            ) : (
              <PresentToAllIcon onClick={screenRepresentHandller} />
            )
          }
          tootTip={screenRecordOn ? "" : "Present now"}
          className={styles.callToActionButtonStyle}
        />
        <IconButtonWithToolTip
          btnIccon={<BackHandIcon />}
          tootTip={"Raise hand"}
          className={styles.callToActionButtonStyle}
        />
        <IconButtonWithToolTip
          btnIccon={
            <MoreVertIcon aria-describedby={id} onClick={handleMoreClick} />
          }
          tootTip={"More options"}
          className={styles.callToActionButtonStyle}
        />
        <IconButtonWithToolTip
          btnIccon={<CallEndIcon />}
          tootTip={"Leave call"}
          className={styles.callEndButton}
          onClick={endMeetingHandller}
        />
      </Box>
    </div>
  );
};

export default CallAndActionSection;
