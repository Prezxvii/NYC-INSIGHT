// src/components/AppFooter.js

import React from 'react';
import { Box, Container, Typography, Grid, Link, Stack } from '@mui/material';
import { Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const footerLinks = [
  { title: 'Company', links: ['About Us', 'Careers', 'Press'] },
  { title: 'Resources', links: ['Terms of Service', 'Privacy Policy', 'Sitemap'] },
  { title: 'Support', links: ['FAQ', 'Contact Support', 'Help Center'] },
];

const AppFooter = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#f5f5f5', 
        py: 6, 
        borderTop: '1px solid #eee' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* 1. Branding and Social Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              NYC INSIGHT
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your high-fidelity source for the latest updates and news in New York City.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><LinkedIn /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
            </Stack>
          </Grid>
          
          {/* 2. Navigation Links */}
          {footerLinks.map((section) => (
            <Grid item xs={6} sm={3} md={2} key={section.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                {section.title}
              </Typography>
              <Stack spacing={0.5}>
                {section.links.map((link) => (
                  <Link 
                    href="#" 
                    variant="body2" 
                    color="text.secondary" 
                    underline="hover"
                    key={link}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

        </Grid>
        
        {/* Copyright */}
        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} NYC Insight. All rights reserved. Built with React and Material UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;