import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const FilteredCompanies = ({ filteredCompanies }) => {
  console.log(filteredCompanies);

  return (
    <Grid container spacing={2}>
      {filteredCompanies.map((company) => (
        <Grid item xs={12} md={6} key={company._id} style={{ marginBottom: '20px' }}>
          <Link
            to={`/company/${company._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                background: '#333',
                color: '#fff',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
                display: 'flex',
                alignItems: 'center',
                marginTop: '20px'
              }}
              sx={{
                '&:hover': {
                  background: '#555',
                  color: '#fff',
                  boxShadow: '0 12px 15px rgba(0, 0, 0, 1)',
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h6" color="#85abcb">
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="#868e95">
                    {company?.short_des.length > 50
                      ? `${company.short_des.substring(0, 50)}...`
                      : company.short_des}
                    <span style={{ marginLeft: '5px' }}>
                      <Link
                        to={`/company/${company._id}`}
                        style={{
                          textDecoration: 'none',
                          color: '#5e7991',
                        }}
                      >
                        ...see more
                      </Link>
                    </span>
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: '20px', color:"#5e7991"}}>
                    <LocationOnIcon sx={{marginRight:"5px", marginBottom:'-5px', color:"#85abcb"}}/>
                    {company.location.city}, {company.location.country}
                    <span style={{ marginLeft : '10%'}}>
                      <BusinessIcon sx={{marginRight:"5px", marginBottom:'-5px', color:"#85abcb"}}/>
                      {company.company_size}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    src={company.logo || 'https://via.placeholder.com/50'}
                    alt={company.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '100px',
                      borderRadius: '4px',
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilteredCompanies;
