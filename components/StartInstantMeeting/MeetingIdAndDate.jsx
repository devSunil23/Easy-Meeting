import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../../style/startInstantMeeting.module.css";
const MeetingIdAndDate = () => {
  return (
    <>
      <Box className={styles.meetingIdAndDate} display="flex">
        <Typography color="text.primary">1:44 PM</Typography>
        <Typography color="text.primary" className={styles.dividerIcon}>
          |
        </Typography>
        <Typography color="text.primary">mvy-utwc-xrv</Typography>
      </Box>
    </>
  );
};

export default MeetingIdAndDate;
