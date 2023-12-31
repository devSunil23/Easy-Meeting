import React from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "./Image";
const ReportSideDrawer = ({ toggleDrawer, open }) => {
    return (
        <>
            <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: "400px" }} p={1}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Typography variant="h6" ml={1}>
                            Send feedback to Easy Meeting
                        </Typography>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                    </Stack>
                    <div>
                        <Image
                            name="slide3.png"
                            sx={{
                                width: "100%",
                                height: "38vh",
                                marginTop: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        />
                    </div>
                    <IconButton
                        sx={{
                            width: "100%",
                            marginTop: "10px",
                            borderRadius: "5px",
                        }}>
                        <EmojiFlagsIcon />
                        <Typography>Report an issue</Typography>
                    </IconButton>
                    <IconButton
                        sx={{
                            width: "100%",
                            marginTop: "10px",
                            borderRadius: "5px",
                        }}>
                        <LightbulbIcon />
                        <Typography>Suggest an idea</Typography>
                    </IconButton>
                </Box>
            </Drawer>
        </>
    );
};

export default ReportSideDrawer;
