import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Container,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import FilteredJobs from './FilteredJobs';
import jobsData from '../../demoData/jobsdata.json'
import axios from 'axios';

const JobList = () => {
    const [experienceFilter, setExperienceFilter] = useState('');
    const [workModeFilter, setWorkModeFilter] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [jobsDataApi, setJobsDataApi] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:5000/api-graph', {
            query: `
                {
                    jobs {
                        _id
                        name
                        description
                        salary
                        location
                    }
                }
            `,
        })
        .then(response => setJobsDataApi(response.data.data.jobs))
        .catch(error => console.error('Error fetching data:', error));
    }, []); 
    console.log(jobsDataApi)
    const filteredJobs = jobsData
        .filter(
            (job) =>
                job.experienceRequired.includes(experienceFilter) &&
                (workModeFilter === '' || job.workMode === workModeFilter) &&
                (jobTypeFilter === '' || job.jobType === jobTypeFilter)
        );

    return (
        <Container>
            <Box my={4}>
                <Grid container spacing={2}>
<<<<<<< Updated upstream
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth style={{ background: "#2b2b2b", }}>
                            <InputLabel id="experience-filter-label" style={{ color: "#ffffff" }}>
                                Experience Required
                            </InputLabel>
                            <Select
                                labelId="experience-filter-label"
                                id="experience-filter"
                                value={experienceFilter}
                                label="Experience Required"
                                onChange={(e) => setExperienceFilter(e.target.value)}
                                InputLabelProps={{ style: { color: 'white' } }}
                                style={{ color: "#ffffff" }}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            color: "#ffffff",
                                            backgroundColor: '#2b2b2b',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="">Any</MenuItem>
                                <MenuItem value="0+">Fresher</MenuItem>
                                <MenuItem value="1+">1+ years</MenuItem>
                                <MenuItem value="2+">2+ years</MenuItem>
                                <MenuItem value="3+">3+ years</MenuItem>
                                <MenuItem value="4+">4+ years</MenuItem>
                                <MenuItem value="5+">5+ years</MenuItem>
                                <MenuItem value="7+">7+ years</MenuItem>
                                <MenuItem value="10+">10+ years</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth style={{ background: "#2b2b2b", }}>
                            <InputLabel id="work-mode-filter-label" style={{ color: "#ffffff" }}>
                                Work Mode
                            </InputLabel>
                            <Select
                                labelId="work-mode-filter-label"
                                id="work-mode-filter"
                                value={workModeFilter}
                                label="Work Mode"
                                onChange={(e) => setWorkModeFilter(e.target.value)}
                                InputLabelProps={{ style: { color: 'white' } }}
                                style={{ color: "#ffffff" }}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            color: "#ffffff",
                                            backgroundColor: '#2b2b2b',
                                        },
                                    },
                                }}                            >
                                <MenuItem value="">Any</MenuItem>
                                <MenuItem value="On-site">On-site</MenuItem>
                                <MenuItem value="Remote">Remote</MenuItem>
                                <MenuItem value="Hybrid">Hybrid</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth style={{ background: "#2b2b2b", }}>
                            <InputLabel id="job-type-filter-label" style={{ color: "#ffffff" }}>
                                Job Type
                            </InputLabel>
                            <Select
                                labelId="job-type-filter-label"
                                id="job-type-filter"
                                value={jobTypeFilter}
                                label="Job Type"
                                onChange={(e) => setJobTypeFilter(e.target.value)}
                                InputLabelProps={{ style: { color: 'white' } }}
                                style={{ color: "#ffffff" }}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            color: "#ffffff",
                                            backgroundColor: '#2b2b2b',
                                        },
                                    },
                                }}                            >
                                <MenuItem value="">Any</MenuItem>
                                <MenuItem value="Full-time">Full-time</MenuItem>
                                <MenuItem value="Part-time">Part-time</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
=======
                    {[
                        { label: 'Experience Required', state: experienceFilter, setState: setExperienceFilter, options: ["", "Fresher", "1+", "2+", "3+", "4+", "5+", "7+", "10+"] },
                        { label: 'Work Mode', state: workModeFilter, setState: setWorkModeFilter, options: ["", "On-site", "Remote", "Hybrid"] },
                        { label: 'Job Type', state: jobTypeFilter, setState: setJobTypeFilter, options: ["", "Full-time", "Part-time"] },
                    ].map((filter, index) => (
                        <Grid key={index} item xs={12} sm={4}>
                            <FormControl fullWidth style={{ background: "#2b2b2b" }}>
                                <InputLabel id={`${filter.label.toLowerCase().replace(" ", "-")}-filter-label`} style={{ color: "#ffffff" }}>
                                    {filter.label}
                                </InputLabel>
                                <Select
                                    labelId={`${filter.label.toLowerCase().replace(" ", "-")}-filter-label`}
                                    id={`${filter.label.toLowerCase().replace(" ", "-")}-filter`}
                                    value={filter.state}
                                    label={filter.label}
                                    onChange={(e) => filter.setState(e.target.value)}
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    style={{ color: "#ffffff" }}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                color: "#ffffff",
                                                backgroundColor: '#2b2b2b',
                                            },
                                        },
                                    }}
                                >
                                    {filter.options.map((option, index) => (
                                        <MenuItem key={index} value={option}>{option || 'Any'}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
>>>>>>> Stashed changes
                </Grid>
            </Box>
            <FilteredJobs filteredJobs={filteredJobs} />
        </Container>
    );
};

export default JobList;
