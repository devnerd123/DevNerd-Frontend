import React from 'react';
import { Grid } from '@mui/material';
import TopJobs from './TopJobs';
import TopCompany from './TopCompany';
import './Home.css';
import SearchSection from '../../helpers/SearchSection';

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
