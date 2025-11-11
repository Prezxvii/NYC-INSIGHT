// src/components/NewsArticleCard.js

import React from 'react';
import { Card, CardMedia, CardContent, Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Framer Motion variant for animation (must match the one used in ContentLayout)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

// Utility: Date Formatter
const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        }).toUpperCase();
    } catch (e) {
        return '';
    }
};

const NewsArticleCard = ({ article }) => {
    const publishedDate = formatDate(article.publishedAt);
    const source = article.sourceName || 'Reporter';
    
    return (
      <Card 
        component={motion.a} 
        href={article.url}
        target="_blank" 
        rel="noopener noreferrer"
        variants={itemVariants}
        elevation={0} 
        sx={{ 
          height: '100%', 
          minHeight: 500, // Still ensures consistent height for grid alignment
          display: 'flex', 
          flexDirection: 'column',
          textDecoration: 'none', 
          color: 'inherit',
          backgroundColor: '#ffffff', // Clean white background
          borderRadius: '16px', // More pronounced rounded corners
          overflow: 'hidden',
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)', // Stronger, more modern shadow
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)', // More noticeable lift on hover
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)', // Enhanced hover shadow
          }
        }}
      >
        {/* Featured Image Area */}
        <Box sx={{ position: 'relative', height: 250, flexShrink: 0 }}> {/* Taller image */}
          <CardMedia
            component="img"
            height="100%"
            image={article.urlToImage || 'https://via.placeholder.com/600x400/eeeeee/aaaaaa?text=Image+Unavailable'} 
            alt={article.title}
            sx={{ objectFit: 'cover' }}
          />
          {/* News Tag Overlay */}
          <Box sx={{ 
            position: 'absolute', 
            top: 15, 
            right: 15, 
            backgroundColor: '#CC0000', 
            color: 'white', 
            px: 1.5, 
            py: 0.5, 
            borderRadius: '6px', 
            fontWeight: 700, 
            fontSize: '0.8rem',
            letterSpacing: 0.5
          }}>
            NEWS
          </Box>
        </Box>

        {/* Content Area */}
        <CardContent sx={{ 
          flexGrow: 1, 
          p: 3, 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between', // Pushes button to bottom
          borderTop: '1px solid #f0f0f0' // Subtle separation from image
        }}>
          
          {/* Metadata */}
          <Typography variant="body2" color="text.secondary" sx={{ 
            mb: 1.5, 
            letterSpacing: 0.8, 
            fontWeight: 500,
            textTransform: 'uppercase'
          }}>
            {publishedDate}{publishedDate && source && ' • '}{source}
          </Typography>
          
          {/* Title */}
          <Typography 
            gutterBottom 
            variant="h5" // Larger title for impact
            component="div" 
            sx={{ 
              fontWeight: 800, 
              lineHeight: 1.25, 
              mb: 2,
              color: '#333333' // Darker color for emphasis
            }}
          >
            {article.title}
          </Typography>
          
          {/* Description */}
          <Typography 
            variant="body1" // Slightly larger body text
            color="text.secondary" 
            sx={{ 
              mt: 0.5, 
              mb: 3, 
              lineHeight: 1.6, 
              flexGrow: 1, // Ensures description pushes button down
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3, // Limit description to 3 lines
              WebkitBoxOrient: 'vertical',
            }}
          >
            {article.description}
          </Typography>
          
          {/* Read More Button Area */}
          <Box sx={{ textAlign: 'left' }}>
            <Button 
              size="large" // Larger button
              variant="contained" // Solid background button
              color="primary"
              sx={{ 
                fontWeight: 700, 
                borderRadius: '30px', // Pill-shaped button
                px: 3, 
                py: 1,
                backgroundColor: '#CC0000', // Primary red
                '&:hover': {
                  backgroundColor: '#990000', // Darker red on hover
                }
              }} 
            >
              READ MORE
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
};

export default NewsArticleCard;