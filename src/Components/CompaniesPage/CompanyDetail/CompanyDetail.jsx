import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Avatar,
  IconButton,
  Grid,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Header from '../../../helpers/Header';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const GET_COMPANY_DETAILS = gql`
  query GetCompany($id: ID!) {
    company(id: $id) {
      _id
      name
      short_des
      description
      company_url
      logo
      location {
        city
        country
      }
      company_size
      languages
      is_sponservisa
      perks_and_benefits
      tags
      founding_year
      is_public
      industry
    }
  }
`;

const CompanyDetails = () => {
  const { companyId } = useParams();
  const { loading, error, data } = useQuery(GET_COMPANY_DETAILS, {
    variables: { id: companyId },
  });

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  const company = data ? data.company : null;

  if (!company) {
    return <p>Company not found</p>;
  }
  console.log(company)
  return (
    <>
      <Header heading={""} headerstyle={{ position: 'relative', height: '250px', overflow: 'hidden' }} />
      <Container>
        <Box my={4} display="flex">
          <Avatar
            src={company?.logo}
            alt={company.name}
            sx={{
              width: 150,
              height: 150,
              borderRadius: 3,
              marginRight: 2,
              marginTop: -10,
            }}
          />
          <Box flex={1}>
            <Typography variant="h4" gutterBottom sx={{ color: "#bcc7d2", marginTop: "-20px", fontWeight: "bolder" }}>
              {company.name}
            </Typography>
            <Box display="flex" alignItems="center">
              <IconButton href={company.company_url} sx={{ color: "#afb3b7", fontSize: "12px", marginTop: "-20px" }}>
                <LinkIcon sx={{ transform: "rotate(-45deg)", marginRight: "3px" }} /> {company.company_url}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container sx={{ backgroundColor: "#161616", margin: "60px", padding: "30px", width: "auto", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#bcc7d2", fontWeight: "bolder" }}>
          About {company.name}
        </Typography>
        <Typography variant="body2" style={{ color: "#5e7991" }}>
          <LocationOnIcon sx={{ marginRight: "5px", marginBottom: '-5px', color: "#85abcb" }} />
          {company.location.city}, {company.location.country}
          <span style={{ marginLeft: '10%' }}>
            <BusinessIcon sx={{ marginRight: "5px", marginBottom: '-5px', color: "#85abcb" }} />
            {company.company_size}
          </span>
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "#5e7991", marginTop: "20px" }}>
          {company.short_des}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "#5e7991", marginTop: "10px" }}>
          {company.description}
        </Typography>
      </Container>
      <Container sx={{ backgroundColor: "#161616", margin: "60px", padding: "30px", width: "auto", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#bcc7d2", fontWeight: "bolder" }}>
          Work Style
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Industry
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {/* {company.industry} */}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Foundation Date
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.founding_year}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Employee Count
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.company_size}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Global Headquarters
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.location.country}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Sponsors Visas
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.is_sponservisa === true ? "Yes" : "No"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Public Status
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.is_public === true ? "Public" : "Private"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
              Official Website
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography href={company?.company_url} variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.company_url}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
            Languagues Used
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.languages}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
            Perks & Benefits
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.perks_and_benefits}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom sx={{ color: "#5e7991" }}>
            Tags
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ color: "#bcc7d2" }}>
              {company.tags}
            </Typography>
          </Grid>
        </Grid>
      </Container >
    </>
  );
};

export default CompanyDetails;
