import React, { useState } from "react";
import Webcam from "react-webcam";
import MicNoneOutlined from "@mui/icons-material/MicNoneOutlined";
import VideocamOutlined from "@mui/icons-material/VideocamOutlined";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import MicOffIcon from "@mui/icons-material/MicOff";
import { Box, Typography } from "@mui/material";
import IconButtonWithToolTip from "../common/IconButtonWithToolTip";
import styles from "../../style/startInstantMeeting.module.css";
import OffCameraComponent from "./OffCameraComponent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MoreAction from "../StartInstantMeeting/MoreAction";
import MicorophoneVIdeoOtherOption from "./MicorophoneVIdeoOtherOption";
const videoConstraints = {
  width: 800,
  height: 420,
};
const VideoComponent = () => {
  const [mediaOn, setMediaOn] = useState({
    microPhone: true,
    cameraOn: true,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const { cameraOn, microPhone } = mediaOn;
  const mediaOnclickHandller = (actionType) => {
    if (actionType === "microphone") {
      setMediaOn({ ...mediaOn, microPhone: !microPhone });
    } else {
      setMediaOn({ ...mediaOn, cameraOn: !cameraOn });
    }
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.joinVideoContainer}>
      <MoreAction
        open={open}
        id={id}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
      {cameraOn ? (
        <Webcam
          style={{
            borderRadius: "8px",
            width: "100%", // Set the width to 100% for responsiveness
            height: "auto", // Allow the height to adjust proportionally
          }}
          videoConstraints={videoConstraints}
        />
      ) : (
        <OffCameraComponent />
      )}

      <Box>
        <Box
          style={{
            position: "absolute",
            bottom: 50,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButtonWithToolTip
            btnIccon={microPhone ? <MicNoneOutlined /> : <MicOffIcon />}
            tootTip={microPhone ? "Turn off microphone" : "Turn on microphone"}
            className={
              microPhone ? styles.callToActionButtonStyle : styles.callEndButton
            }
            onClick={() => {
              mediaOnclickHandller("microphone");
            }}
          />
          <IconButtonWithToolTip
            btnIccon={
              cameraOn ? <VideocamOutlined /> : <VideocamOffOutlinedIcon />
            }
            tootTip={cameraOn ? "Turn off camera" : "Turn on camera"}
            className={
              cameraOn ? styles.callToActionButtonStyle : styles.callEndButton
            }
            onClick={() => {
              mediaOnclickHandller("camera");
            }}
            id={id}
          />
        </Box>

        <Typography
          style={{
            position: "absolute",
            left: 15,
            top: 20,
          }}
        >
          Sunil Kumar bais
        </Typography>
        <Box
          style={{
            position: "absolute",
            right: 5,
            top: 8,
          }}
        >
          <IconButtonWithToolTip
            btnIccon={
              <MoreVertIcon /*aria-describedby={id} onClick={handleMoreClick}*/
              />
            }
            tootTip={"More options"}
            className={styles.callToActionButtonStyle}
            onClick={handleMoreClick}
          />
        </Box>
        <Box
          style={{
            position: "absolute",
            right: 5,
            bottom: 50,
          }}
        >
          <IconButtonWithToolTip
            btnIccon={
              <AutoAwesomeIcon /*aria-describedby={id} onClick={handleMoreClick}*/
              />
            }
            tootTip={"More options"}
            className={styles.callToActionButtonStyle}
          />
        </Box>
      </Box>
      <MicorophoneVIdeoOtherOption />
    </div>
  );
};

export default VideoComponent;
