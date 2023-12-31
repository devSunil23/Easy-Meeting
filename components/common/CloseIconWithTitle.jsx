import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { meetingActivity } from "../../store/action";
const CloseIconWithTitle = ({ title }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(meetingActivity(null));
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" ml={1}>
          {title}
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Stack>
    </>
  );
};

export default CloseIconWithTitle;
