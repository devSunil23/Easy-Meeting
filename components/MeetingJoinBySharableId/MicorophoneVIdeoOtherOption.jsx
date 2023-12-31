import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MicNoneOutlined from "@mui/icons-material/MicNoneOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideocamOutlined from "@mui/icons-material/VideocamOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MicPopoverAction from "./MicPopoverAction";
import SpeakerPopoverAction from "./SpeakerPopoverAction";
import VideoPopoverAction from "./VideoPopoverAction";
import styles from "../../style/joinByLink.module.css";
const MicorophoneVIdeoOtherOption = () => {
  const [anchorEl, setAnchorEl] = useState({
    microphoneAnchor1: null,
    speakerAnchor1: null,
    videoAnchor1: null,
  });
  const { microphoneAnchor1, speakerAnchor1, videoAnchor1 } = anchorEl;

  const handleMoreClick = (event, name) => {
    setAnchorEl({ ...anchorEl, [name]: event.target });
  };

  const handleClose = () => {
    setAnchorEl({
      microphoneAnchor1: null,
      speakerAnchor1: null,
      videoAnchor1: null,
    });
  };

  const openMicrophone = Boolean(microphoneAnchor1);
  const openSpeaker = Boolean(speakerAnchor1);
  const openVideo = Boolean(videoAnchor1);

  const microphoneid = openMicrophone ? "simple-popover-microphone" : undefined;
  const speakerid = openSpeaker ? "simple-popover-speaker" : undefined;
  const videoid = openVideo ? "simple-popover-video" : undefined;

  return (
    <div className={styles.otherOptionMicrophone}>
      <MicPopoverAction
        anchorEl={microphoneAnchor1}
        handleClose={handleClose}
        id={microphoneid}
        open={openMicrophone}
      />
      <SpeakerPopoverAction
        anchorEl={speakerAnchor1}
        handleClose={handleClose}
        id={speakerid}
        open={openSpeaker}
      />
      <VideoPopoverAction
        anchorEl={videoAnchor1}
        handleClose={handleClose}
        id={videoid}
        open={openVideo}
      />
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton
          sx={{ borderRadius: "5px", marginLeft: "5px", marginTop: "5px" }}
          onClick={(event) => handleMoreClick(event, "microphoneAnchor1")}
          aria-describedby={microphoneid}
          name="microphoneAnchor1"
        >
          <MicNoneOutlined />
          <Typography ml={1}>Microphone (...</Typography>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton
          sx={{ borderRadius: "5px", marginLeft: "5px", marginTop: "5px" }}
          onClick={(event) => handleMoreClick(event, "speakerAnchor1")}
          aria-describedby={speakerid}
          name="speakerAnchor1"
        >
          <VolumeUpIcon />
          <Typography ml={1}>Speaker/Headphone...</Typography>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton
          sx={{ borderRadius: "5px", marginLeft: "5px", marginTop: "5px" }}
          onClick={(event) => handleMoreClick(event, "videoAnchor1")}
          aria-describedby={videoid}
          name="videoAnchor1"
        >
          <VideocamOutlined />
          <Typography ml={1}>HP Truevision...</Typography>
          <ArrowDropDownIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default MicorophoneVIdeoOtherOption;
