import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import StartInstantMeeting from "./pages/StartInstantMeeting";
import "./App.css";
import MeetingJoinBySharableId from "./pages/MeetingJoinBySharableId";
import AwaitingMeetingJoin from "./pages/AwaitingMeetingJoin";
import LeftMeeting from "./pages/LeftMeeting";
const App = () => {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/startinstantmeeting/:meetingId"
            element={<StartInstantMeeting />}
          />
          <Route
            path="/joinbylink/:meetingId"
            element={<MeetingJoinBySharableId />}
          />
          <Route path="/leftmeeting/:meetingId" element={<LeftMeeting />} />
          <Route
            path="/awaitingmeetingjoin/:meetingId"
            element={<AwaitingMeetingJoin />}
          />
        </Routes>
      </Header>
    </>
  );
};

export default App;
