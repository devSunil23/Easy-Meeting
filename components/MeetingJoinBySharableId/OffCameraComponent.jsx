import { Typography } from "@mui/material";
import React from "react";
import styles from "../../style/joinByLink.module.css";
const OffCameraComponent = ({ text = "Camera is off" }) => {
  return (
    <div className={styles.offcameraContainer}>
      <Typography variant="h6" fontSize={22}>
        {text}
      </Typography>
    </div>
  );
};

export default OffCameraComponent;
