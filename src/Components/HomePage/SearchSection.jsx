import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import backgroundImage from '../../assets/map.png';

import './HomePage.css';

const SearchSection = () => {
  const sectionStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const inputStyle = {
    margin: '8px',
    width: '300px',
  };

  const buttonStyle = {
    margin: '8px',
    width: '150px',
  };

  const handleSearch = () => {

  };

  return (
    <section style={sectionStyle}> 
      <Container style={{...containerStyle, height:'80%'}}>
        <TextField
          style={inputStyle}
          label="Title"
          variant="outlined"
          fullWidth
        />
        <TextField
          style={inputStyle}
          label="Country"
          variant="outlined"
          fullWidth
        />
        <Button
          style={buttonStyle}
          variant="contained"
          color="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Container>
    </section>
  );
};

export default SearchSection;
