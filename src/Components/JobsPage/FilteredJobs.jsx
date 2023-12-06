import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';

const FilteredJobs = ({ filteredJobs }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      {filteredJobs.map((job) => (
        <Grid item xs={12} md={6} key={job.id}>
          <Link to={`/job/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                marginBottom: '20px',
                background: theme.palette.mode === 'dark' ? '#333' : theme.palette.background.default,
                color: theme.palette.mode === 'dark' ? '#fff' : 'inherit',
                borderRadius: '8px',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              hoverStyles={{
                background: theme.palette.mode === 'dark' ? '#555' : '#f0f0f0',
                color: theme.palette.mode === 'dark' ? '#fff' : 'inherit',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h6" color="primary">{job.title}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{job.description.substring(0, 100)}...</Typography>
                  <Typography variant="body2">
                    <strong>Company:</strong> {job.company}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Location:</strong> {job.city}, {job.country}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Company Size:</strong> {job.companySize}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Experience Required:</strong> {job.experienceRequired}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Job Type:</strong> {job.jobType}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Work Mode:</strong> {job.workMode}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img src={job.companyLogo} alt={job.company} style={{ width: '100%', borderRadius: '4px' }} />
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilteredJobs;