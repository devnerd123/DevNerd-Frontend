import React from 'react';
import { useMediaQuery } from '@mui/material';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return isMobile ? <MobileNavbar/> : <DesktopNavbar />
};

export default Navbar;
