import React, { useState } from 'react';
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

const jobsData = [
    {
        id: 1,
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fkjnfn kjdsb cbskjdsbj.',
        company: 'ABC Tech',
        companyLogo: 'https://via.placeholder.com/50',
        city: 'City',
        country: 'Japan',
        companySize: 'Medium',
        experienceRequired: '2+',
        jobType: 'Full-time',
        workMode: 'Remote',
    },
    {
        id: 2,
        title: 'Backend Developer',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'XYZ Solutions',
        companyLogo: 'https://via.placeholder.com/50',
        city: 'City',
        country: 'Japan',
        companySize: 'Large',
        experienceRequired: '3+',
        jobType: 'Part-time',
        workMode: 'On-site',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        company: 'Tech Innovators',
        companyLogo: 'https://via.placeholder.com/50',
        city: 'City',
        country: 'Japan',
        companySize: 'Small',
        experienceRequired: '0+',
        jobType: 'Full-time',
        workMode: 'Hybrid',
    },
    {
        id: 4,
        title: 'Data Scientist',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        company: 'Data Wizards',
        companyLogo: 'https://japan-dev.com/cdn/company_logos/zeals.png',
        city: 'City',
        country: 'Japan',
        companySize: 'Medium',
        experienceRequired: '4+',
        jobType: 'Full-time',
        workMode: 'Remote',
    },
    {
        id: 5,
        title: 'DevOps Engineer',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        company: 'Cloud Solutions',
        companyLogo: 'https://via.placeholder.com/50',
        city: 'City',
        country: 'Japan',
        companySize: 'Large',
        experienceRequired: '2+',
        jobType: 'Full-time',
        workMode: 'On-site',
    },
];

const JobList = () => {
    const [experienceFilter, setExperienceFilter] = useState('');
    const [workModeFilter, setWorkModeFilter] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');

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
                                            color:"#ffffff",
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
                                            color:"#ffffff",
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
                                            color:"#ffffff",
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
                </Grid>
            </Box>
            <FilteredJobs filteredJobs={filteredJobs} />
        </Container>
    );
};

export default JobList;