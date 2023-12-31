import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import CloseIconWithTitle from "../../../common/CloseIconWithTitle";
import ActivityWithIcon from "./ActivityWithIcon";
const ActivityBox = () => {
    return (
        <Box>
            <CloseIconWithTitle title={"Activities"} />
            <Card>
                <Box p={1}>
                    <Typography fontSize={16}>Features adds-on</Typography>
                    <Typography fontSize={14} color={"text.secondary"}>
                        Install third-party add-ons to do more with Meetings
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                        margin: "10px 0",
                    }}>
                    <Button color="primary">Show More</Button>
                </Box>
            </Card>
            <Box p={1} sx={{ margin: "10px 0" }}>
                <ActivityWithIcon />
            </Box>
        </Box>
    );
};

export default ActivityBox;
