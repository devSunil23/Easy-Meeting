import { Divider, IconButton, Popover, Stack, Typography } from "@mui/material";
import React from "react";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
const VideoPopoverAction = ({ id, open, anchorEl, handleClose }) => {
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "top",
        }}
      >
        <Stack direction={"column"} alignItems={"self-start"}>
          <IconButton sx={{ borderRadius: "5px" }}>
            <Typography>HP TrueVision HD Camera</Typography>
          </IconButton>
          <Divider />
          <IconButton sx={{ borderRadius: "5px" }}>
            <FormatListNumberedIcon />
            <Typography ml={1}>Make a test recording</Typography>
          </IconButton>
        </Stack>
      </Popover>
    </>
  );
};

export default VideoPopoverAction;
