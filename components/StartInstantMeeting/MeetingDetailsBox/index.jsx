import { Card } from "@mui/material";
import React from "react";
import MeetingDetailsContent from "./MeetingDetailsContent";
import { useSelector } from "react-redux";
import CrewChatBox from "./CrewChatBox";
import PeopleBox from "./PeopleBox";
import ActivityBox from "./ActivityBox.jsx/ActivityBox";
import HostControls from "./HostControls";

const MeetingDetailsBox = () => {
  const { meetingActivyAction } = useSelector(
    (state) => state.reducerMeetingType
  );

  return (
    <div>
      <Card
        style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          padding: "10px",
          height: "100%",
          width: "380px",
        }}
      >
        {meetingActivyAction === "meetingDetails" ? (
          <MeetingDetailsContent />
        ) : meetingActivyAction === "chatbox" ? (
          <CrewChatBox />
        ) : meetingActivyAction === "peopleBox" ? (
          <PeopleBox />
        ) : meetingActivyAction === "activity" ? (
          <ActivityBox />
        ) : meetingActivyAction === "hostcontrols" ? (
          <HostControls />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default MeetingDetailsBox;
