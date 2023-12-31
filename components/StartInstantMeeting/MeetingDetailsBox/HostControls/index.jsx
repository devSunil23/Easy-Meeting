import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIconWithTitle from "../../../common/CloseIconWithTitle";
import TextWithSwith from "../TextWithSwith";

const HostControls = () => {
  return (
    <Box>
      <CloseIconWithTitle title={"Host controls"} />
      <Box p={1}>
        <Typography color={"text.secondary"}>
          Use these host settings to keep control of your meeting. Only hosts
          have access to these controls.
        </Typography>
        <Box sx={{ maxHeight: "445px", overflowY: "scroll" }}>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography variant="h6" fontSize={14} color={"text.secondary"}>
            MEETING MODERATION
          </Typography>
          <Divider sx={{ margin: "10px 0" }} />
          <TextWithSwith
            titleSwitch={"Host management"}
            paraSwitch={
              <>
                Lets you restrict what participants can do in the meeting{" "}
                <Link>Learn more</Link>
              </>
            }
            noBackground={true}
          />
          <Box pl={1} pt={1}>
            <Typography variant="h6" fontSize={12} color={"text.secondary"}>
              LET EVERYONE
            </Typography>
            <TextWithSwith
              titleSwitch={"Share their screen"}
              noBackground={true}
            />
            <TextWithSwith
              titleSwitch={"Send Chat messages"}
              noBackground={true}
            />
            <TextWithSwith titleSwitch={"Send reactions"} noBackground={true} />
            <TextWithSwith
              titleSwitch={"Turn on their microphone"}
              paraSwitch={
                <>
                  Turning this off might remove people using an outdated Meet
                  app or non-Google meeting hardware. They can rejoin when it's
                  turned on again.
                </>
              }
              noBackground={true}
            />
            <TextWithSwith
              titleSwitch={"Turn on their video"}
              paraSwitch={
                <>
                  Turning this off might remove people using an outdated Meet
                  app or non-Google meeting hardware. They can rejoin when it's
                  turned on again.
                </>
              }
              noBackground={true}
            />
          </Box>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography variant="h6" fontSize={14} color={"text.secondary"}>
            MEETING ACCESS
          </Typography>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography color={"text.secondary"} fontSize={13}>
            These settings also apply to future instances of this meeting
          </Typography>
          <TextWithSwith
            titleSwitch={"Host must join before anyone else"}
            noBackground={true}
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Meeting access type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="open"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="open"
                control={<Radio />}
                sx={{ margin: "10px 0" }}
                label={
                  <div>
                    <Typography>Open</Typography>
                    <Typography
                      variant="body2"
                      fontSize={14}
                      color={"text.secondary"}
                    >
                      No one has to ask to join. Anyone can dial in.
                    </Typography>
                  </div>
                }
              />
              <FormControlLabel
                value="trusted"
                control={<Radio />}
                sx={{ margin: "10px 0" }}
                label={
                  <div>
                    <Typography>Trusted</Typography>
                    <Typography
                      variant="body2"
                      fontSize={14}
                      color={"text.secondary"}
                    >
                      People can join without asking if they’re invited using
                      their Google Account. Everyone else must ask to join.
                      Anyone can dial in by phone.
                    </Typography>
                  </div>
                }
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default HostControls;
