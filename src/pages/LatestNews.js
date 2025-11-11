import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Launch as LaunchIcon, AccessTime as TimeIcon } from '@mui/icons-material';

// Dummy data for news articles
const newsArticles = [
  { id: 1, title: "City Council Approves New Housing Development in Queens", source: "NYC Today", time: "2 hours ago", link: "#", summary: "A major vote passed last night, paving the way for 500 new affordable housing units." },
  { id: 2, title: "Subway Delays Expected Due to Track Maintenance", source: "MTA Updates", time: "5 hours ago", summary: "Commuters on the A, C, and E lines should expect up to 15-minute delays throughout the morning.", link: "#" },
  { id: 3, title: "Local Parks See Record Attendance This Weekend", source: "Parks Dept.", time: "1 day ago", summary: "Central Park and Prospect Park recorded high visitor numbers, stressing the need for more park funding.", link: "#" },
  { id: 4, title: "New Tech Incubator Opens in Brooklyn Navy Yard", source: "Tech Hub", time: "2 days ago", summary: "The facility aims to support 20 startups in its first year, focusing on clean energy technologies.", link: "#" },
];

const LatestNewsPage = () => {
  return (
    <Box sx={{ py: 8, minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <Container 
        maxWidth="lg" 
        // 🔑 Apply textAlign: 'center' to center the heading and grid content
        sx={{ textAlign: 'center' }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Latest News Updates
        </Typography>

        {/* The Grid itself needs no centering because it fills the container.
            The individual Grid items (cards) will also align to the center 
            of the container since we set the container to textAlign: 'center'.
        */}
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          {newsArticles.map((article) => (
            // The item sizes (xs=12, sm=6, md=3) are what control the layout
            <Grid item xs={12} sm={6} md={3} key={article.id}>
              <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: '0.3s', 
                  '&:hover': { boxShadow: 6 },
                  // Ensure text within the card is NOT centered (left-aligned is better for readability)
                  textAlign: 'left' 
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="text.secondary" display="flex" alignItems="center" gutterBottom>
                    <TimeIcon sx={{ fontSize: 14, mr: 0.5 }} /> {article.time}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {article.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="text" href={article.link} endIcon={<LaunchIcon />} target="_blank">
                    Read Full Story
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestNewsPage;