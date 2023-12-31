import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchPeople = () => {
  return (
    <TextField
      sx={{ margin: "8px 0" }}
      variant="outlined"
      placeholder="Search for people"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchPeople;
