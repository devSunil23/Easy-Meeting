import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Grid, MenuItem, Modal, Stack } from "@mui/material";
import { useTheme } from "../style/theme";
import { useMenu } from "../hooks/useMenu";
// icons

import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import useModal from "../hooks/useModal";
import Setting from "./Setting";
import { styled, alpha } from "@mui/material/styles";
import ReportSideDrawer from "./ReportSideDrawer";

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

const profilePictureTitle = (
    <>
        <Typography variant="caption" lineHeight="15px" fontWeight={500}>
            Easy Meeting Account
        </Typography>
        <Typography
            variant="caption"
            component="div"
            lineHeight="15px"
            color="#dce1e7">
            First Name
        </Typography>
        <Typography
            variant="caption"
            component="div"
            lineHeight="15px"
            color="#dce1e7">
            username@gmail.com
        </Typography>
    </>
);

const Navbar = ({ children }) => {
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const { toggleTheme, mode } = useTheme();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const {
        anchorEl: anchorElSupport,
        openMenu: openSupportMenu,
        closeMenu: closeSupportMenu,
    } = useMenu();

    const {
        state: settingMenu,
        openModal: openSetting,
        closeModal: closeSetting,
    } = useModal();

    React.useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    // Get hours and minutes from the current time
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return (
        <>
            <ReportSideDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
            <Box
                sx={{
                    //     bgcolor: 'background.default',
                    px: { xs: 0.5, xm: 0 },
                    height: "100dvh",
                    position: "relative",
                }}>
                <AppBar
                    elevation={0}
                    component={Box}
                    position="sticky"
                    sx={{ bgcolor: "background.default", color: "inherit" }}>
                    <Toolbar
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            position: "relative",
                            "&": {
                                minHeight: "64px",
                                px: 1.5,
                            },
                        }}>
                        <Grid container alignItems="center" display="flex">
                            <Grid item xs>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="flex-end"
                                    spacing={0}>
                                    <Box display={{ xs: "none", lg: "flex" }}>
                                        <Typography
                                            variant="body1"
                                            color="text.tertiary"
                                            sx={{
                                                mt: 1.3,
                                            }}>
                                            {`${hours}:${
                                                minutes < 10 ? "0" : ""
                                            }${minutes}`}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            color="text.tertiary"
                                            sx={{ mx: 2, mt: 1.3 }}>
                                            {new Date().toDateString()}
                                        </Typography>

                                        <IconButton onClick={openSupportMenu}>
                                            <Tooltip title={"Support"}>
                                                <HelpOutlineIcon />
                                            </Tooltip>
                                        </IconButton>
                                        <StyledMenu
                                            id="demo-customized-menu"
                                            MenuListProps={{
                                                "aria-labelledby":
                                                    "demo-customized-button",
                                            }}
                                            anchorEl={anchorElSupport}
                                            open={Boolean(anchorElSupport)}
                                            onClose={closeSupportMenu}
                                            transformOrigin={{
                                                horizontal: "right",
                                                vertical: "top",
                                            }}
                                            anchorOrigin={{
                                                horizontal: "right",
                                                vertical: "bottom",
                                            }}>
                                            <Box
                                                sx={{
                                                    width: 200,
                                                }}>
                                                <MenuItem>
                                                    <Typography>
                                                        Help
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem sx={{ my: 0.5 }}>
                                                    <Typography>
                                                        Training
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography>
                                                        Terms of Services
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem sx={{ my: 0.5 }}>
                                                    <Typography>
                                                        Privacy Policy
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography>
                                                        Terms Summary
                                                    </Typography>
                                                </MenuItem>
                                            </Box>
                                        </StyledMenu>
                                        <IconButton
                                            sx={{
                                                mx: 1,
                                            }}
                                            onClick={toggleDrawer(true)}>
                                            <Tooltip title={"Report a problem"}>
                                                <ReportOutlinedIcon />
                                            </Tooltip>
                                        </IconButton>
                                        <IconButton
                                            onClick={openSetting}
                                            sx={{
                                                mx: 1,
                                            }}>
                                            <Tooltip title={"Setting"}>
                                                <SettingsIcon />
                                            </Tooltip>
                                        </IconButton>
                                    </Box>
                                    <Modal
                                        open={settingMenu}
                                        onClose={closeSetting}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <>
                                            <Setting
                                                mode={mode}
                                                toggleTheme={toggleTheme}
                                            />
                                        </>
                                    </Modal>

                                    <Box>
                                        <IconButton
                                            sx={{
                                                borderWidth: "2px",
                                                borderStyle: "solid",
                                                borderColor: "primary.main",
                                                p: "3px",
                                                ml: 1,
                                            }}>
                                            <Tooltip
                                                title={profilePictureTitle}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                    sx={{
                                                        cursor: "pointer",

                                                        width: 25,
                                                        height: 25,
                                                        // borderRadius: '8px',
                                                    }}
                                                />
                                            </Tooltip>
                                        </IconButton>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Box
                    component="main"
                    sx={{
                        px: 2,

                        mt: 1,
                        height: { xs: "calc(100dvh - 90px)" },
                        // overflow: 'hidden',
                    }}>
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default Navbar;
