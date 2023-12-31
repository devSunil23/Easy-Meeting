import { IconButton, Typography } from "@mui/material";
import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const AddPeopleIconBtn = () => {
  return (
    <IconButton
      variant="contained"
      sx={{ borderRadius: "5px" }}
      color="primary"
    >
      <PersonAddAltIcon />
      <Typography ml={1}>Add People</Typography>
    </IconButton>
  );
};

export default AddPeopleIconBtn;
