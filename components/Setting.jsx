import React from 'react';
import {
    Card,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Switch,
} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import useMedia from '../hooks/useMedia';

const Setting = ({ mode, toggleTheme }) => {
    const smLayout = useMedia('(min-width: 576px)');
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Card
                // elevation={0}
                sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
                    borderRadius: '8px',
                    maxWidth: '800px',
                    width: '100%',
                    //     bgcolor: 'background.paper',
                    m: 2,
                    my: 8,
                    maxHeight: '100vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
                <Box
                    p={2}
                    sx={{
                        borderRight: { xs: 0, sm: '1px solid #424242' },
                        borderColor: 'divider',
                        width: 242,
                    }}
                >
                    <Typography variant='h6'>Settings</Typography>
                </Box>
                <Box
                    sx={{
                        // bgcolor: 'background.paper',
                        display: { sm: 'flex', xs: 'block' },
                    }}
                >
                    <Tabs
                        orientation={smLayout ? 'vertical' : 'horizontal'}
                        variant='scrollable'
                        value={value}
                        allowScrollButtonsMobile
                        onChange={handleChange}
                        aria-label='Vertical tabs example'
                        sx={{
                            borderRight: { xs: 0, sm: '1px solid #424242' },
                            borderColor: 'grey',
                            minWidth: 242,
                            textAlign: 'left',
                        }}
                    >
                        <Tab
                            iconPosition='start'
                            icon={<SpeakerOutlinedIcon fontSize='small' />}
                            label='Audio'
                            sx={{ py: 0 }}
                            {...a11yProps(0)}
                        />
                        <Tab
                            iconPosition='start'
                            icon={<VideocamOutlinedIcon fontSize='small' />}
                            label='Video'
                            sx={{ py: 0 }}
                            {...a11yProps(1)}
                        />
                        <Tab
                            iconPosition='start'
                            icon={<SettingsOutlinedIcon fontSize='small' />}
                            label='General'
                            sx={{ py: 0 }}
                            {...a11yProps(2)}
                        />
                        <Tab
                            iconPosition='start'
                            icon={<ColorLensOutlinedIcon fontSize='small' />}
                            label='Theme'
                            sx={{ py: 0 }}
                            {...a11yProps(3)}
                        />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Box>
                            <Box sx={{ minWidth: { xs: 200, sm: 300 } }}>
                                <Typography sx={{ mb: 1 }}>
                                    Microphone
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        size='small'
                                        labelId='demo-simple-select-label'
                                        id='demo-simple-select'
                                        value={'MicroPhone1'}
                                        placeholder='microPhone'
                                        // onChange={handleChange}
                                        renderValue={(selected) => (
                                            <Box
                                                display='flex'
                                                alignItems='center'
                                            >
                                                <MicNoneOutlinedIcon
                                                    sx={{ mr: 1 }}
                                                />
                                                {selected}
                                            </Box>
                                        )}
                                    >
                                        <MenuItem value='MicroPhone1'>
                                            MicroPhone1{' '}
                                        </MenuItem>
                                        <MenuItem value='MicroPhone2'>
                                            MicroPhone2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: { xs: 200, sm: 300 }, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>Speaker</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        size='small'
                                        labelId='demo-simple-select-label'
                                        id='demo-simple-select'
                                        value={'speaker1'}
                                        placeholder='microPhone'
                                        // onChange={handleChange}
                                        renderValue={(selected) => (
                                            <Box
                                                display='flex'
                                                alignItems='center'
                                            >
                                                <VolumeUpOutlinedIcon
                                                    sx={{ mr: 1 }}
                                                />
                                                {selected}
                                            </Box>
                                        )}
                                    >
                                        <MenuItem value='speaker1'>
                                            speaker1
                                        </MenuItem>
                                        <MenuItem value='speaker2'>
                                            speaker2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box sx={{ minWidth: { xs: 200, sm: 300 } }}>
                            <Typography sx={{ mb: 1 }}>Camera</Typography>
                            <FormControl fullWidth>
                                <Select
                                    size='small'
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    value={'Webcam'}
                                    placeholder='microPhone'
                                    renderValue={(selected) => (
                                        <Box display='flex' alignItems='center'>
                                            <VideocamOutlinedIcon
                                                sx={{ mr: 1 }}
                                            />
                                            {selected}
                                        </Box>
                                    )}
                                    // onChange={handleChange}
                                >
                                    <MenuItem value='Webcam'>Webcam </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Box>
                            <Box display='flex' alignItems='center'>
                                <Box>
                                    <Typography fontWeight='bold'>
                                        Send additional diagnostic info to
                                        Google
                                    </Typography>
                                    <Typography
                                        color='text.secondary'
                                        variant='body1'
                                    >
                                        Google uses these system logs to make
                                        Meet better for everyone
                                    </Typography>
                                </Box>
                                <Switch />
                            </Box>
                            <Box display='flex' alignItems='center' mt={4}>
                                <Box>
                                    <Typography fontWeight='bold'>
                                        Send additional diagnostic info to
                                        Google
                                    </Typography>
                                    <Typography
                                        color='text.secondary'
                                        variant='body1'
                                    >
                                        Google uses these system logs to make
                                        Meet better for everyone
                                    </Typography>
                                </Box>
                                <Switch />
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography
                            variant='body2'
                            onClick={toggleTheme}
                            sx={{ cursor: 'pointer' }}
                        >
                            <IconButton
                                disableFocusRipple
                                disableRipple
                                disableTouchRipple
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: 1,
                                    p: 2,
                                }}
                            >
                                {mode === 'dark' ? (
                                    <LightModeIcon
                                        sx={{
                                            fontSize: '17px',
                                        }}
                                    />
                                ) : (
                                    <DarkModeIcon />
                                )}
                            </IconButton>
                            Appearance
                        </Typography>
                    </TabPanel>
                </Box>
            </Card>
        </>
    );
};

export default Setting;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
