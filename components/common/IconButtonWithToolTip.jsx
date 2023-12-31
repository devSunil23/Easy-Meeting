import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const IconButtonWithToolTip = ({
  className,
  tootTip,
  onClick,
  btnIccon,
  style,
  id,
}) => {
  return (
    <>
      <IconButton
        aria-describedby={id}
        className={className}
        onClick={onClick}
        style={style}
      >
        <Tooltip title={tootTip}>{btnIccon}</Tooltip>
      </IconButton>
    </>
  );
};

export default IconButtonWithToolTip;
