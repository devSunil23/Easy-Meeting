import { Box, Button, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";
import PrivacyTip from "@mui/icons-material/PrivacyTip";
import { useNavigate, useParams } from "react-router-dom";
const LeftMeetingHomeSection = () => {
  const navigate = useNavigate();
  const { meetingId } = useParams();
  /**Rejoin meeting */
  const rejoinMeeting = () => {
    navigate(`/startinstantmeeting/${meetingId}`);
  };

  /**Return to home screen */
  const returnHomeScreen = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", margin: "30px auto" }}>
      <Typography variant="h4">You left the meeting</Typography>
      <Box sx={{ margin: "20px 0" }}>
        <Button
          variant="outlined"
          onClick={rejoinMeeting}
          sx={{ marginRight: "5px" }}
        >
          Rejoin
        </Button>
        <Button
          variant="contained"
          onClick={returnHomeScreen}
          sx={{ marginLeft: "5px" }}
        >
          Return to home screen
        </Button>
      </Box>
      <Box my={2}>
        <Typography color={"primary"}>Submit feedback</Typography>
      </Box>
      <Card
        sx={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "10px",
          position: "relative",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <PrivacyTip
            style={{ height: "50px", width: "50px" }}
            color="primary"
          />
          <Box textAlign={"left"} marginLeft={"15px"}>
            <Typography fontSize={22} variant="h6">
              Your meeting is safe
            </Typography>
            <Typography fontSize={14} color={"text.secondary"}>
              No one can join a meeting unless invited or admitted by the host
            </Typography>
            <Link>Learn more</Link>
          </Box>
        </Stack>
      </Card>
    </div>
  );
};

export default LeftMeetingHomeSection;
