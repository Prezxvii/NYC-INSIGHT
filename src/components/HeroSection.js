// src/components/HeroSection.js

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import HeroImage from '../assets/hero-bg.jpg';

// --- IMAGE BACKGROUND COMPONENT ---
const HeroImageBackground = () => (
  <Box
    sx={{
      position: 'fixed', // ✅ Fixed background
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundImage: `url(${HeroImage})`,
      backgroundAttachment: 'fixed', // ✅ Keeps image fixed while scrolling
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(0.7)',
    }}
  />
);

// --- Framer Motion Animation Settings ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

// --- MAIN HERO SECTION ---
const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Fixed Background */}
      <HeroImageBackground />

      <Container maxWidth="md" sx={{ zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            component={motion.h1}
            variants={itemVariants}
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              lineHeight: 1.1,
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            All the latest info, updates, and news in <strong>New York City</strong>.
          </Typography>

          <Typography
            component={motion.p}
            variants={itemVariants}
            variant="h5"
            sx={{
              fontWeight: 400,
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            Powered by high-fidelity data for the best information you need to know.
          </Typography>

          <Box component={motion.div} variants={itemVariants} sx={{ mt: 5 }}>
            {/* You can add CTA buttons here later */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
