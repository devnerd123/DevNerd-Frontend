import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import backgroundImage from '../../assets/map.png';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Open Snackbar
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '300px',
          overflow: 'hidden',
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
            borderBottom: '10px solid'
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
          <Typography variant="h2">Contact Us</Typography>
        </Box>
      </Box>
      <Container component="main" maxWidth="md" style={{ marginTop: '4rem', marginBottom: '4rem', paddingTop: '2rem', paddingBottom: '2rem', boxShadow: '14px 10px 50px 10px rgba(0, 0, 0, 0.5)' }}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', background: '#161616', color: '#ffffff' }}>
        <Typography variant="body1" style={{marginBottom:'10px', textAlign:'center'}}>Feel Free To Ask About Anything</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  required
                  style={{ background: '#2b2b2b', color: '#ffffff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  style={{ background: '#2b2b2b', color: '#ffffff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  style={{ background: '#2b2b2b', color: '#ffffff' }}
                />
              </Grid>
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: '#636363',
                  '&:hover': {
                    backgroundColor: '#2e2e2e',
                  },
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactUs;
