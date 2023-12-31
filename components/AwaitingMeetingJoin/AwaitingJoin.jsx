import React from "react";
import styles from "../../style/joinByLink.module.css";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const AwaitingJoin = () => {
  return (
    <div className={styles.joinCotainer}>
      <Typography variant="h4" pb={1}>
        Asking to be let in...
      </Typography>
      <Typography color={"text.secondary"}>
        You'll join the call when someone lets you in
      </Typography>
      <Box sx={{ display: "flex" }} pt={2}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default AwaitingJoin;
