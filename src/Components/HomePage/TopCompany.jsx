import React from 'react';
import { Typography, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopCompany = () => {
    const navigate = useNavigate();

    const jobListings = [
        'Company 1',
        'Company 2',
        'Company 3',
        'Company 4',
        'Company 5',
        'Company 6',
        'Company 7',
        'Company 8',
    ];

    const handleSearchMoreCompanies = () => {
        navigate('/company');
    };

    return (
        <div style={{ marginTop: '10%' }}>
            <Typography variant="h3" align="center" gutterBottom style={{ color: '#ffffff' }}>
                Top Companies
            </Typography>
            <Divider variant="middle" style={{ width: '90%', marginBottom: '20px', backgroundColor: '#ffffff', margin: '0 auto' }} />
            <Card style={{ width: '90%', margin: '0 auto', backgroundColor: '#161616', color: '#ffffff' }}>
                <CardContent>
                    <Grid container spacing={2}>
                        {jobListings.map((job, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Card style={{ backgroundColor: '#2e2e2e', color: '#ffffff' }}>
                                    <CardContent>
                                        <Typography variant="h6" style={{ color: '#ffffff' }}>{job}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#636363',
                                '&:hover': {
                                    backgroundColor: '#2e2e2e',
                                },
                            }}
                            onClick={handleSearchMoreCompanies}
                        >
                            Search More Companies
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TopCompany;
