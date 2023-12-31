import React from "react";
import styles from "../../style/joinByLink.module.css";
import {
    Box,
    Button,
    IconButton,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
const JoinComponent = () => {
    return (
        <div className={styles.joinCotainer}>
            <Typography variant="h4">Ready to join?</Typography>
            <br />
            <Typography variant="body" color={"text.secondary"}>
                No one else is here
            </Typography>
            <Box pt={2}>
                <Link href="/startinstantmeeting/ssdfsdf">
                    <Button
                        variant="contained"
                        sx={{ marginRight: "20px", padding: "9px 18px" }}
                        color="primary">
                        Join now
                    </Button>
                </Link>
                <IconButton
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: "5px", border: "1px solid grey" }}>
                    <PresentToAllIcon />
                    <Typography ml={1}>Present</Typography>
                </IconButton>
            </Box>
            <Box mt={6} sx={{ textAlign: "center" }}>
                <Typography mb={1} color={"text.secondary"}>
                    Other joining options
                </Typography>
                <Link>
                    <Stack direction={"row"} textAlign={"center"}>
                        <PhonelinkIcon />{" "}
                        <Typography ml={1}>Use Companion mode</Typography>{" "}
                    </Stack>
                </Link>
            </Box>
        </div>
    );
};

export default JoinComponent;
