import React from 'react';
import { Typography, Box } from '@mui/material';
import backgroundImage from '../assets/map.png';

const Header = ({ heading, subHeading, subSubHeading, sx1, headerstyle }) => {
  const containerStyles = headerstyle
    ? headerstyle
    : {
        position: 'relative',
        height: '350px',
        overflow: 'hidden',
      };

  return (
    <>
      <Box
        sx={{
          ...containerStyles,
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            filter: 'blur(5px)',
            borderBottom: '10px solid',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h2" sx={sx1}>
            {heading}
          </Typography>
          <Typography variant="body1">{subHeading}</Typography>
          <Typography variant="h2">{subSubHeading}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
