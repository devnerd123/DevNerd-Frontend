import React from 'react';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import DevNerdLogo from '../../assets/Logo-5.png';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Jobs', link: '/jobs' },
    { text: 'Company', link: '/company' },
    { text: 'Blog', link: '/blog' },
    { text: 'About Us', link: '/about' },
    { text: 'Contact Us', link: '/contact' },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: '#141414' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={DevNerdLogo} alt="DevNerd Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Link>
        </Typography>
        <div style={{ display: 'flex' }}>
          {isMobile ? (
            <MobileNavbar menuItems={menuItems} />
          ) : (
            <DesktopNavbar menuItems={menuItems} />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
