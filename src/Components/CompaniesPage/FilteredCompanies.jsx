import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Grid,
  Paper,
} from '@mui/material';

const FilteredCompanies = ({ filteredCompanies }) => {
  return (
    <Grid container spacing={2}>
      {filteredCompanies.map((company) => (
        <Grid item xs={12} md={6} key={company.id}>
          <Link to={`/company/${company.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                marginBottom: '20px',
                background: '#333', // Dark background color
                color: '#fff', // White text color
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              hoverStyles={{
                background: '#555', // Dark hover background color
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h6" color="primary">{company.companyName}</Typography>
                  <Typography variant="body2">
                    <strong>Country:</strong> {company.country}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Company Size:</strong> {company.companySize}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img src={company.companyLogo} alt={company.companyName} style={{ width: '100%', borderRadius: '4px' }} />
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
