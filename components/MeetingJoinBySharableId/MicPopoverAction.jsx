import { Divider, IconButton, Popover, Stack, Typography } from "@mui/material";
import React from "react";
import MicNoneOutlined from "@mui/icons-material/MicNoneOutlined";
const MicPopoverAction = ({ id, open, anchorEl, handleClose }) => {
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
              <Typography>Microphone (Realtek (R) Audio)</Typography>
              <Typography fontSize={12} color={"text.secondary"}>
                System default
              </Typography>
            </Stack>
          </IconButton>
          <IconButton sx={{ borderRadius: "5px" }}>
            <Typography>Stereo Mix (Realtek (R) Audio)</Typography>
          </IconButton>
          <IconButton sx={{ borderRadius: "5px" }}>
            <Typography>Microphone (Realtek (R) Audio)</Typography>
          </IconButton>
          <Divider />
          <IconButton sx={{ borderRadius: "5px" }}>
            <MicNoneOutlined />
            <Typography>Test Mic</Typography>
          </IconButton>
        </Stack>
      </Popover>
    </>
  );
};

export default MicPopoverAction;
