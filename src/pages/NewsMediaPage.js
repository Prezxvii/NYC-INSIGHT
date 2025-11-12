// src/pages/NewsMediaPage.js (Fixed)

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  // Paper, // REMOVED: Unused import
} from '@mui/material';
import { 
  Article as ArticleIcon, 
  Public as PublicIcon, 
  RssFeed as RssFeedIcon, 
  Phone as PhoneIcon,
  Twitter as TwitterIcon,
  Newspaper as NewspaperIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material';

// --- MOCK DATA FOR NEWS FEED (Unchanged) ---
const mockNewsFeed = [
  {
    id: 1,
    title: "City Council Passes Landmark Climate Resiliency Bill",
    source: "NYC Official News",
    date: "November 10, 2025",
    summary: "The bill allocates $1.2 billion for coastal defense projects and green infrastructure development across the five boroughs.",
    link: "#",
    tag: "Government"
  },
  {
    id: 2,
    title: "MTA Announces Launch of New Express Ferry Service to Staten Island",
    source: "Transit Authority Press Release",
    date: "November 9, 2025",
    summary: "New route aims to cut commuter travel time by 20 minutes and reduce pressure on subway lines during peak hours.",
    link: "#",
    tag: "Transit"
  },
  {
    id: 3,
    title: "New Public Art Installation Unveiled in Central Park",
    source: "Department of Cultural Affairs",
    date: "November 8, 2025",
    summary: "The temporary sculpture, 'The Urban Echo,' will be on display for six months near the Bethesda Terrace.",
    link: "#",
    tag: "Culture"
  },
  {
    id: 4,
    title: "Mayor's Office Responds to Budget Surplus Questions Ahead of Annual Review",
    source: "Political Beat",
    date: "November 7, 2025",
    summary: "Officials indicate a conservative approach to spending, focusing on replenishing emergency reserves.",
    link: "#",
    tag: "Government"
  },
];

// --- EXTERNAL MEDIA LINKS (Unchanged) ---
const externalLinks = [
    { name: "The New York Times", icon: <NewspaperIcon sx={{ color: '#000' }} />, url: "https://www.nytimes.com/section/nyregion" },
    { name: "NY1 News (Live Feed)", icon: <RssFeedIcon sx={{ color: '#000' }} />, url: "https://www.ny1.com" },
    { name: "NYC Mayor's Official X/Twitter", icon: <TwitterIcon sx={{ color: '#000' }} />, url: "https://twitter.com/NYCMayor" },
    { name: "Spectrum News NYC Weather", icon: <PublicIcon sx={{ color: '#000' }} />, url: "https://weather.com/weather/today/l/USNY0996:1:US" },
];

const NewsMediaPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Page Header - Black Accent */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 800, mb: 2, color: '#000000' }}
        >
          <ArticleIcon sx={{ mr: 1, fontSize: 40, verticalAlign: 'middle' }} />
          News & Media Center
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Latest updates, press releases, and key media resources for New York City.
        </Typography>
        <Divider sx={{ mb: 4 }} />

        {/* Main Content Grid: 8 columns for News Feed, 4 columns for Sidebar */}
        <Grid container spacing={4}>
          
          {/* --- PRIMARY COLUMN: NEWS FEED (md=8) --- */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#333' }}>
              Official Announcements
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {mockNewsFeed.map((item) => (
                // Cleaned Card Style: Minimal elevation, defined background
                <Card 
                  key={item.id} 
                  elevation={0} 
                  sx={{ 
                    border: '1px solid #eee', 
                    borderRadius: 2, 
                    backgroundColor: '#ffffff' 
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12} sm={10} sx={{ textAlign: 'left' }}>
                        
                        {/* Tags and Source/Date */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Chip 
                                label={item.tag} 
                                size="small" 
                                sx={{ 
                                    textTransform: 'uppercase', 
                                    fontWeight: 600, 
                                    backgroundColor: '#000000', // Black Chip
                                    color: '#ffffff' 
                                }} 
                            />
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccessTimeIcon sx={{ fontSize: 14, mr: 0.5 }} /> {item.date}
                            </Typography>
                        </Box>
                        
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, mt: 1, color: '#333' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Source: **{item.source}**
                        </Typography>
                        
                        <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                          {item.summary}
                        </Typography>
                        
                        <Button 
                            variant="text" 
                            size="medium" 
                            href={item.link} 
                            target="_blank"
                            sx={{ color: '#000000', fontWeight: 600, borderBottom: '2px solid #000000' }}
                        >
                          Read Full Story
                        </Button>
                      </Grid>
                      
                      {/* Placeholder for an icon on larger screens (md=2) */}
                      <Grid item xs={ false } sm={2} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
                         <NewspaperIcon sx={{ fontSize: 90, color: '#eeeeee' }} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Box>
            
            {/* Pagination or "Load More" Placeholder - Black Button */}
            <Box sx={{ mt: 5, textAlign: 'center' }}>
              <Button 
                variant="contained" 
                startIcon={<RssFeedIcon />}
                sx={{ 
                    backgroundColor: '#000000', 
                    color: '#ffffff', 
                    fontWeight: 700,
                    py: 1.2,
                    "&:hover": { backgroundColor: '#333333' }
                }}
              >
                Load Older Articles
              </Button>
            </Box>
          </Grid>
          
          {/* --- SIDEBAR COLUMN: RESOURCES & CONTACT (md=4) --- */}
          <Grid item xs={12} md={4}>
            
            {/* Media Resources Card - Cleaned */}
            <Card elevation={3} sx={{ mb: 4, borderRadius: 3, backgroundColor: '#ffffff' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 700, color: '#000' }}>
                  External Media Resources
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List dense>
                    {externalLinks.map((link) => (
                        <ListItem key={link.name} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 40 }}>{link.icon}</ListItemIcon>
                            <ListItemText 
                                primary={
                                    <Link 
                                        href={link.url} 
                                        target="_blank" 
                                        underline="hover" 
                                        sx={{ fontWeight: 600, color: '#333' }}
                                    >
                                        {link.name}
                                    </Link>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
              </CardContent>
            </Card>

            {/* Press Contact Card - Cleaned */}
            <Card elevation={3} sx={{ borderRadius: 3, backgroundColor: '#ffffff' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 700, color: '#000' }}>
                  Press Contact
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>
                  Office of Communications
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  For urgent media inquiries only.
                </Typography>
                <Button 
                    variant="contained" 
                    size="medium" 
                    startIcon={<PhoneIcon />}
                    href="tel:+12125551234"
                    sx={{ 
                        mt: 1, 
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        fontWeight: 600,
                        "&:hover": { backgroundColor: '#333333' }
                    }}
                >
                    (212) 555-1234
                </Button>
              </CardContent>
            </Card>
            
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsMediaPage;
