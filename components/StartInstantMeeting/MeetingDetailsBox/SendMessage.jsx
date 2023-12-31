import { Box, IconButton, InputBase, Stack } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
const SendMessage = () => {
  const [message, setMessage] = useState(null);
  const handleSendMessage = () => {
    console.log("message-->", message);
  };
  return (
    <Box>
      <Stack
        direction="row"
        backgroundColor="grey"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
        borderRadius={1}
      >
        <InputBase
          placeholder="Send a message"
          variant="outlined"
          //   fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          sx={{
            outline: "none",
            border: "none",
            padding: "5px",
          }}
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default SendMessage;
