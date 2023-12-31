import { Box, Stack, Typography } from "@mui/material";
import React from "react";
const IconWIthTitleDescription = ({ icon, title, descrpition }) => {
  return (
    <Stack direction={"row"} p={1} spacing={1} alignItems={"center"}>
      {icon}
      <Box pl={1}>
        <Typography>{title}</Typography>
        {descrpition && (
          <Typography color={"text.secondary"} fontSize={14}>
            {descrpition}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default IconWIthTitleDescription;
