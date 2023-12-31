import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import AddPeopleIconBtn from "../common/AddPeopleIconBtn";
const MeetingReadyDialogBox = () => {
  const [dialogOpen, setDialogOpen] = useState(true);
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <div>
      <Card
        style={
          dialogOpen
            ? {
                position: "absolute",
                left: "0px",
                bottom: "5px",
                padding: "15px",
              }
            : { display: "none" }
        }
        sx={{ width: 350 }}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" ml={1}>
              Your meetings ready
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ margin: "5px 0" }}>
          <AddPeopleIconBtn />
          <Typography ml={1} color="text.secondary">
            Or share this meeting link with others you want in the meeting
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="gray"
            margin="10px 5px"
            borderRadius="5px"
          >
            <Typography variant="body" sx={{ fontSize: "14px" }} ml={1}>
              https://meet.google.com/xkw-ffwk-vzz
            </Typography>
            <IconButton>
              <ContentCopyIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" margin="5px" paddingTop={"10px"}>
            <PrivacyTipIcon sx={{ marginTop: "3px", fontSize: "18px" }} />
            <Typography variant="body" ml={1} sx={{ fontSize: "14px" }}>
              People who use this meeting link must get your permission before
              they can join.
            </Typography>
          </Stack>
          <Typography
            variant="body"
            ml={1}
            sx={{ fontSize: "14px" }}
            color="text.secondary"
          >
            Joined as exampleyouemail@gmail.com
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default MeetingReadyDialogBox;
