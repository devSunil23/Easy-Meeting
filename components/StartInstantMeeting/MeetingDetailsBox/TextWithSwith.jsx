import {
  Box,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

const TextWithSwith = ({ titleSwitch, paraSwitch, noBackground }) => {
  return (
    <Box mt={1} mb={1}>
      <Stack
        direction="row"
        backgroundColor={noBackground ? "" : "grey"}
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
        borderRadius={1}
      >
        <Box>
          <Typography pl={noBackground ? 0 : 1}>{titleSwitch}</Typography>
          {paraSwitch && (
            <Typography
              pl={noBackground ? 0 : 1}
              color={"text.secondary"}
              fontSize={14}
            >
              {paraSwitch}
            </Typography>
          )}
        </Box>
        <FormGroup>
          <FormControlLabel control={<Switch />} sx={{ marginRight: "0px" }} />
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default TextWithSwith;
