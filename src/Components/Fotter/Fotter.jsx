import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="primary" className={classes.appBar} style={{ backgroundColor: '#141414' }}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="body1" color="inherit">
            &copy; 2023 DevNerd
          </Typography>
        </div>
        <div>
          <Link href="/about" color="inherit" style={{ marginRight: 20 }}>
            About Us
          </Link>
          <Link href="/blog" color="inherit" style={{ marginRight: 20 }}>
            Blog
          </Link>
          <Link href="/contact" color="inherit">
            Contact Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
