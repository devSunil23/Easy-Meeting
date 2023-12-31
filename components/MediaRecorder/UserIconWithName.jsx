import { Avatar } from "@mui/material";
import React from "react";
const UserIconWithName = ({ src, name = "User" }) => {
  return (
    <div>
      <Avatar sx={{ height: "150px", width: "150px" }} src={src} />
    </div>
  );
};

export default UserIconWithName;
