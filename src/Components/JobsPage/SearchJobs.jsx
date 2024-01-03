import React from 'react';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import backgroundImage from '../../assets/map.png';

const SearchJobs = () => {
    const theme = useTheme();

    const handleSearch = () => {
    };

    const [jobTitle, setJobTitle] = React.useState('');
    const [country, setCountry] = React.useState('');

    return (
        <Box
            sx={{
                position: 'relative',
                height: '400px',
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
                <Typography variant="h4">For All Techies Who Want To Change The World</Typography>
                <Box
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        [theme.breakpoints.up('sm')]: {
                            flexDirection: 'row',
                        },
                    }}
                >
                    <TextField
                        label="Job Title"
                        variant="standard"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        color="success"
                        sx={{ mb: 1, mr: { xs: 0, sm: 1 }, width: { xs: '100%', sm: '200px' } }}
                        autoFocus
                    />
                    <TextField
                        label="Country"
                        variant="standard"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        color="success"
                        sx={{ mb: 1, mr: { xs: 0, sm: 1 }, width: { xs: '100%', sm: '200px' } }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        sx={{
                            width: { xs: '100%', sm: 'auto' },
                            backgroundColor: '#636363',
                            '&:hover': {
                                backgroundColor: '#2e2e2e',
                            },
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SearchJobs;
