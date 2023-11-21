import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import DevNerdLogo from '../../assets/Logo-5.png';

const DesktopNavbar = () => {
  const buttonStyle = {
    textDecoration: 'none',
    position: 'relative',
    '&:hover::after': {
      content: '""',
      position: 'absolute',
      left: '15%',
      bottom: 0,
      width: '70%',
      height: '2px',
      backgroundColor: '#ffffff',
      animation: 'underline 0.3s forwards',
      animationTimingFunction: 'ease-out',
      marginTop: '2px',
    },
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#141414' }}>
      <style>
        {`
          @keyframes underline {
            from {
              width: 0;
              left: 50%;
            }
            to {
              width: 70%;
              left: 15%;
            }
          }
        `}
      </style>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={DevNerdLogo} alt="DevNerd Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Link>
        </Typography>
        <Button component={Link} to="/" color="inherit" sx={buttonStyle}>
          Home
        </Button>
        <Button component={Link} to="/jobs" color="inherit" sx={buttonStyle}>
          Jobs
        </Button>
        <Button component={Link} to="/company" color="inherit" sx={buttonStyle}>
          Company
        </Button>
        <Button component={Link} to="/blog" color="inherit" sx={buttonStyle}>
          Blog
        </Button>
        <Button component={Link} to="/about" color="inherit" sx={buttonStyle}>
          About Us
        </Button>
        <Button component={Link} to="/contact" color="inherit" sx={buttonStyle}>
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavbar;
