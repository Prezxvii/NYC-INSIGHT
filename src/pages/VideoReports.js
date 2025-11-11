import React from 'react';
import { Box, Container, Button, Typography, Grid, Paper } from '@mui/material';
import { OndemandVideo as VideoIcon, YouTube as YouTubeIcon, RssFeed as ChannelIcon } from '@mui/icons-material';

// ✅ EXPANDED list with 15 Ultra-Stable Videos covering Arts, Culture, and Government
const videoReports = [
  // --- GOVERNMENT & POLITICS (NEW) ---
  {
    title: "The Birth of New York City's Municipal Government (1653 Charter)",
    channel: "NYC Municipal Archives",
    url: "https://www.youtube.com/watch?v=bAR2fN3hDkY",
    video_id: "bAR2fN3hDkY",
  },
  {
    title: "The Fall and Rise of New York | A Documentary on Political Leadership",
    channel: "The Documentary Channel",
    url: "https://www.youtube.com/watch?v=HanaEhXvWFE",
    video_id: "HanaEhXvWFE",
  },
  {
    title: "Walking NYC (Narrated): New York City Hall Area & Civic Center",
    channel: "Walking Tour",
    url: "https://m.youtube.com/watch?v=xxWiz1qln8U",
    video_id: "xxWiz1qln8U",
  },
  {
    title: "Policy Advice for NYC's Next Mayor Amid Wider Federal Cuts",
    channel: "Columbia SIPA",
    url: "https://www.youtube.com/watch?v=S38NzuBpZ2E",
    video_id: "S38NzuBpZ2E",
  },
  {
    title: "LIVE: Watch New York City Council's Stated Meeting from City Hall",
    channel: "NYCCouncil",
    url: "https://www.youtube.com/watch?v=B0Vf-IB3ORs",
    video_id: "B0Vf-IB3ORs",
  },
  
  // --- ARTS & MUSEUMS (EXISTING) ---
  {
    title: "The Metropolitan Museum of Art, Part 1: Ancient History and Masterpieces",
    channel: "4K Walking Tour",
    url: "https://www.youtube.com/watch?v=paN01mDDPj8",
    video_id: "paN01mDDPj8",
  },
  {
    title: "American Museum of Natural History: Dinosaur Halls and Ocean Life",
    channel: "Virtual Museum Tours",
    url: "https://www.youtube.com/watch?v=WRfz4s0q1Vc",
    video_id: "WRfz4s0q1Vc",
  },
  {
    title: "New York City c.1899: Restored Archival Footage (History & Transit)",
    channel: "History Restored",
    url: "https://www.youtube.com/watch?v=UERgaTAPKb4",
    video_id: "UERgaTAPKb4", 
  },
  {
    title: "Is New York The Global Capital Of The Arts? (Full Documentary)",
    channel: "Arts Documentary",
    url: "https://www.youtube.com/watch?v=2Hv-0IVRm6Y",
    video_id: "2Hv-0IVRm6Y",
  },
  {
    title: "Preserving NYC's Rich Cultural Heritage: Landmarks Commission Lecture",
    channel: "Landmarks Preservation Commission",
    url: "https://www.youtube.com/watch?v=tEBcFDlt1xQ",
    video_id: "tEBcFDlt1xQ",
  },
  {
    title: "Making Collections, Revealing Histories: The Whitney Museum Perspective",
    channel: "Whitney Museum",
    url: "https://www.youtube.com/watch?v=WpBSTFmluWQ",
    video_id: "WpBSTFmluWQ",
  },
  
  // --- NEWS, WEATHER, & LIFESTYLE (EXISTING) ---
  {
    title: "Extreme Cold In New York City: A Look at Winter Weather (News)",
    channel: "CBS New York Archive",
    url: "https://www.youtube.com/watch?v=Pv8IoWkROqA",
    video_id: "Pv8IoWkROqA",
  },
  {
    title: "A hidden New York gem curates culture that might otherwise be lost (City Lore)",
    channel: "Cultural Institutions",
    url: "https://www.youtube.com/watch?v=KZlbr4GojIc",
    video_id: "KZlbr4GojIc",
  },
  {
    title: "The Metropolitan Museum of Art, Part 2: European Masters and Islamic Art",
    channel: "4K Walking Tour",
    url: "https://www.youtube.com/watch?v=HSIysRlXu3M",
    video_id: "HSIysRlXu3M",
  },
  {
    title: "NYC VLOG: Day in the Life Exploring the City and Living my Best Life",
    channel: "Taykbell",
    url: "https://www.youtube.com/watch?v=Cqg8tQH4U8M",
    video_id: "Cqg8tQH4U8M",
  },
];

// 🎞 Helper component for responsive video embedding (UNCHANGED)
const VideoEmbed = ({ youtubeId, title }) => (
  <Paper
    elevation={4}
    sx={{
      overflow: 'hidden',
      height: 0,
      paddingBottom: '56.25%',
      position: 'relative',
      borderRadius: 2,
    }}
  >
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}`} 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title={title}
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  </Paper>
);

const VideoReportsPage = () => {
  return (
    <Box
      sx={{
        py: 8,
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}> 
        {/* Page Header (unchanged) */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          <VideoIcon sx={{ mr: 1, fontSize: 36, verticalAlign: 'middle' }} />
          Featured NYC Video Reports
        </Typography>

        {/* Video Grid - FIX: Uses alignItems="stretch" to equalize row heights */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {videoReports.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={video.video_id || index}>
              <Box sx={{ height: '100%' }}> 
                <VideoEmbed youtubeId={video.video_id} title={video.title} /> 
                
                {/* Content Box with Fixed Min-Height and Flexbox for uniform sizing */}
                <Box 
                  sx={{ 
                    minHeight: '120px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    pt: 1 
                  }}
                >
                    <Box>
                        {/* 🔑 FIX: CSS to limit title to 2 lines and add ellipsis for consistent height */}
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mt: 1, 
                            fontWeight: 600, 
                            fontSize: '1.1rem',
                            // Line limiting CSS
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            minHeight: '2.4em' 
                          }}
                        >
                          {video.title}
                        </Typography>
                        
                        {/* Video Channel/Source (unchanged) */}
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}
                        >
                          <ChannelIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          {video.channel}
                        </Typography>
                    </Box>

                    {/* Button (unchanged) */}
                    <Button
                      size="small"
                      href={video.url} 
                      target="_blank"
                      startIcon={<YouTubeIcon />}
                      sx={{ mt: 1 }}
                    >
                      Watch on YouTube
                    </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoReportsPage;

