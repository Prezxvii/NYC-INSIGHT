// src/components/ContentLayout.js

import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid, Typography, Box, CircularProgress } from '@mui/material';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import NewsArticleCard from './NewsArticleCard'; 

// --- NEWSAPI CONFIGURATION ---
const NEWSAPI_KEY = '46c7224f350846e0b5932cb038f8e6e0';
const NEWSAPI_URL = 'https://newsapi.org/v2/everything';
const DEFAULT_QUERY = 'New York City';

// --- YOUTUBE VIDEO DATA ---
const youtubeVideoFallback = [
  {
    title: "Zohran Mamdani claims victory in NYC Democratic mayoral primary | Full speech",
    channel: "CBS New York",
    url: "https://www.youtube.com/watch?v=yxyXXVoi514",
    video_id: "yxyXXVoi514",
  },
  {
    title: "MTA unveils new subway map for first time since 50 years",
    channel: "CBS New York",
    url: "https://www.youtube.com/watch?v=Z6hFLHhVSmY",
    video_id: "Z6hFLHhVSmY",
  },
  {
    title: "Cooling centers provide relief during heat wave in NYC",
    channel: "NYC News / Local Channel",
    url: "https://www.youtube.com/watch?v=VRs917WJ9YM",
    video_id: "VRs917WJ9YM",
  },
  {
    title: "Mayor Eric Adams Makes Public Safety & Heat-Related Announcement",
    channel: "Local News",
    url: "https://www.youtube.com/watch?v=zDUu0dEUihk",
    video_id: "zDUu0dEUihk",
  },
  {
    title: "Changes coming to the New York Subway — major service & routing updates",
    channel: "Transit News",
    url: "https://www.youtube.com/watch?v=ebhWRIqUqUM",
    video_id: "ebhWRIqUqUM",
  },
  {
    title: "NYC heat: Dangerous weather continues for Tri-State in heat-wave alert",
    channel: "ABC7 NY",
    url: "https://www.youtube.com/watch?v=kFenxqrjOc4",
    video_id: "kFenxqrjOc4",
  },
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- YOUTUBE VIDEO CARD ---
const YoutubePlayerCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${video.video_id}?autoplay=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`;

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <Box
              onClick={() => setIsPlaying(true)}
              sx={{
                position: 'relative',
                height: '100%',
                cursor: 'pointer',
                backgroundImage: `url(${thumbnailUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(204, 0, 0, 0.9)',
                  borderRadius: '50%',
                  p: 2,
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: '#990000',
                    transform: 'scale(1.1)',
                    boxShadow: '0 0 0 10px rgba(204, 0, 0, 0.3)',
                  },
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 40 }} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.channel}
        </Typography>
      </Box>
    </Box>
  );
};

// --- MAIN CONTENT LAYOUT ---
const ContentLayout = ({ searchValue = '' }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const isSearching = searchValue.length > 0;

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const queryTerm = encodeURIComponent(searchValue || DEFAULT_QUERY);
        const url = `${NEWSAPI_URL}?q=${queryTerm}&language=en&sortBy=publishedAt&pageSize=12&apiKey=${NEWSAPI_KEY}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        const mappedArticles = data.articles.map((article, index) => ({
          id: index,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
          sourceName: article.source.name,
        }));

        setArticles(mappedArticles);
      } catch (e) {
        console.error("NewsAPI Fetch Error:", e);
        setError("Failed to load news. Please try again later. (API Key or network issue)");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [searchValue]);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 300, borderBottom: '2px solid #eee', pb: 1 }}>
        {isSearching ? `Search Results for: "${searchValue}"` : 'Latest City Updates'}
      </Typography>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
          <CircularProgress color="primary" />
        </Box>
      )}

      {error && (
        <Typography color="error" align="center" sx={{ py: 3 }}>
          {error}
        </Typography>
      )}

      {!isLoading && articles.length === 0 && !error && (
        <Typography variant="h6" color="secondary" sx={{ py: 4, textAlign: 'center' }}>
          No articles found.
        </Typography>
      )}

      {!isLoading && articles.length > 0 && (
        <Grid
          container
          spacing={4}
          ref={ref}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.url}>
              <NewsArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      )}

      {!isSearching && (
        <>
          <Box sx={{ my: 8 }} />
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 300, borderBottom: '2px solid #eee', pb: 1 }}>
            Video Reports & Media
          </Typography>

          <Grid container spacing={4}>
            {youtubeVideoFallback.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.video_id}>
                <YoutubePlayerCard video={video} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ContentLayout;




