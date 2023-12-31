import { Box } from "@mui/material";
import React from "react";
import CloseIconWithTitle from "../../../common/CloseIconWithTitle";
import AddPeopleIconBtn from "../../../common/AddPeopleIconBtn";
import SearchPeople from "./SearchPeople";
import Contributor from "./Contributor";

const PeopleBox = () => {
  return (
    <Box>
      <CloseIconWithTitle title={"People"} />
      <Box sx={{ margin: "5px 0" }}>
        <AddPeopleIconBtn />
        <SearchPeople />
        <Contributor />
      </Box>
    </Box>
  );
};

export default PeopleBox;
