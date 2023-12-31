import React from "react";
import styles from "../../style/startInstantMeeting.module.css";
import MeetingIdAndDate from "./MeetingIdAndDate";
import CallAndActionSection from "./CallAndActionSection";
import { Box } from "@mui/material";
import ChatAndOtherActivitySection from "./ChatAndOtherActivitySection";
const StartMeetingFooterSection = () => {
  return (
    <Box className={styles.startMeetingFooterSection}>
      <MeetingIdAndDate />
      <CallAndActionSection />
      <ChatAndOtherActivitySection />
    </Box>
  );
};

export default StartMeetingFooterSection;
