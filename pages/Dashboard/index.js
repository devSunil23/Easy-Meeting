import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    Menu,
    MenuItem,
    Modal,
    TextField,
    Typography,
} from "@mui/material";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import Image from "../../components/Image";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled, alpha } from "@mui/material/styles";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useModal from "../../hooks/useModal";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

const Index = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /**This function is redirect to start a instant meetng page */
    const redirectToInstantMeetingpage = () => {
        navigate("/startinstantmeeting/jhx-uvy");
    };
    const {
        state: createMeeting,
        openModal: openMeeting,
        closeModal: closeMeeting,
    } = useModal();
    const settings = {
        dots: true,
        infinite: false,
        fade: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handleLaterMeeting = () => {
        openMeeting();
        handleClose();
    };
    const handleCopyClick = () => {
        // Select the text field
        const textField = document.getElementById("outlined-start-adornment");

        // Check if the text field exists
        if (textField) {
            // Select the text in the text field
            textField.select();
            textField.setSelectionRange(0, 99999);

            // Copy the selected text to the clipboard
            document.execCommand("copy");
        }
    };
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                minHeight="100%"
                width="100%">
                <Grid container spacing={2} display="flex" alignItems="center">
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                mx: "auto",
                                maxWidth: { md: 590, xs: 450, sm: 500 },
                                textAlign: { md: "left", xs: "center" },
                            }}>
                            <Typography
                                variant="h3"
                                sx={{ fontSize: "clamp(30px,5vw, 2.75rem)" }}>
                                Premium video meetings. Now free for everyone.
                            </Typography>
                            <Box my={4}>
                                <Typography
                                    sx={{ fontSize: "1.125rem" }}
                                    color="text.secondary">
                                    We re-engineered the service that we built
                                    for secure business meetings, Google Meet,
                                    to make it free and available for all.
                                </Typography>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        sx={{ fontWeight: 600, py: 1 }}
                                        startIcon={<VideocamOutlinedIcon />}
                                        onClick={handleClick}>
                                        New meeting
                                    </Button>
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            "aria-labelledby":
                                                "demo-customized-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}>
                                        <MenuItem onClick={handleLaterMeeting}>
                                            <InsertLinkIcon />
                                            Create a meeting for later
                                        </MenuItem>
                                        <MenuItem
                                            onClick={
                                                redirectToInstantMeetingpage
                                            }>
                                            <AddIcon />
                                            Start an instant meeting
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <CalendarTodayIcon />
                                            Schedule in Google Calender
                                        </MenuItem>
                                    </StyledMenu>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        id="outlined-start-adornment"
                                        placeholder="Enter a code or link"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <KeyboardOutlinedIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        sx={{ fontWeight: 600, py: 1 }}>
                                        Join
                                    </Button>
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 3 }} />
                            <Typography
                                color="text.secondary"
                                variant="caption"
                                sx={{ fontSize: "15px" }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontSize: "15px",
                                        color: "#295C97",

                                        cursor: "pointer",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}>
                                    Learn more
                                </Typography>{" "}
                                About Easy Meeting
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Slider
                                {...settings}
                                style={{
                                    width: "50%",
                                    margin: "0 auto",
                                }}>
                                <div>
                                    <Image name="slide1.png" />
                                    <Box mt={1}>
                                        <Typography
                                            color="text.tertiary"
                                            variant="h6">
                                            Unlock premium Easy features
                                        </Typography>
                                        <Box
                                            sx={{
                                                maxWidth: "350px",
                                                mx: "auto",
                                            }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                fontWeight="bold">
                                                Enjoy longer group video calls,
                                                noise cancellation, and more
                                                with a Easy Meeting premium plan{" "}
                                                <Link href="#">Learn More</Link>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </div>
                                <div>
                                    <Image name="slide2.png" />
                                    <Box mt={1}>
                                        <Typography
                                            color="text.tertiary"
                                            variant="h6">
                                            Get a link you can share
                                        </Typography>
                                        <Box
                                            sx={{
                                                maxWidth: "350px",
                                                mx: "auto",
                                            }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary">
                                                Click New meeting to get a link
                                                you can send to people you want
                                                to meet with.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </div>
                                <div>
                                    <Image name="slide3.png" />
                                    <Box mt={1}>
                                        <Typography
                                            color="text.tertiary"
                                            variant="h6">
                                            Plan ahead
                                        </Typography>
                                        <Box
                                            sx={{
                                                maxWidth: "350px",
                                                mx: "auto",
                                            }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary">
                                                Click New meeting to schedule
                                                meetings in Google Calendar and
                                                send invitations to participants
                                            </Typography>
                                        </Box>
                                    </Box>
                                </div>
                                <div>
                                    <Image name="slide4.png" />
                                    <Box mt={1}>
                                        <Typography
                                            color="text.tertiary"
                                            variant="h6">
                                            Your meeting is safe
                                        </Typography>
                                        <Box
                                            sx={{
                                                maxWidth: "350px",
                                                mx: "auto",
                                            }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary">
                                                No one can join a meeting unless
                                                invited or admitted by the host
                                            </Typography>
                                        </Box>
                                    </Box>
                                </div>
                            </Slider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Modal
                open={createMeeting}
                onClose={closeMeeting}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Card sx={{ maxWidth: "300px" }}>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <Typography variant="body2" fontWeight="bold">
                                Here's the link to your meeting
                            </Typography>
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box my={1} mb={2}>
                            <Typography
                                variant="caption"
                                color="text.secondary">
                                Copy this link and send it to people that you
                                want to meet with. Make sure that you save it so
                                that you can use it later, too.
                            </Typography>
                        </Box>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-start-adornment"
                            placeholder="Copy link"
                            value={`${window.location.origin}/joinbylink/jsh-wxc`}
                            sx={{ pointer: "cursor" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="start"
                                        onClick={handleCopyClick}>
                                        <ContentCopyIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </CardContent>
                </Card>
            </Modal>
        </>
    );
};

export default Index;
