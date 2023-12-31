import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LeftMeetingHeaderSection = () => {
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();
  /*eslint-disable*/
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          /**redirect  home page */
          navigate("/");
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);
  /*eslint-enable*/
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={3} m={2}>
      <div style={{ position: "relative", width: "50px", height: "40px" }}>
        <CircularProgress
          variant="determinate"
          value={(seconds / 60) * 100}
          size={50}
          thickness={4}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Typography
          variant="h6"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {formatTime(seconds)}
        </Typography>
      </div>
      <Typography color={"text.secondary"}>Returning to home screen</Typography>
    </Stack>
  );
};

export default LeftMeetingHeaderSection;
