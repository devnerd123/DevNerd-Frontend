import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MobileNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/jobs', text: 'Jobs' },
    { to: '/company', text: 'Company' },
    { to: '/blog', text: 'Blog' },
    { to: '/about', text: 'About Us' },
    { to: '/contact', text: 'Contact Us' },
  ];

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#141414', zIndex: 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, zIndex: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, zIndex: 2 }}>
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        BackdropProps={{ invisible: true }}
        sx={{
          '& .MuiDrawer-paper': {
            height: 'auto',
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
            zIndex: 2,
          },
        }}
      >
        <List style={{ backgroundColor: '#161616', color: '#ffffff', width: '100%' }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.to}
              component={Link}
              to={link.to}
              onClick={toggleDrawer}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
