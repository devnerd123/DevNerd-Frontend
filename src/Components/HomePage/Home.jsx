import React from 'react'
import SearchSection from './SearchSection'
import { Grid } from '@mui/material'
import TopJobs from './TopJobs'

const Home = () => {
  return (
    <Grid>
      <Grid>
        <SearchSection />
      </Grid>
      <Grid>
        <TopJobs />
      </Grid>
    </Grid>
  )
}

export default Home