import { useState } from 'react';
import MuiMenu from '@mui/material/Menu';

function useMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    function openMenu(e) {
        setAnchorEl(e.currentTarget);
    }

    function closeMenu() {
        setAnchorEl(null);
    }

    return { anchorEl, openMenu, closeMenu };
}

function Menu(props) {
    const { children, ...rest } = props;

    return (
        <MuiMenu
            // keepMounted
            // getContentAnchorEl={null}
            // anchorOrigin={{
            //     // vertical: "top",
            //     horizontal: "right",
            // }}
            // transformOrigin={{
            //     // vertical: "top",
            //     horizontal: "right",
            // }}

            {...rest}
        >
            {children}
        </MuiMenu>
    );
}

export { useMenu, Menu };
