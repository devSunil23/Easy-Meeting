import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIconWithTitle from "../../common/CloseIconWithTitle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const MeetingDetailsContent = () => {
  return (
    <Box>
      <CloseIconWithTitle title={"Meeting Details"} />
      <Box p={1} sx={{ margin: "8px 0" }}>
        <Typography variant="body">Joining info</Typography>
        <br></br>
        <Typography
          variant="body"
          sx={{ marginTop: "10px" }}
          color={"text.secondary"}
        >
          https://meet.google.com/xkw-ffwk-vzz
        </Typography>
        <IconButton
          variant="contained"
          sx={{ borderRadius: "5px", marginLeft: "-5px", marginTop: "5px" }}
          color="primary"
        >
          <ContentCopyIcon sx={{ fontSize: "20px", marginRight: "5px" }} />
          <Typography variant="body" fontSize={16}>
            Copy joining info
          </Typography>
        </IconButton>
      </Box>
      <Box>
        <Divider />
        <br />
        <Typography mt={1} ml={1} variant="body" color={"text.secondary"}>
          Google calender attachments show up here
        </Typography>
      </Box>
    </Box>
  );
};

export default MeetingDetailsContent;
