import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const countryList = [
    { name: 'All', code: 'all' },
    { name: 'Canada', code: 'canada' },
    { name: 'India', code: 'india' },
    { name: 'Japan', code: 'japan' },
    { name: 'UK', code: 'uk' },
    { name: 'USA', code: 'usa' },
];

const DesktopNavbar = ({ menuItems }) => {
    const [jobsMenuAnchorEl, setJobsMenuAnchorEl] = React.useState(null);
    const [companyMenuAnchorEl, setCompanyMenuAnchorEl] = React.useState(null);

    const handleJobsMenuClick = (event) => setJobsMenuAnchorEl(event.currentTarget);
    const handleJobsMenuClose = () => setJobsMenuAnchorEl(null);

    const handleCompanyMenuClick = (event) => setCompanyMenuAnchorEl(event.currentTarget);
    const handleCompanyMenuClose = () => setCompanyMenuAnchorEl(null);

    return (
        <div style={{ display: 'flex', margin: '20px 20px'}}>
            {menuItems.map((item, index) => (
                item.text === 'Jobs' ? (
                    <React.Fragment key={index}>
                        <Button
                            aria-controls="jobs-menu"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleJobsMenuClick}
                        >
                            {item.text}
                        </Button>
                        <Menu
                            id="jobs-menu"
                            anchorEl={jobsMenuAnchorEl}
                            keepMounted
                            open={Boolean(jobsMenuAnchorEl)}
                            onClose={handleJobsMenuClose}
                            PaperProps={{
                                style: {
                                    backgroundColor: '#141414',
                                    color: 'white',
                                    width: '150px',
                                },
                            }}
                        >
                            {countryList.map((country) => (
                                <MenuItem
                                    key={country.code}
                                    component={Link}
                                    to={`/jobs/${country.code}`}
                                    onClick={handleJobsMenuClose}
                                    style={{ justifyContent: 'center' }}
                                >
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </React.Fragment>
                ) : item.text === 'Company' ? (
                    <React.Fragment key={index}>
                        <Button
                            aria-controls="company-menu"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleCompanyMenuClick}
                        >
                            {item.text}
                        </Button>
                        <Menu
                            id="company-menu"
                            anchorEl={companyMenuAnchorEl}
                            keepMounted
                            open={Boolean(companyMenuAnchorEl)}
                            onClose={handleCompanyMenuClose}
                            PaperProps={{
                                style: {
                                    backgroundColor: '#141414',
                                    color: 'white',
                                    width: '150px',
                                },
                            }}
                        >
                            {countryList.map((country) => (
                                <MenuItem
                                    key={country.code}
                                    component={Link}
                                    to={`/company/${country.code}`}
                                    onClick={handleCompanyMenuClose}
                                    style={{ justifyContent: 'center' }}
                                >
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </React.Fragment>
                ) : (
                    <Button key={index} color="inherit" component={Link} to={item.link}>
                        {item.text}
                    </Button>
                )
            ))}
        </div>
    );
};

export default DesktopNavbar;
