import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Header from '../../helpers/Header';

const AboutPage = () => {
  const containerStyle = {
    maxWidth: 'md',
    marginTop: '4rem',
    marginBottom: '4rem',
    paddingTop: '2rem', 
    paddingBottom: '2rem', 
    boxShadow: '14px 10px 50px 10px rgba(0, 0, 0, 0.5)'
  };

  const paperStyle = {
    padding: '2rem',
    backgroundColor: '#161616',
    color: '#ffffff'
  };

  return (
    <>
      <Header heading={"About Us"} />
      <Container style={containerStyle}>
        <Paper style={paperStyle}>
          <Typography variant="body1" paragraph>
            Welcome to DevNerd, your go-to platform for finding and applying to tech jobs! We understand the
            unique needs of tech professionals and strive to connect talented individuals with exciting job
            opportunities in the tech industry.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to simplify the job search process for tech enthusiasts by providing a user-friendly
            platform where they can discover and apply to their favorite jobs effortlessly. Whether you're a
            software developer, data scientist, or IT professional, DevNerd has the right opportunities for you.
          </Typography>
          <Typography variant="body1" paragraph>
            At DevNerd, we believe in the power of technology to transform lives and businesses. We're passionate
            about connecting top talent with innovative companies, fostering growth and success in the tech
            community.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for being a part of the DevNerd community. If you have any questions or feedback, feel free
            to reach out to us. Happy job hunting!
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default AboutPage;
