import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const ActivityWithIcon = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      spacing={2}
      marginBottom={"15px"}
    >
      <Box>
        <Avatar sx={{ width: 35, height: 35 }} />
      </Box>
      <Box>
        <Typography fontSize={16}>White boarding</Typography>
        <Typography fontSize={14} color={"text.secondary"}>
          Collaboratively sketch ideas
        </Typography>
      </Box>
    </Stack>
  );
};

export default ActivityWithIcon;
