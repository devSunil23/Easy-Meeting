import { Divider, Popover } from "@mui/material";
import React from "react";
import IconWIthTitleDescription from "../common/IconWIthTitleDescription";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import ReportIcon from "@mui/icons-material/Report";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import SettingsIcon from "@mui/icons-material/Settings";
const MoreAction = ({ open, id, anchorEl, handleClose }) => {
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "top",
        }}
      >
        <IconWIthTitleDescription
          descrpition={"Open a jam"}
          icon={<BorderColorIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Whiteboard"}
        />
        <IconWIthTitleDescription
          descrpition={"you are not available to record this video call"}
          icon={
            <RadioButtonCheckedIcon sx={{ height: "25px", width: "25px" }} />
          }
          title={"Recording unavailable"}
        />
        <IconWIthTitleDescription
          icon={<DashboardIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Change Layout"}
        />
        <IconWIthTitleDescription
          icon={<FullscreenIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Full Screen"}
        />
        <IconWIthTitleDescription
          icon={<PictureInPictureIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Open picture-in-picture"}
        />
        <IconWIthTitleDescription
          icon={<AutoAwesomeIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Apply visual effects"}
        />
        <IconWIthTitleDescription
          icon={
            <ClosedCaptionOffOutlinedIcon
              sx={{ height: "25px", width: "25px" }}
            />
          }
          title={"Turn on captions"}
        />
        <Divider />
        <IconWIthTitleDescription
          icon={<SmsFailedIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Report a problem"}
        />
        <IconWIthTitleDescription
          icon={<ReportIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Report abuse"}
        />
        <IconWIthTitleDescription
          icon={<TroubleshootIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Troubleshooting & help"}
        />
        <IconWIthTitleDescription
          icon={<SettingsIcon sx={{ height: "25px", width: "25px" }} />}
          title={"Settings"}
        />
      </Popover>
    </>
  );
};

export default MoreAction;
