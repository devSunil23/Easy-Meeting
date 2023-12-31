import PeopleIcon from "@mui/icons-material/People";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import { Box } from "@mui/material";
import React from "react";
import IconButtonWithToolTip from "../common/IconButtonWithToolTip";
import { useDispatch, useSelector } from "react-redux";
import { meetingActivity } from "../../store/action";
const ChatAndOtherActivitySection = () => {
  const dispatch = useDispatch();
  const { meetingActivyAction } = useSelector(
    (state) => state.reducerMeetingType
  );
  const btnOnclickHandller = (action) => {
    dispatch(meetingActivity(action));
  };

  return (
    <div>
      <Box>
        <IconButtonWithToolTip
          btnIccon={
            <InfoOutlinedIcon
              onClick={() => btnOnclickHandller("meetingDetails")}
              color={meetingActivyAction === "meetingDetails" ? "primary" : ""}
            />
          }
          tootTip={"Meeting details"}
        />
        <IconButtonWithToolTip
          btnIccon={
            <PeopleIcon
              color={meetingActivyAction === "peopleBox" ? "primary" : ""}
              onClick={() => btnOnclickHandller("peopleBox")}
            />
          }
          tootTip={"Show everyone"}
        />
        <IconButtonWithToolTip
          btnIccon={
            <InsertCommentOutlinedIcon
              color={meetingActivyAction === "chatbox" ? "primary" : ""}
              onClick={() => btnOnclickHandller("chatbox")}
            />
          }
          tootTip={"Chat with everyone"}
        />
        <IconButtonWithToolTip
          btnIccon={
            <CategoryOutlinedIcon
              color={meetingActivyAction === "activity" ? "primary" : ""}
              onClick={() => btnOnclickHandller("activity")}
            />
          }
          tootTip={"Activiites"}
        />
        <IconButtonWithToolTip
          btnIccon={
            <WorkOutlinedIcon
              color={meetingActivyAction === "hostcontrols" ? "primary" : ""}
              onClick={() => btnOnclickHandller("hostcontrols")}
            />
          }
          tootTip={"Host controls"}
        />
      </Box>
    </div>
  );
};

export default ChatAndOtherActivitySection;
