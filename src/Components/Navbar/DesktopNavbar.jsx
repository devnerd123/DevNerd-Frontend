import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import DevNerdLogo from '../../assets/Logo-5.png';

const DesktopNavbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#141414' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/">
                        <img src={DevNerdLogo} alt="DevNerd Logo" style={{ height: '40px', marginRight: '10px' }} />
                    </Link>
                </Typography>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
                <Button component={Link} to="/jobs" color="inherit">
                    Jobs
                </Button>
                <Button component={Link} to="/company" color="inherit">
                    Company
                </Button>
                <Button component={Link} to="/blog" color="inherit">
                    Blog
                </Button>
                <Button component={Link} to="/about" color="inherit">
                    About Us
                </Button>
                <Button component={Link} to="/contact" color="inherit">
                    Contact Us
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default DesktopNavbar;
