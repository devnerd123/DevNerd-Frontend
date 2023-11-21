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
    <>
      {filteredJobs.map((job) => (
        <Link to={`/job/${job.id}`} key={job.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', background: theme.palette.background.default }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <img src={job.companyLogo} alt={job.company} style={{ width: '100%' }} />
              </Grid>
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
            </Grid>
          </Paper>
        </Link>
      ))}
    </>
  );
};

export default FilteredJobs;
