import React, { useState } from 'react';
import {
<<<<<<< Updated upstream
    Box,
    Grid,
    Container,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Input
=======
  Box,
  Grid,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  CircularProgress,
>>>>>>> Stashed changes
} from '@mui/material';
import FilteredCompanies from './FilteredCompanies'; // Create this component similar to FilteredJobs

<<<<<<< Updated upstream
const companiesData = [
    {
        id: 1,
        companyName: 'ABC Tech',
        companyLogo: 'https://via.placeholder.com/50',
        country: 'Japan',
        companySize: 'Medium',
    },
    {
        id: 2,
        companyName: 'XYZ Solutions',
        companyLogo: 'https://via.placeholder.com/50',
        country: 'Japan',
        companySize: 'Large',
    },
    {
        id: 3,
        companyName: 'Tech Innovators',
        companyLogo: 'https://via.placeholder.com/50',
        country: 'Japan',
        companySize: 'Small',
    },
    {
        id: 4,
        companyName: 'Tech Innovators',
        companyLogo: 'https://via.placeholder.com/50',
        country: 'India',
        companySize: 'Small',
    },
    // ... (Add more company data)
];
=======
const GET_COMPANIES = gql`
  query GetAllCompany
  {
    companies{
      _id
      name
      short_des
      logo
      location {
        city
        country
      }
      company_size
    }
  }
`;
>>>>>>> Stashed changes

const CompanyList = () => {
    const [companySizeFilter, setCompanySizeFilter] = useState('');
    const [countryFilter, setCountryFilter] = useState('');
    const [companyNameFilter, setCompanyNameFilter] = useState('');

<<<<<<< Updated upstream
    const filteredCompanies = companiesData
        .filter(
            (company) =>
                (companySizeFilter === '' || company.companySize === companySizeFilter) &&
                (countryFilter === '' || company.country === countryFilter) &&
                (companyNameFilter === '' || company.companyName.toLowerCase().includes(companyNameFilter.toLowerCase()))
        );
=======
  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;
>>>>>>> Stashed changes

    return (
        <Container>
            <Box my={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth style={{ background: "#2b2b2b" }}>
                            <InputLabel id="company-size-filter-label" style={{ color: "#ffffff" }}>
                                Company Size
                            </InputLabel>
                            <Select
                                labelId="company-size-filter-label"
                                id="company-size-filter"
                                value={companySizeFilter}
                                label="Company Size"
                                onChange={(e) => setCompanySizeFilter(e.target.value)}
                                InputLabelProps={{ style: { color: 'white' } }}
                                style={{ color: "#ffffff" }}
                            >
                                <MenuItem value="">Any</MenuItem>
                                <MenuItem value="Small">Small</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Large">Large</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth style={{ background: "#2b2b2b" }}>
                            <InputLabel id="country-filter-label" style={{ color: "#ffffff" }}>
                                Country
                            </InputLabel>
                            <Select
                                labelId="country-filter-label"
                                id="country-filter"
                                value={countryFilter}
                                label="Country"
                                onChange={(e) => setCountryFilter(e.target.value)}
                                InputLabelProps={{ style: { color: 'white' } }}
                                style={{ color: "#ffffff" }}
                            >
                                <MenuItem value="">Any</MenuItem>
                                <MenuItem value="Japan">Japan</MenuItem>
                                <MenuItem value="India">India</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth style={{ background: "#2b2b2b" }}>
                            <InputLabel id="company-name-filter-label" style={{ color: "#ffffff" }}>
                                Company Name
                            </InputLabel>
                            <Input
                                id="company-name-filter"
                                value={companyNameFilter}
                                onChange={(e) => setCompanyNameFilter(e.target.value)}
                                inputProps={{ style: { color: "#ffffff" } }}
                                style={{ color: "#ffffff", paddingBottom:"8px", paddingLeft:"8px" }}
                            />
                        </FormControl>
                    </Grid>
                </Grid> 
            </Box>
            <FilteredCompanies filteredCompanies={filteredCompanies} />
        </Container>
    );
};

export default CompanyList;
