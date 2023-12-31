import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const IconWithName = ({ name, src }) => {
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Avatar src={src} sx={{ height: "35px", width: "35px" }} />
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default IconWithName;
