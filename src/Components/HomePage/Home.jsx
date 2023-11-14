import React from 'react';
import SearchSection from './SearchSection';
import { Grid } from '@mui/material';
import TopJobs from './TopJobs';
import TopCompany from './TopCompany';
import './Home.css';

const Home = () => {
  return (
    <Grid>
      <Grid>
        <SearchSection />
      </Grid>
      <div className="top-section">
        <Grid >
          <TopJobs />
        </Grid>
        <Grid >
          <TopCompany />
        </Grid>
      </div>
    </Grid>
  );
};

export default Home;
