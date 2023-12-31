import { Divider, IconButton, Popover, Stack, Typography } from "@mui/material";
import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
const SpeakerPopoverAction = ({ id, open, anchorEl, handleClose }) => {
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
            <Stack direction={"column"} alignItems={"self-start"}>
              <Typography>Speaker/Headphone (Realtek (R) Audio)</Typography>
              <Typography fontSize={12} color={"text.secondary"}>
                System default
              </Typography>
            </Stack>
          </IconButton>
          <IconButton sx={{ borderRadius: "5px" }}>
            <Typography>Speaker/Headphone (Realtek (R) Audio)</Typography>
          </IconButton>
          <Divider />
          <IconButton sx={{ borderRadius: "5px" }}>
            <VolumeUpIcon />
            <Typography ml={1}>Test Speakers</Typography>
          </IconButton>
        </Stack>
      </Popover>
    </>
  );
};

export default SpeakerPopoverAction;
