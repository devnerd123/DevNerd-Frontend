import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import backgroundImage from '../assets/map.png';

const defaultTitles = ['Frontend Developer', 'Software Developer', 'Full Stack Engineer', 'UX/UI Designer'];

const SearchSection = () => {
    const theme = useTheme();

    const handleSearch = () => {
        // Implement your search logic here
    };

    const [jobTitle, setJobTitle] = useState('');
    const [country, setCountry] = useState('');
    const [showDefaultTitles, setShowDefaultTitles] = useState(true);
    const [defaultTitleIndex, setDefaultTitleIndex] = useState(0);
    const [typedTitle, setTypedTitle] = useState('');

    const handleJobTitleChange = (e) => {
        const value = e.target.value;
        setJobTitle(value);
        setShowDefaultTitles(value === ''); // Show default titles only when jobTitle is empty
    };

    const textFieldRef = useRef(null);

    const handleTextFieldFocus = () => {
        // Reset the currentIndex when the TextField is refocused
        setDefaultTitleIndex(0);
        setTypedTitle('');
    };

    useEffect(() => {
        let interval;

        if (showDefaultTitles) {
            let currentIndex = 0;
            const titleToType = defaultTitles[defaultTitleIndex];

            interval = setInterval(() => {
                setTypedTitle((prevTitle) => {
                    const currentChar = titleToType[currentIndex];

                    if (currentChar) {
                        currentIndex++;
                        return prevTitle + currentChar;
                    }

                    clearInterval(interval);
                    setTimeout(() => {
                        setTypedTitle('');
                        setDefaultTitleIndex((prevIndex) => (prevIndex + 1) % defaultTitles.length);
                    }, 1000);
                    return prevTitle;
                });
            }, 100);
        }

        return () => clearInterval(interval);
    }, [showDefaultTitles, defaultTitleIndex]);

    return (
        <Box
            sx={{
                position: 'relative',
                height: '500px',
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
                        placeholder={typedTitle}
                        onChange={handleJobTitleChange}
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        color="success"
                        autoFocus
                        sx={{ mb: 1, mr: { xs: 0, sm: 1 }, width: { xs: '100%', sm: '200px' } }}
                        ref={textFieldRef}
                        onFocus={handleTextFieldFocus}
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

export default SearchSection;
