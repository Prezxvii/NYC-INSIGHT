import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Stack, 
  Menu, 
  MenuItem, 
  TextField, 
  InputAdornment, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider // <--- FIXED: Added Divider import
} from '@mui/material';
import { KeyboardArrowDown as ArrowDownIcon, Search as SearchIcon, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Define the custom font stack for the logo
const logoFontFamily = '"Helvetica Neue", Arial, sans-serif'; 

// Define the main navigation links
const navLinks = [
  { title: 'Home', path: '/' }, 
  { 
    title: 'City Insights', 
    path: '#',
    hasDropdown: true,
    dropdownItems: [
        { title: 'Latest News', path: '/news' },
        { title: 'Video Reports', path: '/videos' },
        { title: 'Local Events', path: '/events' },
    ]
  },
  { title: 'News & Media', path: '/media' }, 
  { title: 'Contact', path: '/contact' },
  { title: 'Feedback', path: '/survey', isHighlight: true }
];

const MotionArrowDownIcon = motion(ArrowDownIcon);

const AppHeader = ({ searchValue, onSearchChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const insightLink = navLinks.find(link => link.hasDropdown);

  const handleMenuClick = (event) => {
    if (insightLink) {
        setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton sx={{ color: 'primary.main' }}>
            <CloseIcon />
        </IconButton>
      </Box>
      <Divider /> {/* This is the line that caused the error */}
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton 
              component={Link} 
              to={link.path !== '#' ? link.path : link.title === 'City Insights' ? '/news' : link.path}
              onClick={link.hasDropdown ? undefined : handleDrawerToggle}
              sx={{ textAlign: 'center', py: 1.5 }}
            >
              <ListItemText 
                primary={link.title} 
                primaryTypographyProps={{ 
                  fontWeight: link.isHighlight ? 700 : 500,
                  color: link.isHighlight ? '#ffffff' : 'primary.main',
                  backgroundColor: link.isHighlight ? '#000000' : 'transparent',
                  padding: link.isHighlight ? '8px 16px' : '0',
                  borderRadius: link.isHighlight ? '4px' : '0',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Mobile Auth Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, mb: 2 }}>
            <Button 
                variant="text" 
                color="primary" 
                component={Link} 
                to="/login"
                onClick={handleDrawerToggle}
            >
                Login
            </Button>
            <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#000000', 
                  color: '#ffffff', 
                  '&:hover': { backgroundColor: '#333333' } 
                }}
                component={Link} 
                to="/signup"
                onClick={handleDrawerToggle}
            >
                Sign Up
            </Button>
        </Box>
      </List>
    </Box>
  );

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
      <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, md: 1 } }}>
        
        {/* 1. Website Name / Logo (Left) */}
        <Typography 
          variant="h6" 
          noWrap 
          component={Link}
          to="/"
          sx={{ 
            fontWeight: 800, 
            letterSpacing: '2px', 
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: 'primary.main',
            fontFamily: logoFontFamily,
          }}
        >
          NYC INSIGHT
        </Typography>

        {/* 2. Centered Navigation Links (Desktop Only) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack direction="row" spacing={3}>
            {navLinks.map((link) => (
              <Button 
                key={link.title} 
                color="primary" 
                component={!link.hasDropdown ? Link : 'button'} 
                to={link.path}
                
                // Highlight the Feedback button (Black on White)
                variant={link.isHighlight ? 'contained' : 'text'}
                sx={{
                  fontSize: '1rem',
                  fontWeight: link.isHighlight ? 700 : 500,
                  
                  ...(link.isHighlight && {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    '&:hover': { 
                      backgroundColor: '#333333', 
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
                aria-controls={link.hasDropdown ? 'insight-menu' : undefined}
                aria-haspopup={link.hasDropdown ? 'true' : undefined}
                onClick={link.hasDropdown ? handleMenuClick : undefined}
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
        
        {/* MUI Menu Component for Dropdown (Desktop) */}
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
                    component={Link} 
                    to={item.path}
                >
                    {item.title}
                </MenuItem>
            ))}
        </Menu>

        {/* 3. Search, Auth Buttons, and Mobile Toggle (Right) */}
        <Stack direction="row" spacing={1} alignItems="center">
          
          {/* Search Input (Hidden on Mobile) */}
          <TextField
            size="small"
            placeholder="Search NYC News..."
            variant="outlined"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              style: { backgroundColor: '#ffffff', borderRadius: '4px' }
            }}
          />

          {/* Auth Buttons (Desktop Only) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button 
              variant="text" 
              color="primary" 
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#000000', 
                color: '#ffffff', 
                fontWeight: 700, 
                '&:hover': { backgroundColor: '#333333' } 
              }}
              component={Link} 
              to="/signup"
            >
              Sign Up
            </Button>
          </Box>
          
          {/* Mobile Menu Icon (Mobile Only) */}
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
        
      </Toolbar>
      
      {/* Mobile Navigation Drawer */}
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default AppHeader;
