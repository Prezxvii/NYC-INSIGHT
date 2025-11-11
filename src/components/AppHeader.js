// src/components/AppHeader.js (Updated with react-router-dom Links and Survey button)

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack, Menu, MenuItem, TextField, InputAdornment } from '@mui/material';
import { KeyboardArrowDown as ArrowDownIcon, Search as SearchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- NEW IMPORT for routing

// Define the main navigation links
const navLinks = [
  // UPDATED: All paths are correctly set to their final routes
  { title: 'Home', path: '/' }, 
  { 
    title: 'City Insights', 
    path: '#', // Set to '#' since it's just a dropdown trigger
    hasDropdown: true,
    dropdownItems: [
        { title: 'Latest News', path: '/news' },
        { title: 'Video Reports', path: '/videos' },
        { title: 'Local Events', path: '/events' },
    ]
  },
  { title: 'News & Media', path: '/media' }, 
  { title: 'Contact', path: '/contact' },
  // Link to the Survey/Feedback page
  { title: 'Feedback', path: '/survey', isHighlight: true }
];

// Create a motion version of the icon component for animation
const MotionArrowDownIcon = motion(ArrowDownIcon);

const AppHeader = ({ searchValue, onSearchChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // We find the link item to power the dropdown menu
  const insightLink = navLinks.find(link => link.hasDropdown);

  const handleMenuClick = (event) => {
    // Only open the menu if the link has a dropdown
    if (insightLink) {
        setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        borderBottom: '1px solid #eee',
        backgroundColor: 'background.paper', 
        zIndex: (theme) => theme.zIndex.appBar 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        
        {/* 1. Website Name / Logo (Left) */}
        <Typography 
          variant="h6" 
          noWrap 
          component={Link}
          to="/"
          sx={{ fontWeight: 700, letterSpacing: '2px', cursor: 'pointer', textDecoration: 'none', color: 'primary.main' }}
        >
          NYC INSIGHT
        </Typography>

        {/* 2. Centered Navigation Links (Middle) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack direction="row" spacing={3}>
            {navLinks.map((link) => (
              <Button 
                key={link.title} 
                color="primary" 
                // Set the component to Link only if it doesn't have a dropdown, otherwise it triggers the Menu
                component={!link.hasDropdown ? Link : 'button'} 
                to={link.path}
                
                // Highlight the Feedback button
                variant={link.isHighlight ? 'contained' : 'text'}
                color={link.isHighlight ? 'inherit' : 'primary'} 
                
                aria-controls={link.hasDropdown ? 'insight-menu' : undefined}
                aria-haspopup={link.hasDropdown ? 'true' : undefined}
                onClick={link.hasDropdown ? handleMenuClick : undefined}
                sx={{
                  fontSize: '1rem',
                  fontWeight: link.isHighlight ? 700 : 500,
                  
                  ...(link.isHighlight && {
                    backgroundColor: '#ffffff', // White background
                    color: '#000000',          // Black text
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    '&:hover': { 
                      backgroundColor: '#f0f0f0', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                    },
                  }),
                  
                  ...(!link.isHighlight && {
                    '&:hover': {
                      backgroundColor: 'transparent', 
                      opacity: 0.7 
                    }
                  })
                }}
              >
                {link.title}
                {/* ANIMATED ARROW */}
                {link.hasDropdown && (
                    <MotionArrowDownIcon 
                        animate={{ rotate: open ? 180 : 0 }} 
                        transition={{ duration: 0.2 }}
                        sx={{ ml: 0.5, fontSize: '1.2rem' }}
                    />
                )}
              </Button>
            ))}
          </Stack>
        </Box>
        
        {/* MUI Menu Component for Dropdown */}
        <Menu
            id="insight-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'city-insights-button',
            }}
        >
            {insightLink && insightLink.dropdownItems.map((item) => (
                <MenuItem 
                    key={item.title} 
                    onClick={handleMenuClose} 
                    // Use Link component inside MenuItem for router navigation
                    component={Link} 
                    to={item.path}
                >
                    {item.title}
                </MenuItem>
            ))}
        </Menu>

        {/* 3. Search, Login, and Sign Up Buttons (Right) */}
        <Stack direction="row" spacing={1} alignItems="center">
          
          {/* Search Input */}
          <TextField
            size="small"
            placeholder="Search NYC News..."
            variant="outlined"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{ width: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              style: { backgroundColor: '#ffffff', borderRadius: '4px' }
            }}
          />

          {/* 🔑 UPDATED: Login Link */}
          <Button 
            variant="text" 
            color="primary" 
            sx={{ textTransform: 'none' }}
            component={Link} // Use Link component
            to="/login"      // Link to the new Login page
          >
            Login
          </Button>
          
          {/* 🔑 UPDATED: Sign Up Link */}
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ textTransform: 'none' }}
            component={Link} // Use Link component
            to="/signup"     // Link to the new Sign Up page
          >
            Sign Up
          </Button>
        </Stack>
        
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;