import Box from '@mui/material/Box';
import React from 'react';

const Image = (props) => {
    const { name, cdn, src, sx, ...rest } = props;

    const getSrc = () => {
        if (name) return `${process.env.PUBLIC_URL}/images/${name}`;

        if (cdn) return process.env.REACT_APP_CDN_SERVER + '/images/' + cdn;

        return src;
    };

    return (
        <>
            <Box
                component='img'
                src={getSrc()}
                alt='image'
                sx={{ maxWidth: '100%', ...sx }}
                {...rest}
            />
        </>
    );
};

export default Image;
