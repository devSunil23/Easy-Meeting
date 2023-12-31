import React from "react";
import CloseIconWithTitle from "../../common/CloseIconWithTitle";
import { Box } from "@mui/material";
import TextWithSwith from "./TextWithSwith";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import SendMessage from "./SendMessage";
import styles from "../../../style/dialogBoxCard.module.css";
const CrewChatBox = () => {
  return (
    <Box>
      <CloseIconWithTitle title={"In-call messages"} />
      <TextWithSwith titleSwitch={"Let everyone send messages"} />
      <Stack spacing={1} mt={2}>
        <SnackbarContent
          sx={{ textAlign: "center", fontSize: "14px" }}
          message="Messages can only be seen by people in the call and are deleted when the call ends"
        />
      </Stack>
      <div className={styles.sendMessageContainer}>
        <SendMessage />
      </div>
    </Box>
  );
};

export default CrewChatBox;
