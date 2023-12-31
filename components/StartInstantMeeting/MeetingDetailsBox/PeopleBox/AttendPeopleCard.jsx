import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import IconButtonWithToolTip from "../../../common/IconButtonWithToolTip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const AttendPeopleCard = ({ you, meetigHost }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={1}
        marginBottom={"15px"}
      >
        <Box>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Avatar sx={{ width: 35, height: 35 }} />
            <Box>
              <Typography fontSize={15}>
                Developer 1 {you ? "(You)" : ""}
              </Typography>
              {meetigHost ? (
                <Typography fontSize={12} color={"text.secondary"}>
                  Meeting host
                </Typography>
              ) : (
                ""
              )}
            </Box>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <MicIcon style={{ fontSize: "20px" }} />
            <IconButtonWithToolTip
              btnIccon={<MoreVertIcon sx={{ marginTop: "-3px" }} />}
              tootTip={"More options"}
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default AttendPeopleCard;
