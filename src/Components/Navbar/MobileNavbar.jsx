import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

const countryList = [
    { name: 'All', code: 'all' },
    { name: 'Canada', code: 'canada' },
    { name: 'India', code: 'india' },
    { name: 'Japan', code: 'japan' },
    { name: 'UK', code: 'uk' },
    { name: 'USA', code: 'usa' },
];

const MobileNavbar = ({ menuItems }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [jobsAnchorEl, setJobsAnchorEl] = React.useState(null);
    const [companyAnchorEl, setCompanyAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setJobsAnchorEl(null);
        setCompanyAnchorEl(null);
    };

    const handleJobsClick = (event) => {
        setJobsAnchorEl(jobsAnchorEl ? null : event.currentTarget);
    };

    const handleCompanyClick = (event) => {
        setCompanyAnchorEl(companyAnchorEl ? null : event.currentTarget);
    };

    const handleJobsClose = () => {
        setJobsAnchorEl(null);
        handleClose();
    };

    const handleCompanyClose = () => {
        setCompanyAnchorEl(null);
        handleClose();
    };

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: '#161616',
                        color: 'white',
                        width: '100%',
                        maxHeight:'50%'
                    },
                }}
            >
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.text === 'Jobs' && (
                            <>
                                <MenuItem onClick={handleJobsClick} style={{ justifyContent: 'center' }}>
                                    {item.text}
                                </MenuItem>
                                {Boolean(jobsAnchorEl) && (
                                    <div>
                                        {countryList.map((country) => (
                                            <MenuItem
                                                key={country.code}
                                                component={Link}
                                                to={`/jobs/${country.code}`}
                                                onClick={handleJobsClose}
                                                style={{ justifyContent: 'center', backgroundColor:'#2e2e2e' }}
                                            >
                                                {country.name}
                                            </MenuItem>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                        {item.text === 'Company' && (
                            <>
                                <MenuItem onClick={handleCompanyClick} style={{ justifyContent: 'center' }}>
                                    {item.text}
                                </MenuItem>
                                {Boolean(companyAnchorEl) && (
                                    <div>
                                        {countryList.map((country) => (
                                            <MenuItem
                                                key={country.code}
                                                component={Link}
                                                to={`/company/${country.code}`}
                                                onClick={handleCompanyClose}
                                                style={{ justifyContent: 'center', backgroundColor:'#2e2e2e' }}
                                            >
                                                {country.name}
                                            </MenuItem>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                        {item.text !== 'Jobs' && item.text !== 'Company' && (
                            <MenuItem onClick={handleClose} style={{ justifyContent: 'center' }}>
                                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {item.text}
                                </Link>
                            </MenuItem>
                        )}
                    </React.Fragment>
                ))}
            </Menu>
        </div>
    );
};

export default MobileNavbar;
