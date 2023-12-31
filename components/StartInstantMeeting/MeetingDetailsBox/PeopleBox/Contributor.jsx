import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttendPeopleCard from "./AttendPeopleCard";
const Contributor = () => {
  return (
    <Box sx={{ margin: "10px 0" }}>
      <Typography fontSize={14} ml={1} color={"text.secondary"}>
        IN MEETING
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Contributors (5)</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ overflowY: "auto", maxHeight: "350px" }}>
          <AttendPeopleCard meetigHost={true} />
          <AttendPeopleCard you={true} />
          <AttendPeopleCard />
          <AttendPeopleCard />
          <AttendPeopleCard />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Contributor;
