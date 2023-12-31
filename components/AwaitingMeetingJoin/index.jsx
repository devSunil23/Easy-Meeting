import { Grid } from "@mui/material";
import React from "react";
import VideoComponent from "../MeetingJoinBySharableId/VideoComponent";
import AwaitingJoin from "./AwaitingJoin";

const AwaitingMeetingJoinComponent = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      p={{ xs: 2, sm: 5, md: 10 }}
      pl={{ xs: 4, sm: 5, md: 10 }}
    >
      <Grid sm={12} xs={12} md={7}>
        <VideoComponent />
      </Grid>
      <Grid sm={12} xs={12} md={5} mt={{ xs: 3, sm: 3 }}>
        <AwaitingJoin />
      </Grid>
    </Grid>
  );
};

export default AwaitingMeetingJoinComponent;
